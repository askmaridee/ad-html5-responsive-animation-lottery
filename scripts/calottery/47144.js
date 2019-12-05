(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.comSba300x250 = function() {
    this.initialize();

    /**************************************************
     * PALLET OF CASH
     **************************************************/
    // tower
    this.tower_mc = new lib.billetes_mc(null, 0, false);
    this.tower_mc.setTransform(149.4,125);
    startPileAnimation.call(this);
    
    function startPileAnimation(){
        this.tower_mc.gotoAndStop(0);
        this.tower_mc.alpha = 1;
        
        this.tower_mc.play();
    }


    this.addChild(this.tower_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,391);


// symbols:
(lib.billeteB = function() {
    this.initialize(img.billeteB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,73);


(lib.billeteC = function() {
    this.initialize(img.billeteC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,73);


(lib.billetes2 = function() {
    this.initialize(img.billetes2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,66);


(lib.Bitmap1 = function() {
    this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.pallet = function() {
    this.initialize(img.pallet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,110);



(lib.shadow = function() {
    this.initialize();

    // Capa 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AuogSIHNjbQHMjZAAAGIO4DNItCK1g");
    this.shape.setTransform(2.8,0);

    this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.9,-44.9,187.5,90);


(lib.pallet_1 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.pallet();
    this.instance.setTransform(-94.4,-54.9);

    this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.4,-54.9,189,110);


(lib.fardo = function() {
    this.initialize();

    // Capa 3
    this.instance = new lib.billeteC();
    this.instance.setTransform(-74.7,-43.6,1.514,1.514);

    this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.7,-43.6,152.9,110.5);



(lib.block_shadow = function() {
    this.initialize();

    // Capa 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#010206").s().p("AvUgOIPvmpIO6DxItQJ+QxOnGgLAAg");

    this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.1,-43.9,196.3,88);


(lib.b12 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(-6.2,0.5,0.317,0.317);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(5.5,-7.9,0.314,0.314);

    this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-21.6,59.9,43.3);


(lib.b11 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(-9.2,2.5,0.301,0.301);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(0.8,-4,0.286,0.286);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(9.9,-10.3,0.281,0.281);

    this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-22.5,63.6,45.2);


(lib.b10 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(-15.2,5.9,0.289,0.289);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-3.7,-1.2,0.283,0.283);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(5.8,-7.5,0.269,0.269);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(16.2,-13.6,0.264,0.264);

    this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.8,-25.1,73.7,50.3);


(lib.b9 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(-22.1,9.3,0.276,0.276);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-10.1,2.1,0.27,0.27);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(1.4,-4.3,0.265,0.265);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(12.9,-10.8,0.252,0.252);

    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(23.4,-16.9,0.247,0.247);

    this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-27.6,85.4,55.4);


(lib.b8 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(6.4,7.6,0.283,0.283);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-27.1,-3.1,0.265,0.265);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(16,1.3,0.269,0.269);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(-15.7,-9.6,0.252,0.252);

    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(26.4,-4.7,0.264,0.264);

    this.instance_5 = new lib.fardo();
    this.instance_5.setTransform(-5.1,-15.7,0.247,0.247);

    this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.9,-26.4,94,53);


(lib.b7 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(10.4,0.2,0.295,0.295);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-23.8,-11.3,0.276,0.276);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(21.8,-7.1,0.289,0.289);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(-11.8,-18.5,0.27,0.27);

    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(10.4,10.7,0.295,0.295);

    this.instance_5 = new lib.fardo();
    this.instance_5.setTransform(-23.8,-0.8,0.276,0.276);

    this.instance_6 = new lib.fardo();
    this.instance_6.setTransform(21.8,3.4,0.289,0.289);

    this.instance_7 = new lib.fardo();
    this.instance_7.setTransform(-11.8,-8,0.27,0.27);

    this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-30.3,88.8,60.7);


(lib.b6 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(-14.1,5.9,0.307,0.307);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-3.8,-1.3,0.301,0.301);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(6.2,-7.8,0.286,0.286);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(15.3,-14.1,0.281,0.281);

    this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,-26.4,74.4,52.9);


(lib.b5 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(-14.1,5.7,0.307,0.307);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-3.8,-1.1,0.301,0.301);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(6.2,-7.6,0.286,0.286);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(15.3,-13.9,0.281,0.281);

    this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,-26.1,74.4,52.4);


(lib.b4 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(6.4,7.6,0.283,0.283);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-27.1,-3.1,0.265,0.265);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(16,1.3,0.269,0.269);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(-15.7,-9.6,0.252,0.252);

    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(26.4,-4.7,0.264,0.264);

    this.instance_5 = new lib.fardo();
    this.instance_5.setTransform(-5.1,-15.7,0.247,0.247);

    this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.9,-26.4,94,53);


(lib.b3 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(23.6,15.6,0.33,0.33);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(35.2,7.7,0.323,0.323);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(-14.3,1.4,0.31,0.31);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(-49.8,-12,0.29,0.29);

    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(-1.3,-5.2,0.304,0.304);

    this.instance_5 = new lib.fardo();
    this.instance_5.setTransform(-37,-18.8,0.284,0.284);

    this.instance_6 = new lib.fardo();
    this.instance_6.setTransform(46.7,-0.4,0.317,0.317);

    this.instance_7 = new lib.fardo();
    this.instance_7.setTransform(10.7,-13.1,0.298,0.298);

    this.instance_8 = new lib.fardo();
    this.instance_8.setTransform(-24,-25.4,0.278,0.278);

    this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-37.6,143,75.3);


(lib.B2 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(28,10.7,0.314,0.314);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-7.8,-1,0.295,0.295);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(-42,-12.6,0.276,0.276);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(38.7,3.5,0.307,0.307);

    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(3.6,-8.3,0.289,0.289);

    this.instance_5 = new lib.fardo();
    this.instance_5.setTransform(-30.1,-19.7,0.27,0.27);

    this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.6,-31.5,125.5,63.3);


(lib.B1 = function() {
    this.initialize();

    // Capa 1
    this.instance = new lib.fardo();
    this.instance.setTransform(23.2,13,0.301,0.301);

    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(-11.5,1,0.283,0.283,0,-2.3,0);

    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(-44.6,-10.4,0.265,0.257,0,-2.4,0);

    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(33.3,6.7,0.286,0.286);

    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(-0.9,-5.9,0.269,0.269);

    this.instance_5 = new lib.fardo();
    this.instance_5.setTransform(-33.6,-16.7,0.252,0.252,0,-0.7,0);

    this.instance_6 = new lib.fardo();
    this.instance_6.setTransform(42.3,0.7,0.281,0.281);

    this.instance_7 = new lib.fardo();
    this.instance_7.setTransform(9.4,-12,0.264,0.264);

    this.instance_8 = new lib.fardo();
    this.instance_8.setTransform(-22.1,-22.7,0.247,0.247);

    this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-33.5,129.2,66.6);


(lib.billetes_mc = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 3a1
    this.instance = new lib.fardo();
    this.instance.setTransform(-1.2,-165.6,0.45,0.45);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).wait(38).to({_off:false},0).to({scaleX:0.33,scaleY:0.33,y:34.3},13,cjs.Ease.get(1)).wait(9));

    // 3b1
    this.instance_1 = new lib.fardo();
    this.instance_1.setTransform(10.3,-173.6,0.323,0.323);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).wait(33).to({_off:false},0).to({y:26.4},13,cjs.Ease.get(1)).wait(14));

    // 2a1
    this.instance_2 = new lib.fardo();
    this.instance_2.setTransform(-1.2,-165.1,0.43,0.43);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).wait(30).to({_off:false},0).to({scaleX:0.33,scaleY:0.33,y:44.8},13,cjs.Ease.get(1)).wait(17));

    // 3a2
    this.instance_3 = new lib.fardo();
    this.instance_3.setTransform(-39.2,-179.9,0.4,0.4);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).wait(36).to({_off:false},0).to({scaleX:0.31,scaleY:0.31,y:20.1},13,cjs.Ease.get(1)).wait(11));

    // 2b1
    this.instance_4 = new lib.fardo();
    this.instance_4.setTransform(10.3,-173.1,0.323,0.323);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).wait(27).to({_off:false},0).to({y:36.9},13,cjs.Ease.get(1)).wait(20));

    // 3c1
    this.instance_5 = new lib.fardo();
    this.instance_5.setTransform(21.8,-181.7,0.317,0.317);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).wait(25).to({_off:false},0).to({y:18.2},13,cjs.Ease.get(1)).wait(22));

    // 2a2
    this.instance_6 = new lib.fardo();
    this.instance_6.setTransform(-39.2,-179.4,0.38,0.38);
    this.instance_6._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62).wait(20).to({_off:false},0).to({scaleX:0.31,scaleY:0.31,y:30.6},13,cjs.Ease.get(1)).wait(27));

    // 3a3
    this.instance_7 = new lib.fardo();
    this.instance_7.setTransform(-74.7,-193.3,0.38,0.38);
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(62).wait(33).to({_off:false},0).to({scaleX:0.29,scaleY:0.29,y:6.7},13,cjs.Ease.get(1)).wait(14));

    // 3b2
    this.instance_8 = new lib.fardo();
    this.instance_8.setTransform(-26.2,-186.5,0.304,0.304);
    this.instance_8._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(62).wait(29).to({_off:false},0).to({y:13.4},13,cjs.Ease.get(1)).wait(18));

    // 1a1
    this.instance_9 = new lib.fardo();
    this.instance_9.setTransform(-1.2,-154.6,0.45,0.45);
    this.instance_9._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(61).to({_off:false},0).to({scaleX:0.33,scaleY:0.33,y:55.3},14,cjs.Ease.get(0.98)).wait(47));

    // 2a1
    this.instance_10 = new lib.fardo();
    this.instance_10.setTransform(10.3,-162.6,0.323,0.323);
    this.instance_10._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(62).wait(7).to({_off:false},0).to({y:47.4},14,cjs.Ease.get(1)).wait(39));

    // 3b1
    this.instance_11 = new lib.fardo();
    this.instance_11.setTransform(21.8,-181.2,0.317,0.317);
    this.instance_11._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(62).wait(3).to({_off:false},0).to({y:28.7},13,cjs.Ease.get(1)).wait(44));

    // 3d1
    this.instance_12 = new lib.fardo();
    this.instance_12.setTransform(33.5,-190.1,0.314,0.314);
    this.instance_12._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(62).wait(23).to({_off:false},0).to({y:9.8},13,cjs.Ease.get(1)).wait(24));

    // 4b1
    this.instance_13 = new lib.fardo();
    this.instance_13.setTransform(33.5,-189.6,0.314,0.314);
    this.instance_13._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(58).to({_off:false},0).to({y:20.3},13,cjs.Ease.get(1)).wait(51));

    // 5c1
    this.instance_14 = new lib.fardo();
    this.instance_14.setTransform(44.3,-197.1,0.307,0.307);
    this.instance_14._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(62).wait(8).to({_off:false},0).to({y:2.8},13,cjs.Ease.get(1)).wait(39));

    // 1a2
    this.instance_15 = new lib.fardo();
    this.instance_15.setTransform(-39.2,-168.9,0.4,0.4);
    this.instance_15._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(62).wait(6).to({_off:false},0).to({scaleX:0.31,scaleY:0.31,y:41.1},13,cjs.Ease.get(1)).wait(41));

    // 2a2
    this.instance_16 = new lib.fardo();
    this.instance_16.setTransform(-26.2,-186,0.304,0.304);
    this.instance_16._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(62).wait(9).to({_off:false},0).to({y:23.9},13,cjs.Ease.get(1)).wait(38));

    // 2a3
    this.instance_17 = new lib.fardo();
    this.instance_17.setTransform(-74.7,-192.8,0.38,0.38);
    this.instance_17._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(62).wait(26).to({_off:false},0).to({scaleX:0.29,scaleY:0.29,y:17.2},13,cjs.Ease.get(1)).wait(21));

    // 3b3
    this.instance_18 = new lib.fardo();
    this.instance_18.setTransform(-61.9,-200.1,0.284,0.284);
    this.instance_18._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(62).wait(25).to({_off:false},0).to({y:0},13,cjs.Ease.get(1)).wait(22));

    // 2b3
    this.instance_19 = new lib.fardo();
    this.instance_19.setTransform(-61.9,-199.6,0.284,0.284);
    this.instance_19._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(62).wait(13).to({_off:false},0).to({y:10.3},13,cjs.Ease.get(1)).wait(34));

    // 1a3
    this.instance_20 = new lib.fardo();
    this.instance_20.setTransform(-74.7,-182.3,0.37,0.37);
    this.instance_20._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(57).to({_off:false},0).to({scaleX:0.29,scaleY:0.29,y:27.7},13,cjs.Ease.get(1)).wait(52));

    // 1b2
    this.instance_21 = new lib.fardo();
    this.instance_21.setTransform(-26.7,-175.5,0.304,0.304);
    this.instance_21._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(62).to({_off:false},0).to({y:34.4},14,cjs.Ease.get(1)).wait(46));

    // 3c2
    this.instance_22 = new lib.fardo();
    this.instance_22.setTransform(-14.1,-194.4,0.298,0.298);
    this.instance_22._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(62).wait(22).to({_off:false},0).to({y:5.6},13,cjs.Ease.get(1)).wait(25));

    // 2c2
    this.instance_23 = new lib.fardo();
    this.instance_23.setTransform(-14.1,-193.9,0.298,0.298);
    this.instance_23._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(62).wait(12).to({_off:false},0).to({y:16.1},13,cjs.Ease.get(1)).wait(35));

    // 1b3
    this.instance_24 = new lib.fardo();
    this.instance_24.setTransform(-61.9,-189.1,0.284,0.284);
    this.instance_24._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(62).wait(5).to({_off:false},0).to({y:20.8},13,cjs.Ease.get(1)).wait(42));

    // 3c3
    this.instance_25 = new lib.fardo();
    this.instance_25.setTransform(-48.9,-206.7,0.278,0.278);
    this.instance_25._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(62).wait(16).to({_off:false},0).to({y:-6.6},13,cjs.Ease.get(1)).wait(31));

    // 2c3
    this.instance_26 = new lib.fardo();
    this.instance_26.setTransform(-48.9,-176.2,0.5,0.5);
    this.instance_26._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(62).wait(2).to({_off:false},0).to({scaleX:0.28,scaleY:0.28,y:3.7},13,cjs.Ease.get(1)).wait(45));

    // 1c2
    this.instance_27 = new lib.fardo();
    this.instance_27.setTransform(-14.1,-183.4,0.298,0.298);
    this.instance_27._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(55).to({_off:false},0).to({y:26.6},13,cjs.Ease.get(1)).wait(54));

    // 3d2
    this.instance_28 = new lib.fardo();
    this.instance_28.setTransform(-2.2,-201.9,0.295,0.295);
    this.instance_28._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(81).to({_off:false},0).to({y:-1.8},13,cjs.Ease.get(1)).wait(28));

    // Capa 8
    this.instance_29 = new lib.b12();
    this.instance_29.setTransform(28.1,-181.2);
    this.instance_29._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).to({y:38.8},13,cjs.Ease.get(-0.99)).to({y:37.3},3).to({y:38.8},3).wait(102));

    // n
    this.instance_30 = new lib.b11();
    this.instance_30.setTransform(63.9,-226.4);
    this.instance_30._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({_off:false},0).to({y:-6.3},13,cjs.Ease.get(-0.99)).to({y:-7.8},3).to({y:-6.3},3).wait(102));

    // Capa 6
    this.instance_31 = new lib.b6();
    this.instance_31.setTransform(58.5,-212);
    this.instance_31._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({_off:false},0).to({y:7.9},13,cjs.Ease.get(-0.99)).to({y:6.4},3).to({y:7.9},3).wait(102));

    // Capa 4
    this.instance_32 = new lib.b10();
    this.instance_32.setTransform(24.4,-235.1);
    this.instance_32._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).to({y:-15},13,cjs.Ease.get(-0.99)).to({y:-16.5},3).to({y:-15},3).wait(102));

    // Capa 3
    this.instance_33 = new lib.b9();
    this.instance_33.setTransform(-14.3,-242.7);
    this.instance_33._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).to({y:-22.6},13,cjs.Ease.get(-0.99)).to({y:-24.1},3).to({y:-22.6},3).wait(102));

    // Capa 7
    this.instance_34 = new lib.fardo();
    this.instance_34.setTransform(-48.9,-205.7,0.278,0.278);
    this.instance_34._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).to({y:14.2},13,cjs.Ease.get(-0.99)).to({y:12.7},3).to({y:14.2},3).wait(102));

    // Capa 5
    this.instance_35 = new lib.b7();
    this.instance_35.setTransform(-12.6,-211.6);
    this.instance_35._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).to({y:8.4},13,cjs.Ease.get(-0.99)).to({y:6.9},3).to({y:8.4},3).wait(102));

    // Capa 2
    this.instance_36 = new lib.b8();
    this.instance_36.setTransform(14.2,-233.4);
    this.instance_36._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).to({y:-13.3},13,cjs.Ease.get(-0.99)).to({y:-14.8},3).to({y:-13.3},3).wait(102));

    // Capa 9
    this.instance_37 = new lib.b5();
    this.instance_37.setTransform(58.5,-201.8);
    this.instance_37._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({_off:false},0).to({y:18.2},13,cjs.Ease.get(-0.99)).to({y:16.7},3).to({y:18.2},3).wait(102));

    // Capa 10
    this.instance_38 = new lib.b4();
    this.instance_38.setTransform(14.2,-222.9);
    this.instance_38._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({_off:false},0).to({y:-2.8},13,cjs.Ease.get(-0.99)).to({y:-4.3},3).to({y:-2.8},3).wait(102));

    // lay1
    this.instance_39 = new lib.b3();
    this.instance_39.setTransform(-24.8,-169.2);
    this.instance_39.shadow = new cjs.Shadow("#000000",0,0,3);
    this.instance_39._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).to({y:50.7},13,cjs.Ease.get(-0.99)).to({y:49.2},3).to({y:50.7},3).wait(102));

    // Capa 12
    this.instance_40 = new lib.B2();
    this.instance_40.setTransform(5.6,-188.8);
    this.instance_40.shadow = new cjs.Shadow("#000000",0,0,3);
    this.instance_40._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({_off:false},0).to({y:31.1},13,cjs.Ease.get(-0.99)).to({y:29.6},3).to({y:31.1},3).wait(102));

    // Capa 11
    this.instance_41 = new lib.B1();
    this.instance_41.setTransform(31.4,-205.4);
    this.instance_41.shadow = new cjs.Shadow("#000000",0,0,3);
    this.instance_41._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({_off:false},0).to({y:14.6},13,cjs.Ease.get(-0.99)).to({y:13.1},3).to({y:14.6},3).wait(102));

    // sh
    this.instance_42 = new lib.block_shadow();
    this.instance_42.setTransform(-0.1,44.5,0.307,0.307);
    this.instance_42.alpha = 0.43;
    this.instance_42.shadow = new cjs.Shadow("#000000",0,0,0);
    this.instance_42._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},13).to({scaleX:0.95,scaleY:0.95,y:43},3).to({scaleX:1,scaleY:1,y:44.5},3).wait(102));

    // Capa 17
    this.instance_43 = new lib.block_shadow();
    this.instance_43.setTransform(-0.1,44.5);
    this.instance_43.alpha = 0.449;
    this.instance_43.shadow = new cjs.Shadow("#000000",0,0,0);
    this.instance_43._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(10).to({_off:false},0).to({scaleX:1.14,scaleY:1.14,y:47.5},7).to({alpha:0},18).wait(87));

    // pallet
    this.instance_44 = new lib.pallet_1();
    this.instance_44.setTransform(-0.4,57.2,1.05,1.018);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44}]}).wait(122));

    // shadow
    this.instance_45 = new lib.shadow();
    this.instance_45.setTransform(-1.4,65);
    this.instance_45.alpha = 0.691;
    this.instance_45.shadow = new cjs.Shadow("#000000",4,3,11);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45}]}).wait(122));

    // sh2
    this.instance_46 = new lib.pallet_1();
    this.instance_46.setTransform(1.3,58.7,1.011,1);
    this.instance_46.shadow = new cjs.Shadow("#000000",0,0,4);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46}]}).wait(122));

    // Capa 16 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("AynEJQAnl4AEAAITLoSIR+F8IgdNkMgl8AAjIAll5g");
    mask.setTransform(7.2,61.8);

    // sh1
    this.instance_47 = new lib.pallet_1();
    this.instance_47.setTransform(-33.1,57.6,0.474,1.041,0,-46,129.3);
    this.instance_47.shadow = new cjs.Shadow("#000000",0,0,13);

    this.instance_47.mask = mask;

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47}]}).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.8,-16.7,201.6,148.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;