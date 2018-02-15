//Modal background
var modal = document.getElementsByClassName("modal")[0];
//Modal content
var mapmodal = document.getElementById("modalmap");
var rolemodal = document.getElementById("modalrole");
var ritemodal = document.getElementById("modalrite");
var openmodal = null;
//Modal triggers
var mapbox = document.getElementById("regionmap");
var rolebox = document.getElementById("rolesbox");
var ritebox = document.getElementById("ritesbox");
//Closing modals
var back = document.getElementsByClassName("fa fa-arrow-left")[0];


var openModal = function(content) {
	modal.style.display = "block";
	content.style.display = "block";
	openmodal = content;
}

var closeModal = function() {
	modal.style.display = "none";
	openmodal.style.display = "none";
	openmodal = null;
}

mapbox.onclick = function(event) {
	openModal(mapmodal);
}

rolebox.onclick = function() {
	openModal(mapmodal);
}

ritebox.onclick = function() {
	openModal(mapmodal);
}

back.onclick = function() {
	closeModal();
}

window.onclick = function(event) {
       	if(event.target == modal) {
		closeModal();
	}
}
