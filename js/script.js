var lastVideo;
var lastChoiceOverlay;
var choiceTimeout;
var choiceTimeoutCount;

var choiceTimeoutDuration = 5; // Duration in seconds

$(document).ready( function() {

	// INITIALIZE VIDEOS
	// (every additional video has to be referenced here with a unique ID,
	// based on the ID of the respective video element in index.html)

	var video1 = Popcorn('#video1');
	var video2 = Popcorn('#video2');
	var video3 = Popcorn('#video3');

	// show startvideo
	$("#video1").show();

	function showOverlay (id) {
		
		
	}



	// at the end of each video, resume to the last decision overlay
	$("video").each( function() {
		$(this).get(0).addEventListener("ended", function(e) {
			if (lastChoiceOverlay) {
				$("video").hide();
				lastVideo.show();
				lastChoiceOverlay.show();
		
				// After a certain timespan, go back to the video
				// (duration is defined in choiceTimeoutDuration)
				choiceTimeoutCount = choiceTimeoutDuration;
				$("#choiceOverlayCounter").text(choiceTimeoutCount).show();

				choiceTimeout = window.setInterval(function() {
					
					if (choiceTimeoutCount <= 0) {
						
						window.clearInterval(choiceTimeout);
						$("#choiceOverlayCounter").hide();
						lastChoiceOverlay.hide();

						lastVideo.get(0).play();

					} else {
						
						choiceTimeoutCount--;
						$("#choiceOverlayCounter").text(choiceTimeoutCount);

					}

				}, 1000);
			}
		});

		// cover video with overlay once a video starts playing, 
		// so it can be clicked to play initially
		$(this).get(0).addEventListener("play", function(e) {
			$("#overlayWrapper").show();
		});

	});

	



	/*************************************************************************
	* (TIMEBASED) EVENTS FOR VIDEO 1
	*************************************************************************/

	/***************************************
	* Example 1: Decision Overlay
	* (with Timeout)
	***************************************/

	// Pause video 1 at 5 seconds and show decision overlay
	video1.cue(2, function() {
		
		video1.pause();

		$(".choiceOverlay#choice1").show();
		
		// After a certain timespan, go back to the video
		// (duration is defined in choiceTimeoutDuration)
		choiceTimeoutCount = choiceTimeoutDuration;
		$("#choiceOverlayCounter").text(choiceTimeoutCount).show();

		choiceTimeout = window.setInterval(function() {
			
			if (choiceTimeoutCount <= 0) {
				
				window.clearInterval(choiceTimeout);
				$("#choiceOverlayCounter").hide();
				$(".choiceOverlay#choice1").hide();

				// save last overlay & video to resume at video end
				lastChoiceOverlay = $(".choiceOverlay#choice1");
				lastVideo = $("#video1");
				
				video1.play();

			} else {
				
				choiceTimeoutCount--;
				$("#choiceOverlayCounter").text(choiceTimeoutCount);

			}

		}, 1000); // execute every 1 seconds

	});

	// What should happen when a choice is made?
	// ( #choice1 and .action1 refer to the respective IDs and classes in index.html )
	$(".choiceOverlay#choice1 .action1").click(function() {
		
		// stop timeout, as something was chosen
		window.clearInterval(choiceTimeout);
		
		// hide counter, overlays & videos
		$("#choiceOverlayCounter").hide();
		$(".choiceOverlay").hide();
		$("video").hide();

		// save last overlay & video to resume at video end
		lastChoiceOverlay = $(".choiceOverlay#choice1");
		lastVideo = $("#video1");

		// show and play video 2 at a certain position (0 seconds)
		$("#video2").show();
		video2.play(0);

	});

	// Example for different choice
	$(".choiceOverlay#choice1 .action2").click(function() {
		
		// stop timeout, as something was chosen
		window.clearInterval(choiceTimeout);
		
		// hide counter, overlays & videos
		$("#choiceOverlayCounter").hide();
		$(".choiceOverlay").hide();
		$("video").hide();

		// save last overlay & video to resume at video end
		lastChoiceOverlay = $(".choiceOverlay#choice1");
		lastVideo = $("#video1");

		// show and play video 3 at a certain position (0 seconds)
		$("#video3").show();
		video3.play(0);

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




	/*************************************************************************
	* (TIMEBASED) EVENTS FOR VIDEO 2
	*************************************************************************/

	/***************************************
	* Example 3: Show Webpage
	* (start, end), look at
	* http://popcornjs.org/popcorn-docs/plugins/#Webpage
	***************************************/

	// From second 4 to 8 in video 2, show website
	// "exampleWebsite2" is the element id, in which the website should be shown,
	// in our case a DIV, that is position:absolute on top of the video (see style.css)
	video2.webpage({
		id: "test1",
		start: 4,
		end: 8,
		src: "http://example.com",
		target: "exampleWebsite2"
	});

	/***************************************
	* Example 4: Decision Overlay
	* (with Timeout)
	***************************************/

	// Pause video 2 at 12 seconds and show decision overlay
	video2.cue(2, function() {
		
		video2.pause();

		$(".choiceOverlay#choice2").show();
		
		// After a certain timespan, go back to the video
		// (duration is defined in choiceTimeoutDuration)
		choiceTimeoutCount = choiceTimeoutDuration;
		$("#choiceOverlayCounter").text(choiceTimeoutCount).show();

		choiceTimeout = window.setInterval(function() {
			
			if (choiceTimeoutCount <= 0) {
				
				window.clearInterval(choiceTimeout);
				$("#choiceOverlayCounter").hide();
				$(".choiceOverlay#choice1").hide();

				// save last overlay & video to resume at video end
				lastChoiceOverlay = $(".choiceOverlay#choice2");
				lastVideo = $("#video2");
				
				video2.play();

			} else {
				
				choiceTimeoutCount--;
				$("#choiceOverlayCounter").text(choiceTimeoutCount);

			}

		}, 1000); // execute every 1 seconds

	});

	// What should happen when a choice is made?
	// ( #choice1 and .action1 refer to the respective IDs and classes in index.html )
	$(".choiceOverlay#choice2 .action1").click(function() {
		
		// stop timeout, as something was chosen
		window.clearInterval(choiceTimeout);
		
		// hide counter, overlays & videos
		$("#choiceOverlayCounter").hide();
		$(".choiceOverlay").hide();
		$("video").hide();

		// save last overlay & video to resume at video end
		lastChoiceOverlay = $(".choiceOverlay#choice2");
		lastVideo = $("#video2");

		// show and play video 1 at a certain position (0 seconds)
		$("#video1").show();
		video1.play(0);

	});

	// Example for different choice
	$(".choiceOverlay#choice2 .action2").click(function() {
		
		// stop timeout, as something was chosen
		window.clearInterval(choiceTimeout);
		
		// hide counter, overlays & videos
		$("#choiceOverlayCounter").hide();
		$(".choiceOverlay").hide();
		$("video").hide();

		// save last overlay & video to resume at video end
		lastChoiceOverlay = $(".choiceOverlay#choice2");
		lastVideo = $("#video2");

		// show and play video 3 at a certain position (0 seconds)
		$("#video3").show();
		video3.play(0);

	});


	/*************************************************************************
	* (TIMEBASED) EVENTS FOR VIDEO 3
	*************************************************************************/

	/***************************************
	* Example 5: Decision Overlay
	* (WITHOUT Timeout)
	***************************************/

	// Pause video 3 at 4 seconds and show decision overlay
	video3.cue(4, function() {
		
		video3.pause();

		$(".choiceOverlay#choice3").show();

	});

	// What should happen when a choice is made?
	// ( #choice1 and .action1 refer to the respective IDs and classes in index.html )
	$(".choiceOverlay#choice3 .action1").click(function() {
		
		// stop timeout, as something was chosen
		window.clearInterval(choiceTimeout);
		
		// hide counter, overlays & videos
		$("#choiceOverlayCounter").hide();
		$(".choiceOverlay").hide();
		$("video").hide();

		// save last overlay & video to resume at video end
		lastChoiceOverlay = $(".choiceOverlay#choice3");
		lastVideo = $("#video3");

		// show and play video 1 at a certain position (0 seconds)
		$("#video1").show();
		video1.play(0);

	});

	// Example for different choice
	$(".choiceOverlay#choice3 .action2").click(function() {
		
		// stop timeout, as something was chosen
		window.clearInterval(choiceTimeout);
		
		// hide counter, overlays & videos
		$("#choiceOverlayCounter").hide();
		$(".choiceOverlay").hide();
		$("video").hide();

		// save last overlay & video to resume at video end
		lastChoiceOverlay = $(".choiceOverlay#choice3");
		lastVideo = $("#video3");

		// show and play video 2 at a certain position (0 seconds)
		$("#video2").show();
		video2.play(0);

	});

}); // document ready
