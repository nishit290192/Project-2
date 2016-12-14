function sendConfirmationEmail(){




  // parameters: service_id, template_id, template_parameters
  emailjs.send("gmail", "travelo_sing_up_page", {
          to_name: firstName,
          to_email: email,
          to_destination: to_destination
      })
      .then(function(response) {
          console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function(err) {
          console.log("FAILED. error=", err);
      });

}
