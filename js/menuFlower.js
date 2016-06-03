
//参考网站http://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html
//参考手册 www.shifone.cc 
//js解析json http://www.5icool.org/a/201209/a1629.html
//拖拽div http://www.cnblogs.com/dolphinX/p/3290520.html
//jquery代码分析http://study.163.com/course/courseMain.htm?courseId=465001    http://www.cnblogs.com/aaronjs/p/3279314.html

function showLeaf(num){
	//console.log("div#rootMenu"+num+".leafMenu");
	//$("div#rootMenu"+num+".leafMenu").toggle();
	$(".leafMenu").toggle();
}

$.fn.flowerMenu = function(navObj){

	var defult = {
		"name":"name",
		"color":"write",
		"lvl":0,
		"ismain":false,
		"height":5,
		"wight":5

	};
    var settings = $.extend({},defult,navObj);
    var menuValue = eval(settings);
    var htmlV = '';
    for(var i=0;i<navObj.length;i++){
		if(menuValue[i].isMain){
			htmlV += "<div id='rootMenu"+i+"' onclick='javascript:showLeaf("+i+")'"
					+"style='height:"+menuValue[i].height+"em;width:"+menuValue[i].width+"em;"
					+" background-color :"+menuValue[i].color+"' >"
					+menuValue[i].name+"</div>";
			
		}else{
			htmlV += "<div class='leafMenu' style ='height:"
					+menuValue[i].height+"em; width:"+menuValue[i].width+"em;"
					+" background-color:"+menuValue[i].color+" '>"
					+menuValue[i].name+"</div>";
			}
		
    }
    this.append(htmlV);
	
	
}

