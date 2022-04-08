document.addEventListener('DOMContentLoaded', function() {
    //Speech SLider
    var sliderSpeech = document.getElementById("SpeechRate");
    var sliderSpeechOutPut = document.getElementById("valueSpeech");

    sliderSpeechOutPut.innerHTML = sliderSpeech.value + ' x';

    sliderSpeech.oninput = function () {
        sliderSpeechOutPut.innerHTML = this.value + 'x';
    }
    sliderSpeech.addEventListener("mousemove", function () {
        var xAxis = sliderSpeech.value;
        if (xAxis == .5) {
            xAxis = 25;
        } else if (xAxis == 1) {
            xAxis = 50;
        } else if (xAxis == 1.5) {
            xAxis = 75;
        } else if (xAxis == 2) {
            xAxis = 100;
        }
        var color = 'linear-gradient(90deg, #f26135 ' + xAxis + '%, #000000 ' + xAxis + '%)';
        sliderSpeech.style.background = color;

    });
    sliderSpeech.addEventListener("touchmove", function () {
        var xAxis = sliderSpeech.value;
        if (xAxis == .5) {
            xAxis = 25;
        } else if (xAxis == 1) {
            xAxis = 50;
        } else if (xAxis == 1.5) {
            xAxis = 75;
        } else if (xAxis == 2) {
            xAxis = 100;
        }
        var color = 'linear-gradient(90deg, #f26135 ' + xAxis + '%, #000000 ' + xAxis + '%)';
        sliderSpeech.style.background = color;

    });

    //Volume Slider
    var sliderVolume = document.getElementById("Volume");
    var sliderVolumeOutPut = document.getElementById("valueVolume");

    sliderVolumeOutPut.innerHTML = sliderVolume.value;

    sliderVolume.oninput = function () {
        sliderVolumeOutPut.innerHTML = this.value;
    }

    sliderVolume.addEventListener("mousemove", function () {
        var xAxis2 = sliderVolume.value;
        var color = 'linear-gradient(90deg, #f26135 ' + xAxis2 + '%, #000000 ' + xAxis2 + '%)';
        sliderVolume.style.background = color;
    });
    sliderVolume.addEventListener("touchmove", function () {
        var xAxis2 = sliderVolume.value;
        var color = 'linear-gradient(90deg, #f26135 ' + xAxis2 + '%, #000000 ' + xAxis2 + '%)';
        sliderVolume.style.background = color;
    });



    //Pitch Slider
    var sliderPitch = document.getElementById("voicePitch");
    var sliderPitchOutPut = document.getElementById("valuePitch");

    sliderPitchOutPut.innerHTML = sliderPitch.value;

    sliderPitch.oninput = function () {
        sliderPitchOutPut.innerHTML = this.value;
    }

    sliderPitch.addEventListener("mousemove", function () {
        var xAxis3 = sliderPitch.value;
        if (xAxis3 == .25) {
            xAxis3 = 12.5;
        } else if (xAxis3 == .5) {
            xAxis3 = 25;
        } else if (xAxis3 == .75) {
            xAxis3 = 37.5;
        } else if (xAxis3 == 1) {
            xAxis3 = 50;
        } else if (xAxis3 == 1.25) {
            xAxis3 = 62.5;
        } else if (xAxis3 == 1.5) {
            xAxis3 = 75;
        } else if (xAxis3 == 1.75) {
            xAxis3 = 87.5;
        } else if (xAxis3 == 2) {
            xAxis3 = 100;
        }
        var color = 'linear-gradient(90deg, #f26135 ' + xAxis3 + '%, #000000 ' + xAxis3 + '%)';
        sliderPitch.style.background = color;
    });

    sliderPitch.addEventListener("touchmove", function () {
        var xAxis3 = sliderPitch.value;
        if (xAxis3 == .25) {
            xAxis3 = 12.5;
        } else if (xAxis3 == .5) {
            xAxis3 = 25;
        } else if (xAxis3 == .75) {
            xAxis3 = 37.5;
        } else if (xAxis3 == 1) {
            xAxis3 = 50;
        } else if (xAxis3 == 1.25) {
            xAxis3 = 62.5;
        } else if (xAxis3 == 1.5) {
            xAxis3 = 75;
        } else if (xAxis3 == 1.75) {
            xAxis3 = 87.5;
        } else if (xAxis3 == 2) {
            xAxis3 = 100;
        }
        var color = 'linear-gradient(90deg, #f26135 ' + xAxis3 + '%, #000000 ' + xAxis3 + '%)';
        sliderPitch.style.background = color;
    });
});
