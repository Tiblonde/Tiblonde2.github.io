//导航栏切换
var tabs = document.querySelectorAll(".nav li a");
var mains = document.querySelectorAll("main");


for (var i=0; i < tabs.length;i++){
	setHandler(tabs[i], i);
}

function setHandler(panel, number){
	panel.onclick = function() {
		for (var i = 0; i < tabs.length ; i++){
			if(tabs[i].getAttribute("class")){
				tabs[i].removeAttribute("class");
			}
		}
		tabs[number].setAttribute("class", "active--panel");

		for (var i = 0; i < mains.length ; i++){
			if(mains[i].getAttribute("class")){
				mains[i].removeAttribute("class");
			}
		}
		mains[number].setAttribute("class", "active--page");
	};
}

