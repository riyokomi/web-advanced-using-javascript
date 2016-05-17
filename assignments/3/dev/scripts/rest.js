
Window.onload = function () {
    'use strict';

//sidebar
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


//menu button
function _(x){
    return document.getElementById(x);
}
function initMenu(){
  _("btn_marker").style.left = _("btn1").offsetLeft+"px";
  _("btn_marker").style.width = _("btn1").offsetWidth-2+"px";
  _("btn_marker").style.display = "block";
}
function loadContent(btn){
  _("btn_marker").style.left = btn.offsetLeft+"px";
  _("btn_marker").style.width = btn.offsetWidth-2+"px";
  //_("mycontent").innerHTML = "Content for "+btn.innerHTML+" loaded";
}
window.addEventListener('load', function(event) { initMenu(); });



//show/hide divs
function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none";}
}


//contact box
// Input Lock
$('textarea').blur(function () {
    $('#contact textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});

};
