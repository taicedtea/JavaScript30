function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops fn from running if key with no audio is hit
    audio.currentTime = 0; //rewind time to start
    audio.play();
    key.classList.add("playing");
}
// const removeTransistion = (e) => console.log(e); 
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skips if not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);