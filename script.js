var play = document.querySelector(".play");

const autoplay = (id) => {
  var video = document.getElementById(id);
  video.play();

  video.onended = (e) => {
    play.classList.add("play")
  };
};



document.addEventListener("DOMContentLoaded", function () {
    autoplay("autoplay");
    play.classList.remove("play")
});

document.addEventListener("click", function () {
    autoplay("autoplay");
    
  play.classList.remove("play");
});