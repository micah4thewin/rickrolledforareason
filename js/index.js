document.addEventListener('DOMContentLoaded', function() {
  var videoElem = document.getElementById('videoBackground');
  function tryPlay() {
    videoElem.play().then(function() {
      // Automatic playback started!
    }).catch(function(error) {
      // Automatic playback failed, show a UI element to let the user manually start playback
      videoElem.muted = true;
      videoElem.play();
    });
  }
  // Try to start video on page load
  tryPlay();
  // Unmute and play the video as soon as the user interacts with the page
  document.body.addEventListener('click', function() {
    videoElem.muted = false;
  });
});
