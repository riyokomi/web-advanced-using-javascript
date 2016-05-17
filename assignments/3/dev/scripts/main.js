/**
 * ONLOAD
 *
 * This function binds all the global variables established at the beginning of this
 * JavaScript file to all the ID attributes in “index.html.” It also binds the click
 * event listeners to each of the buttons found in “index.html.”
 */
window.onload = function () {
    'use strict';

    
//control audio on homepage
var audio, playbtn, seek_bar;

function initAudioPlayer(){
    audio = new Audio();
    audio.src = "image/Yesterday.mp3";
    audio.loop = true;
    audio.play();
    //set object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    //add event handling
    playbtn.addEventListener("click",playPause);
    mutebtn.addEventListener("click", mute);
    //function
    function playPause(){
    if(audio.paused){
        audio.play();
        playbtn.style.background = "url(image/pause.png) no-repeat";
      } else {
        audio.pause();
        playbtn.style.background = "url(image/play.png) no-repeat";
      }
  }
  function mute(){
    if(audio.muted){
        audio.muted = false;
        mutebtn.style.background = "url(image/speaker.png) no-repeat";
      } else {
        audio.muted = true;
        mutebtn.style.background = "url(image/mute.png) no-repeat";
      }
  }
}

window.addEventListener("load", initAudioPlayer);



//side menu
var status = 0;

function show(sidebar){
  if(status == 0) {
    sidebar.style.right = "0px";
    sidebar.style.transition = "right 0.6s linear";
    status = 1;
  }
  else{
    sidebar.style.right = "-300px";
    sidebar.style.transition = "right 0.6s linear";
    status = 0;
  }
}


};
