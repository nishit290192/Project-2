// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaA9pwZMVCFkn1yFOnXDteUVxqS5R8pV0",
    authDomain: "project2-cd4c8.firebaseapp.com",
    databaseURL: "https://project2-cd4c8.firebaseio.com/",
    storageBucket: "project2-cd4c8.appspot.com",
    messagingSenderId: "886008997347"
};
firebase.initializeApp(config);

var bigOne = document.getElementById('bigone');
var dbRef = firebase.database().ref().child('Users');

dbRef.on('value', snap => {
    console.log(snap.val());
});

function uploadUser() {
    var firstName = document.getElementById('userFirstName').value;
    var lastName = document.getElementById('userLastName').value;
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userpassword1').value;
    var wantsNews = document.getElementById('tellNews').value;

    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (firstName === '' || lastName === '' ||
        email === '' || password === '') {
        alert("Please fill all fields.");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Invalid Email");
        return false;
    } else {

        dbRef.child(firstName + lastName).set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            wantsNews: true
        });

        // parameters: service_id, template_id, template_parameters
        emailjs.send("gmail", "travelo_sing_up_page", {
                to_name: firstName,
                to_email: email
            })
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                console.log("FAILED. error=", err);
            });

        console.log("Added user: " + firstName + " " + lastName + " with email " + email);

        alert("Welcome, " + firstName + "! We've sent you an email!");
        return true;
    }

}
