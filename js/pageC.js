function pageC() {
	this.$deer=$(".deer");
	this.$window=$(".page-c .window");
	this.$leftWin=this.$window.find(".window-left");
	this.$rightWin=this.$window.find(".window-right");
	this.$sceneBg=this.$window.find(".window-scene-bg");
	this.$closeBg=this.$window.find(".window-close-bg");
	// 背景切换
	this.$sceneBg.transition({
		opacity:0,
	},3000);
	this.$closeBg.css("transform","translateZ(0)");
	this.$closeBg.transition({
		opacity : 1
	},5000);
	var e=this;
	this.closeWindow(function(){
		Snowflake("snowflake");
		setTimeout(function(){e.run(function(){})}, 2000);
	});
}

// 关窗动作
pageC.prototype.closeWindow = function(e){
	var t=1;
	var n=function(){
		++t;
		2===t&&e&&e();
	};
	this.$leftWin.addClass('close').one("animationend webkitAnimationEnd",function(e){n()});
	this.$rightWin.addClass('close').one("animationend webkitAnimationEnd",function(e){n()});
};
pageC.prototype.next = function(e){
	var dfd=$.Deferred();
	this.$deer.transition(e.style,e.time,"linear",function(){
		dfd.resolve();
	});
	return dfd;
};

pageC.prototype.run = function(e){
	var t=function(){
		return this.next.apply(this, arguments)
	}.bind(this);
	this.$deer.addClass("deer-animate");
	t({
		time:5000,
		style:{
			bottom:"4rem",
			right:"-6rem",
			scale:"1"
		}
	})
	.then(function(){
		return t({time:100,style:{
				rotateY:"-180",
				scale:"0.8"
		}});
	})
	.then(function(){
		return t({time:10000,
			style:{
				bottom:"8rem",
				right:"15rem",
				scale:"0.2"
			}});
	})
	.then(e);
};
