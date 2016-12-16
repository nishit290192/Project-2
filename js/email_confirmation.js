function sendConfirmationEmail() {

    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email_address').value;
    var passport = document.getElementById('passport_num').value;
    var phonenumber = document.getElementById('phone_number').value;

    var from = "Indianapolis";
    var to = "Paris";
    var takeOff = "MAY 30, 2017 - 7:50 am";
    var landing = "MAY 30 2017 - 15:00 pm";
    var duration = "13h, 10m";
    var airline = "Delta";
    var fType = "Economy";
    var b_price = "$300";
    var taxes = "$320";
    var totprice = "$620";

    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (firstName === '' || lastName === '' ||
        email === '') {
        alert("Please fill all fields.");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Invalid Email");
        return false;
    } else {

        emailjs.send("gmail", "travelo_confirmation_page", {
                "to_email": email,
                "to_name": firstName,
                "lastname": lastName,
                "passport": passport,
                "phone_number": phonenumber
            })
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);

                console.log("Sent email to " + firstName + " " + lastName + " at " + email +
                    " and phonenumber " + phonenumber + ", passport " + passport);

                window.location.href = "flight-thankyou.html";

            }, function(err) {
                console.log("FAILED. error=", err);

                alert("There was an error sending you an email..");
            });




    }

}
