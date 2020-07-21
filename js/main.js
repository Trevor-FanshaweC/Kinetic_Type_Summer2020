(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button');

  function playAudio() {
    document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
    document.querySelector("#typelayout").classList.add('container-turn');
    document.querySelector(".tony-vector").classList.add('zoom-tony');

    audio.play();
  }


  playButton.addEventListener("click", playAudio);

})();
