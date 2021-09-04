var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start() {
    document.getElementById("Speech").innerHTML = "";
    recognition.start();
}

recognition.onresult = function Run(e) {
    console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("Speech").innerHTML = content;
    if (content == "take my selfie") {
        talk();
    }
}

function talk() {
    var sTalk = window.speechSynthesis;
    var speakData = "Taking your selfie in 5 seconds";
    var utterData = new SpeechSynthesisUtterance(speakData);
    sTalk.speak(utterData);
    Webcam.attach(camera);
    setTimeout(function () {
        take_selfie();
    }, 5000)
}

var camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    Image_format: 'jpeg',
    jpeg_quality: 90,
    force_flash: true
});

function take_selfie() {
    Webcam.snap(function (image) {
        document.getElementById("result").innerHTML = '<img src="' + image + '"/>'
    });
}