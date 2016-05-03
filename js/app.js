var app = {

    particleArray: [],
    stage:null,

    NUM_PARTICLES: 100,

    init:function(){

        app.setupStage();
        app.setupTicker();
        app.createParticles();

    },
    setupStage:function(){

        var $canvas = $('#snow-canvas');

        // To get out the first in the array (element)
        app.stage = new createjs.Stage($canvas[0]);

    },
    setupTicker:function(){

        if(!app.stage) throw new Error('Hold your horses, buddy. Stage is not yet defined.');

        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick', app.stage);

    },
    createParticles:function(){

        while(app.NUM_PARTICLES--){

            var snow = new Snow(app.stage);

            snow.particle.x = Math.random()*1000;
            snow.particle.y = Math.random()*1000;

            app.particleArray.push(snow);

        }

    }
};

app.init();