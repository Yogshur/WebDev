const inputBox = document.getElementById('mainBox');
const confidenceVal = document.getElementById('confidenceValue');

const reverse = document.getElementById('reverse');
const speech = document.getElementById('runSpeech');

const timer = document.getElementById('timer')

speech.addEventListener('click', () => {
    runSpeechRecognition();
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
    };
  
     // start recognition
     recognition.start();
}
//Timer
var hours =0;
var mins =0;
var seconds =0;

/*timer.addEventListener('click', () => {
    runtimer();
});
*/
function startTimer(){
  timer = setTimeout(function(){
      seconds++;
    if(seconds >59){seconds=0;mins++;
       if(mins>59) {
       mins=0;hours++;
         if(hours <10) {$("#hours").text('0'+hours+':')} else $("#hours").text(hours+':');
        }
                       
    if(mins<10){                     
      $("#mins").text('0'+mins+':');}       
       else $("#mins").text(mins+':');
                   }    
    if(seconds <10) {
      $("#seconds").text('0'+seconds);} else {
      $("#seconds").text(seconds);
      }
     
    
      startTimer();
  },1000);
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
//Fonts
const fontSelector = document.getElementById('font');
fontSelector.addEventListener("change", function () {
    let selected = fontSelector.value;

    if (selected == 'Times') {
        textBox.style.fontFamily = 'Times New Roman';
    }else if (selected == 'Calibri')   {
        textBox.style.fontFamily = 'Calibri';
    }else if (selected == 'Arial')   {
        textBox.style.fontFamily = 'Arial';
    }else   {
        textBox.style.fontFamily = '';
    }
});
//Font size
const fontSize = document.getElementById('size');
fontSize.addEventListener("change", function () {
    let selected = fontSelector.value;
    if (selected == '4')    {
        textBox.style.fontSize = '4';
    }
    if (selected == '8')    {
        textBox.style.fontSize = '8';
    }
    if (selected == '12')    {
        textBox.style.fontSize = '12';
    }
    if (selected == '16')    {
        textBox.style.fontSize = '16';
    }
    if (selected == '20')    {
        textBox.style.fontSize = '20';
    }
    if (selected == '24')    {
        textBox.style.fontSize = '24';
    }
    if (selected == '28')    {
        textBox.style.fontSize = '28';
    }
    if (selected == '32')    {
        textBox.style.fontSize = '32';
    }
    if (selected == '36')    {
        textBox.style.fontSize = '36';
    }
});