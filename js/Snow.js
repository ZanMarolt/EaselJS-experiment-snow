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

        this._reset();

    }

};

Snow.prototype._reset = function(){

    this.distance = Math.random()+0.3;
    this.particle.y = -50;
    this.particle.scaleX = this.particle.scaleY = this.distance+0.3;

};

Snow.prototype._windBlow = function(){

    var pX = this.particle.x;

    TweenLite.to(this.particle, Math.random()*2+1, {
        x:(pX+this.wind.force)*this.distance,
        onComplete:this._windBlow.bind(this)
    });
};

Snow.prototype._onAnimation = function(){

    this.particle.y += (1+this.distance);
    this.particle.x = this.wind.force;

    this.positionCheck();

};