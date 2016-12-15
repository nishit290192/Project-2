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

        emailjs.send("gmail", "travelo_confirmation", {
                to_name: firstName,
                lastName: lastName,
                to_email: email,
                phone_number: phonenumber,
                passport: passport,
                from: from,
                to_destination: to,
                takeOff: takeOff,
                landing: landing,
                duration: duration,
                airline: airline,
                fType: fType,
                b_price: b_price,
                taxes: taxes,
                totprice: totprice
            })
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                console.log("FAILED. error=", err);
            });

            console.log("Sent email");

            window.location.href = "flight-thankyou.html";

    }

}
