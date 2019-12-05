"use strict";
var hc_$ = jQuery.noConflict(true);

function hc_(options) {
	/*jshint validthis:true */
	this.events = {};
	this.version = "0.3.1";

	if (isNaN(options.cost)) {
		options.cost = null;
		options.costModel = null;
	}

	var hc_this = this;
	/*var oldTrackingPrefix = "http://as.aug.me/a/trk/t/#events#/b/" + options.buyId + "/i/" + options.lineItem + "/ad_id/" + options.adId + "/pt/" + options.pt;*/
    var oldTrackingPrefix = "";

	/* hip tag */
	/*var tag = (options.prod) ? "//d22ylnb9mzp7pk.cloudfront.net/v2.1/hc.js" : "//d3amtlegn78fof.cloudfront.net/v2.1/hc.js";*/
    var tag = (options.prod) ? "" : "";
    /*var collector = (options.prod) ? "d2a4czoz73olwb.cloudfront.net" : "d2tk74n3r5zahw.cloudfront.net";*/
	var collector = (options.prod) ? "" : "";

	var rnd = Math.random().toString(36).substring(2);

	(function(p, l, o, w, i, n, g) {
		if (!p[i]) {
			p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
			p.GlobalSnowplowNamespace.push(i);
			p[i] = function() {
				(p[i].q = p[i].q || []).push(arguments);
			};
			p[i].q = p[i].q || [];
			n = l.createElement(o);
			g = l.getElementsByTagName(o)[0];
			n.async = 1;
			n.src = w;
			g.parentNode.insertBefore(n, g);
		}
	}(window, document, "script", tag, "hc_hipTagTracker"));

	window.hc_hipTagTracker('newTracker', rnd, collector, {
		cookieDomain: ".aug.me"
	});
	window.hc_hipTagTracker('enableActivityTracking', 10, 10);
	window.hc_hipTagTracker('trackAdImpression:' + rnd, options.augmeId, options.costModel, options.cost, '', options.adId, '', options.clientId, options.campaignId,
	[
		{
			"schema": "iglu:com.hipcricket/ad_extended/jsonschema/1-0-0",
			"data": {
				"publisherId": options.publisherId,
				"bidrequestId": options.bidRequestId,
				"sourceId": options.sourceId,
				"sourceType": options.sourceType,
				"buyId": options.buyId,
				"lineitemId": options.lineItem
			}
		}
	]);


	/* COMMON LIBRARIES USED BY RICH MEDIA */

	/* open and close functionality */
	hc_$(function() {

		hc_$("#hc_richmedia  .hc_initial_view .hc_expand").on('click', function(e) {
			e.stopPropagation();
			if ("undefined" !== typeof mraid) {
				mraid.useCustomClose(true);
				mraid.expand();
			}

			hc_$("#hc_richmedia .hc_initial_view").hide();
			hc_$("#hc_richmedia .hc_content").show();
			hc_$("#hc_richmedia .hc_closebtn").show();

			/* tracking */
			/*hc_this.trackGeneralEvent({
				'category': 'navigation',
				'subcategory': 'click',
				'action': 'expansion',
				'adServeCustomParam':'expansion'
			});*/

			if (getSQP("exp")) {
				triggerAdserveEvent(decodeURIComponent(getSQP("exp")));
			}

			startExpandTimer();

			if (typeof(hc_this.events.hc_expand_after) === "function") {
				hc_this.events.hc_expand_after.apply(this);
			}
			return false;
		});

		/* close */
		hc_$("#hc_richmedia .hc_closebtn").on('click', function(e) {
			e.stopPropagation();
			if ("undefined" !== typeof mraid) {
				/* only execute mraid.close() if we are in the expanded position */
				/* Note:
				 mraid can get executed by our close button or the mraid hidden button which can show up if the ad is not wide enough.
				 If mraid is executed by our close button, *this click function will get called twice if we don't stop it which is why we check for expanded.
				 */
				if (mraid.getState() == "expanded") {
					mraid.close();
					return;
				}
			}
			hc_$("#hc_richmedia .hc_content").hide();
			hc_$("#hc_richmedia .hc_closebtn").hide();
			hc_$("#hc_richmedia .hc_initial_view").show();

			/* tracking */
			/*hc_this.trackGeneralEvent({
				'category': 'navigation',
				'subcategory': 'click',
				'action': 'collapse',
				'adServeCustomParam':'collapse'
			});*/

			if (typeof(hc_this.events.hc_closebtn_after) === "function") {
				hc_this.event.hc_closebtn_after.apply(this);
			}
			return false;
		});

		var mraidIsOpened = false;
		if ("undefined" !== typeof mraid) {

			/* add class to allow targeting to inapp ads */
			hc_$("#hc_richmedia").addClass("hc_inApp");

			mraid.addEventListener("stateChange", function() {
				switch (mraid.getState()) {
					case "expanded":
						mraidIsOpened = true;
						break;
					case "default":
						if (mraidIsOpened == true) {
							hc_$("#hc_richmedia .hc_content .hc_closebtn").click();
						}
				}
			});

			/*
			 mraid does not provide a scroll options for pages that expand outside of the viewable screen
			 to solve this issue we must set a static height to the outer div with a overflow so we can scroll.
			 We can get the height of the screen from mraid object.
			 */
			mraid.addEventListener("sizeChange", function(width, height){
				hc_$("#hc_richmedia").css({
					"height" : height + 'px',
					"overflow" : "auto"
				});
			});
		}
	});

	/* Rich media tabs */
	hc_$(function() {
		hc_$(".hc_tabs_button a").on('click', function() {
			hc_$(".hc_tabs_button div").removeClass("active");
			hc_$(this).parent().addClass("active");

			var contentTab = '';
			var classList = hc_$(this).parent().prop('class').split(/\s+/);
			hc_$.each(classList, function(index, item) {
				if (item.indexOf('hc_tabs_button_') != -1) {
					contentTab = item.replace('button', 'content');
				}
			});
			hc_$(".hc_tabs_content").hide();
			hc_$("." + contentTab).show();

			var event = 'events';
			if (typeof hc_$(this).data('adserveaction') !== "undefined") {
				event = hc_$(this).data('adserveaction');
			}

			/*hc_this.trackGeneralEvent({
				'category': 'navigation',
				'subcategory': 'click',
				'action': hc_$(this).html(),
				'label' : hc_$(this).attr('href'),
				'adServeCustomParam':event
			});*/

			if (typeof(hc_this.events.hc_tabs_button_after) === "function") {
				hc_this.events.hc_tabs_button_after.apply(this);
			}
		});
	});

	/* anchor tracking */
	hc_$(function() {
		hc_$("#hc_richmedia").on('click', "a", function() {

			if ((hc_$(this).attr('href').length > 0) && (hc_$(this).attr('href') != '#')) {
				var anchor = this;
				var event = 'click';

				if (typeof hc_$(this).data('adserveaction') !== "undefined") {
					event = hc_$(this).data('adserveaction');
				}

				if (hc_$(anchor).attr("target") == "_blank") {

					/* we don't need a timer here since we are not actually leaving this page */
					window.hc_hipTagTracker('trackLinkClick:' + rnd, hc_$(this).attr('href'));
					triggerAdserveEvent(event);

					if ("undefined" !== typeof mraid) {
						/* inapp ads need this to not block the user */
						mraid.open(hc_$(anchor).attr('href'));
						return false;
					} else {
						return true;
					}

				} else {

					/* need to have a timer to make sure it's actually gets executed before leaving */
					window.hc_hipTagTracker('trackLinkClick:' + rnd, hc_$(this).attr('href'));
					triggerAdserveEvent(event);

					if ("undefined" !== typeof mraid) {
						/* inapp ads need this to not block the user */
						mraid.open(hc_$(anchor).attr('href'));
						return false;
					} else {
						setTimeout(function () {
							document.location = hc_$(anchor).attr('href');
						}, 700);
					}
					return false;
				}
			}

		});
	});
	
	/* COMMON FUNCTION USED FOR RICH MEDIA */
	function startExpandTimer() {
		var x = 0, stop = 0;
		var tagMagic = setInterval(function(){summonTag();},10000);

		function summonTag () {
			if (x <= 50) {
				x = x + 10;
				triggerAdserveEvent('timer-' + x + '-seconds');
			} else {
				clearInterval(tagMagic);
			}
		}
	}

	function getQP(a) {
		if (window.location && "string" === typeof window.location.search) {
			var e = window.location.search.substr(1).split("&"),
				c, d;
			for (d = 0; d < e.length; d++)
				if (c = e[d].split("="), 2 === c.length && c[0] === a) return decodeURI(c[1]);
		}
		return !1;
	}

	function getSQP(b) {
		var src = hc_$("script[src*='as.aug.me']").attr("src");
		if (src) {
			var e = src.split("?");
			if (1 < e.length) {
				e = e[1].split("&");
				var c;
				var d;
				for (d = 0; d < e.length; d++)
					if (c = e[d].split("="), 2 === c.length && c[0] === b) return decodeURI(c[1]);
			}
		}
		return !1;
	}

	function triggerAdserveEvent(event) {
		/*hc_$("#hc_richmedia").append('<img src="' + oldTrackingPrefix.replace('#events#', event) + '?cb=' + new Date().getTime() + '" style="position:absolute;height:1px;width:1px;" />');*/
	}

	this.trackGeneralEvent = function(params) {

		/*
			params : {
				category: "string",
				subcategory: "string",
				action: "string",
				label: "string",
				property: "string",
				value: "string",
				adServeCustomParam: "string"
			}
		 */

		var properties = ['category', 'subcategory', 'action', 'label', 'property', 'value'];
		var adServeTag = '';
		var hasAdServeParam = false;
		var generatedAdServeTag = [];
		var data = {};

		if ((typeof params.adServeCustomParam) !== 'undefined' && (params.adServeCustomParam !== null)) {
			hasAdServeParam = true;
			adServeTag = String(params.adServeCustomParam);
		}

		/* only want properties that exist and not null */
		for(var i in properties) {
			if ((typeof params[properties[i]] !== 'undefined') && (params[properties[i]] !== null)) {
				data[properties[i]] = String(params[properties[i]]);
				generatedAdServeTag.push(data[properties[i]]);
			}
		}

		window.hc_hipTagTracker('trackUnstructEvent:' + rnd, {
			"schema": 'iglu:com.hipcricket/events/jsonschema/1-0-0',
			"data": data
		});

		if (!hasAdServeParam) {
			adServeTag = generatedAdServeTag.join('_');
		}
		adServeTag = adServeTag.replace('/', '|');

		triggerAdserveEvent(encodeURIComponent(adServeTag));
	};
}