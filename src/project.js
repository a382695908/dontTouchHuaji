require=function t(i,o,n){function c(r,a){if(!o[r]){if(!i[r]){var s="function"==typeof require&&require;if(!a&&s)return s(r,!0);if(e)return e(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=o[r]={exports:{}};i[r][0].call(u.exports,function(t){var o=i[r][1][t];return c(o?o:t)},u,u.exports,t,i,o,n)}return o[r].exports}for(var e="function"==typeof require&&require,r=0;r<n.length;r++)c(n[r]);return c}({"block-script":[function(t,i,o){"use strict";cc._RFpush(i,"848a4/HjVJKe54qv7Yg0j8B","block-script"),cc.Class({"extends":cc.Component,properties:{_type:null,_mainScript:null},init:function(t,i){this._type=t,this._mainScript=i,this.node.on("touchstart",function(){if("huaji"==this._type)console.log("hiahiahia");else{var t=this.node.name.split("#")[0];parseInt(t)!==this._mainScript._curTouchRow+1?console.log("hiahiahia"):this._mainScript.move()}}.bind(this))}}),cc._RFpop()},{}],"main-script":[function(t,i,o){"use strict";cc._RFpush(i,"4b10c5aElFJLppT19GpKPgz","main-script"),cc.Class({"extends":cc.Component,editor:{},properties:{movePanel:cc.Node,huajiPrefab:cc.Prefab,blackPrefab:cc.Prefab,initRow:6,initCol:4,_newTopRow:null,_curBottomRow:null,_curTouchRow:-1,_startPosition:null},onLoad:function(){this._curBottomRow=0,this._newTopRow=6,this._startPosition=this.movePanel.position;for(var t=0;t<6;t++)for(var i=Math.floor(4*Math.random()),o=0;o<4;o++){var n=null;i==o?(n=cc.instantiate(this.blackPrefab),n.getComponent("block-script").init("black",this)):(n=cc.instantiate(this.huajiPrefab),n.getComponent("block-script").init("huaji",this)),this.movePanel.addChild(n),n.name=t+"#"+o,n.position=cc.pMult(cc.v2(o,t),150)}},move:function(){var t=cc.v2(this._startPosition.x,this._startPosition.y+(this._curBottomRow+1)*-150);this.movePanel.runAction(cc.sequence(cc.moveTo(.2,t),cc.callFunc(this.updateRender.bind(this))))},updateRender:function(){for(var t=this._newTopRow,i=Math.floor(4*Math.random()),o=0;o<4;o++){var n=null;i==o?(n=cc.instantiate(this.blackPrefab),n.getComponent("block-script").init("black",this)):(n=cc.instantiate(this.huajiPrefab),n.getComponent("block-script").init("huaji",this)),this.movePanel.addChild(n),n.name=t+"#"+o,n.position=cc.pMult(cc.v2(o,t),150)}for(var c=this._curBottomRow,e=0;e<4;e++)this.movePanel.getChildByName(c+"#"+e).removeFromParent();this._curBottomRow++,this._curTouchRow++,this._newTopRow++}}),cc._RFpop()},{}]},{},["block-script","main-script"]);