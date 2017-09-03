// 雪花
	// 雪球
function Snowflake(elementName){
	var snowElement=document.getElementById(elementName);
	var cxt=snowElement.getContext("2d");
	var width=config.clientWidth;
	var height=config.clientHeight;
	snowElement.width=width;
	snowElement.height=height;
	var snowNumber=50;
	// 构建雪球对象
	var snowArrObjs=initSnow(snowNumber,width,height);
	var snowArrNum=snowArrObjs.length;
	//绘制
	var render=function(){
		//清理之前的矩形数据
		cxt.clearRect(0,0,width,height);
		for(var i=0;i<snowArrNum;++i){
			snowArrObjs[i].render(cxt);
		}
	};
	var update=function(){
		for(var i=0;i<snowArrNum;++i){
			snowArrObjs[i].update();
		}
	};
	//绘制与更新
	var renderAndUpdate=function(){
		render();
		update();
		requestAnimationFrame(renderAndUpdate);
	};
	renderAndUpdate();
}
function initSnow(snowNumber,width,height){
	var options={
		minRadius:3,
		maxRadius:10,
		//运动范围
		maxX:width,
		maxY:height,
		//速率
		minSpeedY:0.05,
		maxSpeedY:2,
		speedX:0.05,
		// 滤镜
		minAlpha:0.5,
		maxAlpha:1.0,
		minMoveX:4,
		maxMoveX:18
	};
	var snowArr=[];
	for(var i=0;i<snowNumber;++i){
		snowArr[i]=new Snow(options);
	}
	return snowArr;
}
// 雪球类
function Snow(snowSettings){
	this.snowSettings=snowSettings;
	this.radius=randomInRange(snowSettings.minRadius,snowSettings.maxRadius);
	//初始位置
	this.initialX=Math.random()*snowSettings.maxX;
	this.y=-(Math.random()*500);
	// 运行的速率
	this.speedY=randomInRange(snowSettings.minSpeedY,snowSettings.maxSpeedY);
	this.speedX=snowSettings.speedX;
	// 滤镜
	this.alpha=randomInRange(snowSettings.minAlpha,snowSettings.maxAlpha);
	// 角度
	this.angle=Math.random(Math.PI*2);
	// 运行的距离
	this.x=this.initialX+Math.sin(this.angle);
	this.moveX=randomInRange(snowSettings.minMoveX,snowSettings.maxMoveX);
}

Snow.prototype.render = function(cxt){
	cxt.beginPath();
	cxt.fillStyle="rgba(255,255,255,"+this.alpha+")";
	cxt.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
	// 关闭子路径
	cxt.closePath();
	cxt.fill();
};
Snow.prototype.update = function(){
	this.y+=this.speedY;
	if(this.y>this.snowSettings.maxY){
		this.y-=this.snowSettings.maxY;
	}
	this.angle+=this.speedX;
	if(this.angle>Math.PI*2){
		this.angle-=Math.PI*2;
	}
	this.x=this.initialX+this.moveX*Math.sin(this.angle);
};
function randomInRange(min,max){
	var random=Math.random()*(max-min)+min;
	return random;
}