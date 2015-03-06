var lastOverlayNumber;
var choiceTimeout;
var choiceTimeoutCount;

var choiceTimeoutDuration = 2; // Duration in seconds

// run this when the page has finished loading
$(document).ready( function() {

	// INITIALIZE VIDEOS
	// (every additional video has to be referenced here with a unique ID,
	// based on the ID of the respective video element in index.html)

	var video1 = Popcorn('#video1');
	var video2 = Popcorn('#video2');
	var video3 = Popcorn('#video3');
	var videos = [video1, video2, video3];

	// show first video
	$("#video1").show();

	// cover video with overlay once a video starts playing, 
	// so it can be clicked to play initially
	$("video").get(0).addEventListener("play", function(e) {
		$("#overlayWrapper").show();
	});


	/*************************************************************************
	* (TIMEBASED) EVENTS FOR VIDEO 1
	*************************************************************************/

	/***************************************
	* Example 1: Show Footnote
	* (start, end), look at
	* http://popcornjs.org/popcorn-docs/plugins/#Footnote
	***************************************/

	// From second 1 to 15 in video 1, show footnote
	// "footnotediv" is the element id, in which the footnote should be shown,
	video1.footnote({
		start: 1,
	    end: 5,
	    text: 'Hello Footnote',
	    target: "footnotediv"
	});
	
	
	/***************************************
	* Example 2: Show Webpage
	* (start, end), look at
	* http://popcornjs.org/popcorn-docs/plugins/#Webpage
	***************************************/

	// From second 10 to 14 in video 1, show website
	// "exampleWebsite1" is the element id, in which the website should be shown,
	// in our case a DIV, that is position:absolute on top of the video (see style.css)
	video1.webpage({
		id: "test1",
		start: 10,
		end: 16,
		src: "http://example.com/",
		target: "exampleWebsite1"
	});
}); // document ready
