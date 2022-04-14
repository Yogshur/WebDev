const inputBox = document.getElementById('mainBox');
const confidenceVal = document.getElementById('confidenceValue');

const reverse = document.getElementById('reverse');
const reset = document.getElementById('reset');

const speech = document.getElementById('runSpeech');
const timer = document.getElementById('stopwatch')

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

var test;
var flag = 0;

speech.addEventListener('click', () => {
    minutesLabel.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    runSpeechRecognition();
});

speech.addEventListener('click', () => {
    test = setInterval(setTime, 1000);
});


//Speech-to-text Function
function runSpeechRecognition() {
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        inputBox.value = `${transcript}`;
        confidenceVal.innerHTML = `${confidence * 100}`;
        flag = 1;
    };
  
     // start recognition
     recognition.start();
     
}
//Timer
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  stopTimer();
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
//Order of Operations
let text = inputBox.value;
reverse.addEventListener('click', () => {
    reverseOrder();
});
function reverseOrder() {
    let text = inputBox.value;
    text = text.split(' ').reverse().join(' ');
    document.getElementById('mainBox').value = text;
}
reset.addEventListener('click', () => {
    resetOrder();
});
function resetOrder() {
    inputBox.value = '';
}
//Fonts
const fontSelector = document.getElementById('font');
fontSelector.addEventListener("change", function () {
    let selected = fontSelector.value;

    if (selected == 'Times') {
        inputBox.style.fontFamily = 'Times New Roman';
    }else if (selected == 'Calibri')   {
        inputBox.style.fontFamily = 'Calibri';
    }else if (selected == 'Arial')   {
        inputBox.style.fontFamily = 'Arial';
    }else   {
        inputBox.style.fontFamily = '';
    }
});
//Font size
const fontSize = document.getElementById('size');
fontSize.addEventListener("change", function () {
    let selected = fontSize.value;
    if (selected == '4')    {
        inputBox.style.fontSize = '4px';
    }
    if (selected == '8')    {
        inputBox.style.fontSize = '8px';
    }
    if (selected == '12')    {
        inputBox.style.fontSize = '12px';
    }
    if (selected == '16')    {
        inputBox.style.fontSize = '16px';
    }
    if (selected == '20')    {
        inputBox.style.fontSize = '20px';
    }
    if (selected == '24')    {
        inputBox.style.fontSize = '24px';
    }
    if (selected == '28')    {
        inputBox.style.fontSize = '28px';
    }
    if (selected == '32')    {
        inputBox.style.fontSize = '32px';
    }
    if (selected == '36')    {
        inputBox.style.fontSize = '36px';
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
function stopTimer (){
    if(flag == 1){
        clearInterval(test);
        totalSeconds = 0;
        flag = 0;
    }
}
