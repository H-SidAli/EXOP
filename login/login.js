function record(variable, callback) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        document.getElementById(variable).value = event.results[0][0].transcript;
        if (callback) callback(); // If a callback is provided, run it after recognition
    };

    recognition.onerror = function(event) {
        console.error("Recognition error: " + event.error);
    };

    recognition.start();
}

document.addEventListener('DOMContentLoaded', function() {
    // Focus the username input and start speech recognition automatically
    document.getElementById('username1').focus();
    record('username1', function() {
        // After username is recognized, focus on password and start speech recognition
        document.getElementById('password').focus();
        record('password');
    });
});

let signInUp = document.querySelector("#signinup");
let toggle = false;

signInUp.addEventListener("click", function () {
    let tittle = document.querySelector("#SignInTittle");
    let btn = document.querySelector("#submitbutton");
    if (!toggle) {
        tittle.innerHTML = "Sign In";
        signInUp.innerHTML = "Sign Up";
        btn.innerHTML = "Sign In";
    } else {
        tittle.innerHTML = "Sign Up";
        signInUp.innerHTML = "Sign In";
        btn.innerHTML = "Sign Up";
    }
    toggle = !toggle;
});
