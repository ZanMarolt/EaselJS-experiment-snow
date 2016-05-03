var app = {

    stage:null,

    init:function(){

        app.setupStage();

    },
    setupStage:function(){
        var $canvas = $('#snow-canvas');

        // To get out the first in the array (element)
        app.stage = new createjs.Stage($canvas[0]);

        var square = new createjs.Shape();
        square.graphics.beginFill('#444444');
        square.graphics.drawRect(0,0,50,50);
        square.graphics.endFill();

        app.stage.addChild(square);

        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick', app.stage);

        TweenLite.to(square, 2, { x:100 })
    }
};

app.init();