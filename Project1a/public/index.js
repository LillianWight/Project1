const shallText = 'SHALL WE PLAY A GAME?';
let shallArray = shallText.split('');
let loopTimer;

function letterLooper() {
  if (shallArray.length > 0) {
    document.getElementById('type_text').innerHTML += shallArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout('letterLooper()', 100);
}

letterLooper();
