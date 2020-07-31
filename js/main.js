(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button'),
      typeAnim = gsap.timeline({paused: true});

  typeAnim.to("#you", { opacity: 1, duration: 0.2 })
          .to("#wanna", { opacity: 1, duration: 0.25 })
          .to("#play", { opacity: 1, duration: 0.25 })
          .to("#rough", { opacity: 1, duration: 0.25 })
          .to("#typelayout", { opacity: 1, rotate: -90, scaleX: 1.5, scaleY: 1.5, x: -60, y: -300, duration: 0.25}, "<");

  function playAnimation() {
    typeAnim.play();
    audio.play();
  }

  playButton.addEventListener("click", playAnimation);
})();
