Function.prototype.createDelegate=function(e,t,n){
	var r=this;
	return function(){
		var i=t||arguments;
		if(n===!0)
			i=Array.prototype.slice.call(arguments,0),i=i.concat(t);
		else if(isNumber(n)){
			i=Array.prototype.slice.call(arguments,0);
			var o=[n,0].concat(t);Array.prototype.splice.apply(i,o)
		}
		return r.apply(e||window,i)}
};
Function.prototype.defer=function(e,t,n,r){
	var i=this.createDelegate(t,n,r);
	return e>0?setTimeout(i,e):(i(),0)
};
// function pageB(element,pageComplete){
// 	// 圣诞男孩
// 	var $boy=element.find(".christmas-boy");
// 	var $girl=element.find(".girl");
// 	var $cat=element.find(".cat");
// 	var animationEnd="animationend webkitAnimationEnd";
// 	// 动作
// 	var $carousel=element.find("#carousel");
// 	var carousel=new Carousel($carousel,{
// 		imgUrls:[
// 			"./images/carousel/1.png",
// 			"./images/carousel/2.png",
// 			"./images/carousel/3.png"
// 			],
// 		videoUrls:[
// 			"./images/carousel/1.mp4",
// 			"./images/carousel/2.mp4",
// 			"./images/carousel/3.mp4"]
// 	});
// 	var girlAction={
// 		// 站立
// 		standUp:function(){
// 			var dfd=$.Deferred();
// 			return function(){
// 				$girl.addClass("girl-standUp")}.defer(200),
// 				//time:girl stand-up
// 			function(){
// 				$girl.addClass("girl-throwBook");
// 				$cat.addClass("cat-book");
// 				dfd.resolve();
// 			}.defer(500),//time:girl throw-book+stand-up
// 			 dfd;
// 		},
// 		walk:function(callback){
// 			var dfd=$.Deferred();
// 			$girl.addClass("girl-walk");
// 			$girl.transition({
// 				"left":"4.5rem"
// 			},3000,"linear",function(){dfd.resolve()});//time:girl walk
// 			return dfd;
// 		},
// 		//停止走路
// 		stopWalk:function(){
// 			$girl.addClass("walk-stop")
// 				.removeClass("girl-standUp girl-walk girl-throwBook")
// 				.addClass("girl-stand");
// 		},
// 		////选择3d
// 		choose:function(callback){
// 			$girl.addClass("girl-choose").removeClass("walk-stop")
// 				.one(animationEnd,function(){
// 				callback();});
// 		},
		
// 		reset:function(){
// 			$girl.removeClass("girl-choose");
// 		},
// 		//泪奔
// 		weepWalk:function(callback){
// 			$girl.addClass("girl-weep");
// 			$girl.transition({
// 				"left":"7rem"
// 			},1000,"linear",function(){//time:girl weepwalk
// 				$girl.addClass("walk-stop").removeClass("girl-weep");
// 				callback();
// 			});
// 		},
// 		hug:function(){
// 			$girl.addClass("girl-hug").addClass("walk-run");
// 		}
// 	};
// 	var  boyAction={
// 		walk:function(){
// 			var dfd=$.Deferred();
// 			$boy.transition({
// 				"right":"4.5rem"
// 			},4000,"linear",function(){dfd.resolve()});
// 			return dfd;
// 		},
// 		stopWalk:function(){
// 			$boy.removeClass('boy-walk');
// 			$boy.addClass('boy-stand');
// 		},
// 		runWalk:function(){
// 			$boy.addClass('walk-run');
// 		},
// 		unwrapp:function(){
// 			var dfd=$.Deferred();
// 			$boy.addClass('boy-unwrapp');
// 			$boy.removeClass('boy-stand');
// 			$boy.one(animationEnd,function(){dfd.resolve();});
// 			return dfd;
// 		},
// 		strip:function(count){
// 			$boy.addClass("boy-strip-"+count).removeClass("boy-unwrapp");
// 		},
// 		hug:function(){
// 			$boy.addClass("boy-hug").one(animationEnd,function(){
// 				$('.christmas-boy-head').show();
// 			});
// 		}
// 	};
// 	function playV(i,car,n){
// 		car.run(i);
// 		girlAction.choose(function(){
// 			car.selected(function(){
// 				car.playVideo({
// 					load:function(){
// 						girlAction.reset();
// 						car.reset();
// 						boyAction.strip(i);
// 					},
// 					complete:function(){
// 						n();
// 					}
// 				});
// 			});
// 		});
// 	}
// 	function defertime(){
// 		var dfd=$.Deferred();
// 		return function(){
// 			var car=carousel,n=1;
// 			var num=car.numpics;
// 			var playVideo_num=function(){
// 				playV(n,car,function(){++n,der()});
// 			},
// 			der=function () {
// 				return n>num?(car.destroy(),
// 					void function () {
// 						dfd.resolve()}.defer(1000)):
// 						void function(){playVideo_num()}.defer(1000);
// 			};
// 			playVideo_num();
// 		}.defer(500), dfd;
// 	};
// 	boyAction.walk()
// 		.then(function(){
// 			// 停止走路
// 			boyAction.stopWalk();
// 		})
// 		.then(function(){return girlAction.standUp()})
// 		.then(function(){return girlAction.walk()})
// 		.then(function () {
// 			return girlAction.stopWalk();
// 		})
// 		.then(function(){
// 			// 解开包裹
// 			return boyAction.unwrapp();
// 		})
// 		.then(function(){
// 			//脱衣
// 			setTimeout(function(){
// 				defertime();
// 			},500);
// 		})
// 		.then(function(){
// 				girlAction.weepWalk(function(){
// 					girlAction.hug(),
// 					boyAction.hug(),
// 					function(){pageComplete&&pageComplete()}.defer(1000);
// 				});
// 		});
// }
function pageB(e,t){
	function n(){
		var e=$.Deferred();
		return function(){r(e)}.defer(500),e
	}
	function r(e){
		var t=o(),n=1,r=t.numpics,
		s=function(){
			i(n,t,function(){++n,a()})},
		a=function(){
			return n>r?(t.destroy(),void function(){e.resolve()}.defer(1e3)):void function(){s()}.defer(1e3)};
		s()
	}
	function i(e,t,n){
		t.run(e),
		d.choose(function(){
			t.selected(function(){
				t.playVideo({
					load:function(){d.reset(),t.reset(),p.strip(e)},
					complete:function(){n()}
					})
				})
			})
	}
	function o(){var e=new Carousel(u,{
		imgUrls:[
			"./images/carousel/1.png",
			"./images/carousel/2.png",
			"./images/carousel/3.png"
			],
		videoUrls:[
			"./images/carousel/1.mp4",
			"./images/carousel/2.mp4",
			"./images/carousel/3.mp4"]});
		return e
	}
	var s=e,a=s.find(".christmas-boy"),u=s.find("#carousel"),c=s.find(".girl"),l=s.find(".cat"),f={boy:{walk:4e3},
	girl:{standUp:200,throwBook:300,walk:3e3,hugWalk:1e3}},
	d={
		standUp:function(){
			var e=$.Deferred();
			return function(){c.addClass("girl-standUp")}.defer(f.girl.standUp),
				function(){l.addClass("cat-book"),c.addClass("girl-throwBook"),e.resolve()}.defer(f.girl.throwBook+f.girl.standUp),e
		},
		walk:function(e){
			var t=$.Deferred();
			return c.addClass("girl-walk"),
			c.transition({left:"4.5rem"},f.girl.walk,"linear",function(){t.resolve()}),t},
		stopWalk:function(){
			c.addClass("walk-stop").removeClass("girl-standUp").removeClass("girl-walk").removeClass("girl-throwBook").addClass("girl-stand")
		},
		choose:function(e){
			c.addClass("girl-choose").removeClass("walk-stop"),
			c.one("animationend webkitAnimationEnd",function(){e()})},
		reset:function(){c.removeClass("girl-choose")},
		hugWalk:function(e){
			c.addClass("girl-weep"),c.transition({left:"7rem"},f.girl.hugWalk,"linear",function(){
				c.addClass("walk-stop").removeClass("girl-weep"),e()})},
		hug:function(){c.addClass("girl-hug").addClass("walk-run")}},
	p={
		walk:function(){var e=$.Deferred();return a.transition({right:"4.5rem"},f.boy.walk,"linear",function(){e.resolve()}),e},
		stopWalk:function(){a.removeClass("boy-walk"),a.addClass("boy-stand")},
		unwrapp:function(){
			var e=$.Deferred();
			return a.addClass("boy-unwrapp"),a.removeClass("boy-stand"),
			a.one("animationend webkitAnimationEnd",function(){e.resolve()}),
			e},
		runWalk:function(){a.addClass("walk-run")},
		hug:function(){
			a.addClass("boy-hug").one("animationend webkitAnimationEnd",function(){$(".christmas-boy-head").show()})
			},
		strip:function(e){a.addClass("boy-strip-"+e).removeClass("boy-unwrapp")}};
	p.walk().then(
		function(){
			p.stopWalk()})
		.then(function(){return d.standUp()})
		.then(function(){return d.walk()})
		.then(function(){return d.stopWalk()})
		.then(function(){return p.unwrapp()})
		.then(function(){return n()})
		.then(function(){d.hugWalk(function(){
			d.hug(),p.hug(),function(){t&&t()}.defer(1e3)})})
	}