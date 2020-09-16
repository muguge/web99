/*	
	轮播图部分
*/
var lbt = document.getElementById("banner").getElementsByClassName("main")[0];
var aLi = document.getElementsByClassName("circle")[0].getElementsByTagName("li");
var n = 1;
//给li添加点击事件
for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onclick = function() {
        n = this.index;
        lbt.style.left = -n * 1350 + "px";
        for (var j = 0; j < aLi.length; j++) {
            aLi[j].className = "";
        }
        this.className = "on";
    }
}
//自动轮播
setInterval(function() {
    if (n >= 4) {
        lbt.style.transition = "left 0s";
        n = 0;
    } else {
        lbt.style.transition = "left .5s";
    }
    lbt.style.left = -n * 1350 + "px";
    for (var j = 0; j < aLi.length; j++) {
        aLi[j].className = "";
    }
    if (n >= 3) {
        aLi[0].className = "on";
    } else {
        aLi[n].className = "on";
    }
    n++;
}, 2000);