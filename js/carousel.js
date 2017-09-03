// 格式化字符串
var slice=Array.prototype.slice;
function toArray(a,i,j){
	return slice.call(a,i||0,j||a.length);
}
function isNumber(e){
	return"number"==typeof e&&isFinite(e)
}

function isDefined (v) {
	return typeof v!=='undefined';
}

function applyIf(o,c){
	if(o){
		for(var p in c){
			if(!isDefined(o[p])){
				o[p]=c[p];
			}
		}
	}
	return o;
}

applyIf(String,{
	format:function(format){
		var args=toArray(arguments,1);
		return format.replace(/\{(\d+)\}/g,function(m,i){
			return args[i];
		});
	}
});
// function Carousel(carousel,options){
// 	var imgUrls=options.imgUrls;
// 	var $carousel=carousel;
// 	var $spinner=$carousel.find("#spinner");
// 	var angle=0;
// 	var numpics=imgUrls.length;
// 	//角度
// 	var rotate=360/numpics;
// 	var start=0;
// 	var current=1;
// 	var $contentElements;
// 	//图片数量
// 	this.numpics=numpics;

// 	// 创建结构
// 	function createStr(imgUrl){
// 		var str="<figure style='width:{0} transform:rotateY({1}deg) translateZ({2});position:absolute;'>"+
// 				"<img src='{3}' style='width:100%; height:100%;'>"+"</figure>";
// 		return String.format(str,"2rem",angle,"1.2rem",imgUrl);
// 	}
// 	function initStyle(){
// 		$carousel.css({
// 			"-webkit-perspective":"500",
// 			"-moz-perspective":"500px",
// 			"position":"absolute",
// 			"left":"6.8rem",
// 			"top":"4.5rem",
// 			transform:"scale(0.3)"
// 		});
// 		//容器
// 		$spinner.css({
// 			"width":"4rem",
// 			"transform-style":"preserve-3d",
// 			"transition":"1s"
// 		});
// 	}
// 	// 绘制页面节点
// 	function render(){
// 		var contentStr="";
// 		$.each(imgUrls,function(index,url){
// 			contentStr+=createStr(url);
// 			start+=rotate;
// 		});
// 		$contentElements=$(contentStr);
// 		$spinner.append($contentElements)
// 	}
// 	//样式
// 	initStyle();
// 	//绘制节点
// 	render();
// 	//旋转次数
// 	var currIndex;
// 	this.run=function(count,options){
// 		currIndex=count;
// 		angle=((count-1)*rotate+360);
// 		$spinner.css({
// 			"transform":"rotateY("+angle+"deg)",
// 			"-webkit-transform":"rotateY("+angle+"deg)"
// 		}).one("transitionend webkitTransitionend",function(){options&&options()});
// 	};
// 	this.selected=function(e){
// 		var car=$contentElements.find("img");
// 		var num=car.length;
// 		car.transition({scale:1.5},2000,"linear",function(){return 1==num?e():num--});
// 	};
// 	this.destroy=function(){
// 		$spinner.remove();
// 	};
// 	this.reset=function(){
// 		var event=$contentElements.find("img");
// 		$carousel.css("scale",1);
// 		$spinner.css("transform","rotateY(0deg)");
// 	};
// 	this.playVideo=function(e){
// 		var index=currIndex-1;
// 		var element=element||$contentElements.eq(index);
// 		var $video=$('<video preload="auto" class="bounceIn" style="width:50%;height:50%;position:absolute;left:25%;top:35%;"></video>');
// 		$video.css({
// 			"position":"absolute",
// 			"z-index":"999"
// 		});
// 		$video.attr('src',options.videoUrls[index]);
// 		$video.on("loadeddata",function(){
// 			$video[0].play();
// 			setTimeout(function(){e.load()}, 1000);
// 		});
// 		//停止
// 		$video.on("ended",function(){
// 			$video[0].pause();
// 			$video.addClass("bounceOut").one("animationend webkitAnimationEnd",function(){
// 				$video.remove();
// 				e.complete();
// 			});
// 		});

// 		$carousel.after($video);
// 	};
// }
function Carousel(e,t){
	function n(e){
		var t='<figure style="width:{0};transform:rotateY({1}deg) translateZ({2});position:absolute;"><img src="{3}" style="width:100%;height:100%;"></figure>';
		return String.format(t,"2rem",d,"1.2rem",e)}
	function r(){
		a.css({transform:"scale(0.3)","-webkit-perspective":"500px",position:"absolute",left:"6.8rem",top:"4.5rem"}),
		u.css({width:"2rem","transform-style":"preserve-3d",transition:"1s"})}
	function i(){
		var e="";
		$.each(s,function(t,r){e+=n(r),d+=f}),
		o=$(e),u.append(o)}
	var o,s=t.imgUrls,a=e,u=e.find("#spinner"),c=0,l=s.length,f=360/l,d=0;
	this.numpics=l,r(),i();
	var p;
	this.run=function(e,t){
		p=e,c=(e-1)*f+360,
		u.css("transform","rotateY(-"+c+"deg)").one("animationend webkitAnimationEnd",function(){t&&t()})},
	this.selected=function(e){
		var t=o.find("img"),n=t.length;
		t.transition({scale:1.5},2e3,"linear",function(){return 1===n?void e():void n--})},
	this.destroy=function(){u.remove()},
	this.reset=function(){
		var e=o.find("img");
		e.css("scale",1),u.css("transform","rotateY(0deg)")},
	this.playVideo=function(e){
		var n=p-1,r=r||o.eq(n),
		i=(config.layer,$('<video preload="auto" autoplay class="bounceIn" style="width:50%;height:50%;position:absolute;left:25%;top:35%;"></video>'));
		i.css({position:"absolute","z-index":"999"}),i.attr("src",t.videoUrls[n]),
		i.on("loadeddata",function(){i[0].play(),setTimeout(function(){e.load()},1e3)}),
		i.on("ended",function(){i[0].pause(),i.addClass("bounceOut").one("animationend webkitAnimationEnd",function(){i.remove(),e.complete()})}),
		a.after(i)
	}
}