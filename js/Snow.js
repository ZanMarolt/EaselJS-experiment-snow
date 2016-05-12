/**
 * Created by zanmarolt on 5/3/16.
 */

var Snow = function(container, wind){

    this.container = container;
    this.wind = wind;
    this.distance = Math.random()+0.3;

    this._draw();
    this._windBlow();

    createjs.Ticker.addEventListener('tick', this._onAnimation.bind(this));

};

Snow.prototype._StartWind = function(){

    var self = this;

    setInterval(function(){

        var currentX = self.particle.x;
        TweenLite.to(self.particle,4, {x:currentX+Math.random()*100-50, ease: Sine.easeInOut})

    }, 4000)

};

Snow.prototype._draw = function(){

    this.particle = new createjs.Container();

    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('#000000');
    this.shape.graphics.drawCircle(0,0,10,10);
    this.shape.graphics.endFill();

    this.particle.scaleX = this.particle.scaleY = this.distance+0.3;

    this.particle.addChild(this.shape);

    this.container.addChild(this.particle);

};

Snow.prototype.destroy = function(){



};

Snow.prototype.positionCheck = function(){

    if(this.particle.y > this.container.canvas.clientHeight){

        this._resetY();

    }
    if(this.particle.x > this.container.canvas.clientWidth){

        this._resetX();

    }

};

Snow.prototype._resetY = function(){


    this.distance = Math.random()+0.3;
    this.particle.y = -10;
    this.particle.scaleX = this.particle.scaleY = this.distance+0.3;



};

Snow.prototype._resetX = function(){


    this.distance = Math.random()+0.3;
    this.particle.x = 10;
    this.particle.scaleX = this.particle.scaleY = this.distance+0.3;

};

Snow.prototype._windBlow = function(){

    var pX = this.particle.x;
    var min = -200;
    var max = 1400;

    var minT = 50;
    var maxT = 100;


    TweenLite.to(this.particle, Math.floor(Math.random() * (maxT - minT + 1)) + minT, {
        x:(pX+(Math.floor(Math.random() * (max - min + 1)) + min)),
        onComplete: this._windBlow.bind(this)
    });

};

Snow.prototype._onAnimation = function(){

    this.particle.y += (1+this.distance);

    this.positionCheck();

};