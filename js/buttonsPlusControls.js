//Button Elements
const Speakify = document.getElementById('Speak');
const Reverse = document.getElementById('Reverse');
const Reset = document.getElementById('Reset');

//Input Elements
const textInput = document.getElementById('mainBox');
const speedInput = document.getElementById('SpeechRate');
const volumeInput = document.getElementById('Volume');

Speakify.addEventListener('click', () => {
    playText(textInput.value);
});

Reverse.addEventListener('click', () => {
    reverseOrder();
});

Reset.addEventListener('click', () => {
    resetTextArea();
});

function playText(text) {
    const talk = new SpeechSynthesisUtterance(text);
    talk.rate = speedInput.value;
    talk.volume = volumeInput.value*.01;
    talk.addEventListener('end', () => {
        textInput.disabled = false;
    });
    textInput.disabled = true;
    speechSynthesis.speak(talk)
}

function resetTextArea() {
    textInput.value = '';
}

function reverseOrder() {
    let text = textInput.value;
    text = text.split(' ').reverse().join(' ');

    document.getElementById('mainBox').value = text;
}
