const trackElement = document.getElementById('audioTrack');
const captionDisplay = document.getElementById('captions');

if (trackElement && captionDisplay) {
  const track = trackElement.track;
  track.mode = 'hidden';

  track.addEventListener('cuechange', () => {
    if (track.activeCues.length > 0) {
      captionDisplay.textContent = track.activeCues[0].text;
    } else {
      captionDisplay.textContent = '';
    }
  });
}
