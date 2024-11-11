var firebaseConfig = {
    apiKey: "AIzaSyBRE9lkTPX-JYCQVr0ESWAR1U4FMfVDlpE",
    authDomain: "firstweb-32922.firebaseapp.com",
    projectId: "firstweb-32922",
    storageBucket: "firstweb-32922.appspot.com",
    messagingSenderId: "936312372537",
    appId: "1:936312372537:web:6fbae5a3e47c83181a3ce8"
};

var app = firebase.initializeApp(firebaseConfig);


function signup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name && email && password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential)=>{
            var user = userCredential.user;
            console.log("User created:",user);
            window.location.href = "quiz.html"
        })
        .catch((error)=>{
            var errorMessage = error.message;
            console.log("Error: ", errorMessage);
            alert('Error: ' + errorMessage);
        })
    } else{
alert("Please fill all the fields");
    }
}