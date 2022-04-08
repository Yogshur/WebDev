//Button Elements
const Speakify = document.getElementById('Speak');
const Reverse = document.getElementById('Reverse');
const Reset = document.getElementById('Reset');

//Input Elements
const textInput = document.getElementById('mainBox');
const speedInput = document.getElementById('SpeechRate');
const volumeInput = document.getElementById('Volume');
const pitchInput = document.getElementById('voicePitch');

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
    talk.pitch = pitchInput.value;
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

//Selector Elements
const textBox = document.getElementById('mainBox');
const fontSelector = document.getElementById('Font');


fontSelector.addEventListener("change", function () {
    let selected = fontSelector.value;

    if (selected == 'Times') {
        textBox.style.fontFamily = 'Times New Roman';
        textBox.style.fontSize = '1.25em'
    } else if (selected == 'OpenD') {
        textBox.style.fontFamily = 'OpenDyslexic';
        textBox.style.fontSize = '.8em'
    } else if (selected == 'Cursive') {
        textBox.style.fontFamily = 'GreatVibesCursive';
        textBox.style.fontSize = '1.16em'
    } else if (selected == 'OsakaSansSerif') {
        textBox.style.fontFamily = 'OsakaSansSerif';
        textBox.style.fontSize = '1.27em'
    } else {
        textBox.style.fontFamily = '';
        textBox.style.fontSize = ''
    }
});


//Page Selector
const radioOne = document.getElementById('rd1');
const radioTwo = document.getElementById('rd2');

radioOne.addEventListener("click", function(){
    if(radioOne.checked == true){
        location.href = "./index.html";
    } else if (radioTwo.checked == true){
        location.href = "./speechtotext.html";
    }
});

radioTwo.addEventListener("click", function(){
    if(radioOne.checked == true){
        location.href = "./index.html";
    } else if (radioTwo.checked == true){
        location.href = "./speechtotext.html";
    }
});
