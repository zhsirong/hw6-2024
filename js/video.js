var video = document.querySelector("#player1");


//  Initialization
// var slider = document.querySelector("#slider");
// document.querySelector("#volume").innerHTML = slider.value;
// let prev_volume = 1;



// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log("Auto play is set to false")
	console.log("Loop is set to false")
	video.autoplay = false;
	video.loop = false;
});


// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	document.querySelector("#volume").textContent = video.volume * 100 + '%';

  });

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
  });

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
    console.log("After slow down current playback speed: " + video.playbackRate);
  });

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1/0.9;

    console.log("After speed up current playback speed: " + video.playbackRate.toFixed(5));
  });

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration){
		video.currentTime += 10;
	} else if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Current time: " + video.currentTime);
});
// Mute
document.querySelector("#mute").addEventListener("click", function() {
	var muteButton = document.getElementById("mute");
	muteButton.addEventListener("click", function () {
		toggleMute();
	  });
	  if (video.muted) {
		video.muted = false;
        muteButton.textContent = "Mute";
    } else {video.muted = true;
        muteButton.textContent = "Unmute";
    }
});
// Volume Slider
// document.querySelector("#slider").addEventListener("change", function() {
// 	video.volume = volumeSlider.value / 100;
// 	document.querySelector("#volume").textContent = volumeSlider.value + "%";
// });

// slider.oninput = function() {
// 	document.querySelector("#volume").innerHTML = slider.value + "%";
// 	video.volume = slider.value / 100;
// 	// prev_volume = slider.value / 100;
// }


document.querySelector("#slider").addEventListener("change", function() {
	video.volume = slider.value / 100;
	document.querySelector("#volume").textContent = slider.value + '%';
});

// Oldschool
document.querySelector("#vintage").addEventListener("click", function() {

  	video.setAttribute("class", "oldSchool");

});

// original
document.querySelector("#orig").addEventListener("click", function() {

	video.setAttribute("class", "video");

});

// document.querySelector("#volume").textContent =(video.volume * 100) + "%";