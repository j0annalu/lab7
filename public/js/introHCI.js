'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(likeClick);
	$(".likeCtr").click(likeClick);
}

function likeClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    //google analytics
    ga("send","event","like","click");
}