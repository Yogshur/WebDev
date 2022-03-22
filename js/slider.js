//Speech SLider
var sliderSpeech = document.getElementById("SpeechRate");
var sliderSpeechOutPut = document.getElementById("valueSpeech");

sliderSpeechOutPut.innerHTML = sliderSpeech.value + ' x';

sliderSpeech.oninput = function() {
    sliderSpeechOutPut.innerHTML = this.value + 'x';
}
sliderSpeech.addEventListener("mousemove", function() {
    var xAxis = sliderSpeech.value;
    if(xAxis == .5) {
        xAxis = 25;
    } else if (xAxis == 1) {
        xAxis = 50;
    } else if (xAxis == 1.5) {
        xAxis = 75;
    } else if (xAxis == 2) {
        xAxis = 100;
    }
    var color = 'linear-gradient(90deg, #f26135 ' + xAxis +'%, #000000 ' + xAxis + '%)';
    sliderSpeech.style.background = color;

});


//Volume Slider
var sliderVolume = document.getElementById("volume");
var sliderVolumeOutPut = document.getElementById("valueVolume");

sliderVolumeOutPut.innerHTML = sliderVolume.value;

sliderVolume.oninput = function() {
    sliderVolumeOutPut.innerHTML = this.value;
}

sliderVolume.addEventListener("mouse", function() {
    var xAxis = sliderVolume.value;
    var color = 'linear-gradient(90deg, #f26135 ' + xAxis +'%, #000000 ' + xAxis + '%)';
    sliderVolume.style.background = color;
});