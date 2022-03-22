var slider = document.getElementById("SpeechRate");
var sliderOutPut = document.getElementById("value");

sliderOutPut.innerHTML = slider.value;

slider.oninput = function() {
    sliderOutPut.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    var xAxis = slider.value;
    var color = 'linear-gradient(90deg, #f26135 ' + xAxis +'%, #000000 ' + xAxis + '%)';
    slider.style.background = color;

});