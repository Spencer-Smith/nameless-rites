var mapmodal = document.getElementsByClassName("modal")[0];
var rolemodal = document.getElementsByClassName("modal")[1];
var ritemodal = document.getElementsByClassName("modal")[2];
var mapbox = document.getElementById("regionmap");
var rolebox = document.getElementById("rolesbox");
var ritebox = document.getElementById("ritesbox");
var backmap = document.getElementsByClassName("fa fa-arrow-left")[0];
var backrole = document.getElementsByClassName("fa fa-arrow-left")[1];
var backrite = document.getElementsByClassName("fa fa-arrow-left")[2];

var openmodal = null;

mapbox.onclick = function() {
	mapmodal.style.display = "block";
	openmodal = mapmodal;
}

rolebox.onclick = function() {
	rolemodal.style.display = "block";
	openmodal = rolemodal;
}

ritebox.onclick = function() {
	ritemodal.style.display = "block";
	openmodal = ritemodal;
}

backmap.onclick = function() {
    openmodal.style.display = "none";
	openmodal = null;
}

backrole.onclick = function() {
    openmodal.style.display = "none";
	openmodal = null;
}

backrite.onclick = function() {
    openmodal.style.display = "none";
	openmodal = null;
}

window.onclick = function(event) {
    if (event.target == openmodal) {
        openmodal.style.display = "none";
		openmodal = null;
    }
}