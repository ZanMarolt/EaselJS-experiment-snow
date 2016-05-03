/**
 * Created by zanmarolt on 5/3/16.
 */

var Snow = function(container){

    this.container = container;

    this._draw();

    createjs.Ticker.addEventListener('tick', this._onAnimation.bind(this));

};

Snow.prototype._draw = function(){

    this.particle = new createjs.Container();

    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('#000000');
    this.shape.graphics.drawRect(0,0,50,50);
    this.shape.graphics.endFill();

    this.particle.addChild(this.shape);

    this.container.addChild(this.particle);

};

Snow.prototype._onAnimation = function(){

    this.particle.y += 1;

};