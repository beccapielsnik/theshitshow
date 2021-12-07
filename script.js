function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
    console.log("bruh");
}

function StopSound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}

PlaySound(mySound00;)
