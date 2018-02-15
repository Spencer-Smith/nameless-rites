$(document).ready(function() {
	var openmodal = null;
	
	var openModal = function(content) {
		$(".modal").css("display", "block");
		content.css("display", "block");
		openmodal = content;
	}
	
	var closeModal = function() {
		$(".modal").css("display", "none");
		openmodal.css("display", "none");
		openmodal = null;
	}
	
	$("#regionmap").click(function(e) {
		openModal($("#modalmap"));
	});
	
	$("#rolesbox").click(function(e) {
		openModal($("#modalrole"));
	});
	
	$("#ritesbox").click(function(e) {
		openModal($("#modalrite"));
	});

	$("#roadmapbox").click(function(e) {
		openModal($("#modalroadmap"));
	});
	
	$("#back").click(function() {
		closeModal();
	});
	
	window.onclick = function(event) {
	       	if(event.target == document.getElementsByClassName("modal")[0]) {
			closeModal();
		}
	}
});
