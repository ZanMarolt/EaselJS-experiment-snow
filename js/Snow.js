/**
 * Created by zanmarolt on 5/3/16.
 */

var Snow = function(container){

    this.container = container;

    this._draw();

};

Snow.prototype._draw = function(){

    this.particle = new createjs.Shape();
    this.particle.graphics.beginFill('#000000');
    this.particle.graphics.drawRect(0,0,50,50);
    this.particle.graphics.endFill();

    this.container.addChild(this.particle);

};