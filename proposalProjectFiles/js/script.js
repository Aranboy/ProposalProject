const track = document.getElementById('audioTrack').track;
const captionDisplay = document.getElementById('captions');
const ccButton = document.getElementById('ccToggle');

track.mode = 'hidden';   // keep this so cues keep firing
let captionsOn = true;

function renderCaptions() {
  const cues = Array.from(track.activeCues || []);
  captionDisplay.textContent = cues.map(cue => cue.text).join(' ');
}

track.addEventListener('cuechange', renderCaptions);

ccButton.addEventListener('click', () => {
  captionsOn = !captionsOn;
  ccButton.setAttribute('aria-pressed', captionsOn);
  ccButton.textContent = captionsOn ? 'CC: On' : 'CC: Off';
  captionDisplay.hidden = !captionsOn;
  if (captionsOn) renderCaptions();   // show the current line right away
});