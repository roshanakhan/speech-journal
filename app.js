window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-AU';

let p = document.createElement('p');
const speech = document.querySelector('.speech');
speech.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    const winkScript = transcript.replace(/wink/gi, '😉');
    p.textContent = winkScript;

    if (e.results[0].isFinal) {
      p = document.createElement('p');
      speech.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();