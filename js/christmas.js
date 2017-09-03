
/*/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */

function changePage(element,effect,callback){
	element.addClass(effect)
		   .one("animationend webkitAnimationEnd",function () {
		   	callback && callback();
		   });
}

/*中间调用*/
var Christmas=function(){
	var $pageA=($(".container"),$(".page-a"));
	var $pageB=$('.page-b');
	var $pageC=$('.page-c');
	//切换
	var observer=new Observer();
	var audio1=HTML5Audio("./music/scene.mp3");
	audio1.end(function(){
			HTML5Audio("./music/circulation.mp3",true);
		});
	//A场景页面
	var scene=new pageA($pageA);
	scene.run(function(){
		observer.publish("completeA");
	});
	//进入场景B;
	observer.subscribe('pageB',function(){
		new pageB($pageB,function(){
			observer.publish('completeB');
		});
	});
	//进入场景C
	observer.subscribe('pageC',function(){
		new pageC();
	});
	//页面A-B场景切换
	observer.subscribe("completeA",function(){
		changePage($pageA,'effect-out',function(){
			observer.publish("pageB");
		});
	});
	observer.subscribe("completeB",function(){
		changePage($pageC,"effect-in",function(){
			observer.publish("pageC");
		});
	});
};

$(function(){
	Christmas();
});

function HTML5Audio(url,loop){
	var audio=new Audio(url);
	audio.autoplay=true;
	audio.loop=loop||false;
	audio.play();
	return {
		end:function(callback){
			audio.addEventListener('ended', function(){callback()}, false);
		}
	};
}