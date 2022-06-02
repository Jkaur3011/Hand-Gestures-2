Webcam.set({ //setting properties of the webcam
    width: 350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
});

camera = document.getElementById("cam"); //adding our camera to a var 'camera'

Webcam.attach("#cam"); //attached camera

function Take_S(){ //function defined for taking snapshot
    Webcam.snap(function(data){ 
        document.getElementById("result").innerHTML = '<img id="image_result" src="'+data+'"/>' //reslt displayed in the respective id
    })
}
console.log("ml5 version:", ml5.version); //ml5version check

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RulukfPEl/"); //link added for detecting hand gestures

