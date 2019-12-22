(function() {
	var object1 = document.getElementById("secondary");
	object1.addEventListener("wheel", function() {
		document.getElementById("secondary").style["position"]="relative";
		document.getElementById("secondary").style["left"]=(window.innerWidth/3)+"px";
		document.getElementById("primary").style["position"]="fixed";
		document.getElementById("primary").style["left"]="1%";
	});
	var object2 = document.getElementById("primary");
	object2.addEventListener("wheel", function() {
		document.getElementById("secondary").style["position"]="relative";
		document.getElementById("secondary").style["left"]=(window.innerWidth/15)+"px";
		document.getElementById("primary").style["position"]="";
		document.getElementById("primary").style["left"]="1%";
	});
})();
