function emailSend() {
  var userName = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var messageBody =
    "Name " + userName + "<br/> Phone " + phone + "<br/> Email " + email;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shakilvalorant@gmail.com",
    Password: "2CA4576DC64859530CB73AA4C6ECC697BD46",
    To: "ullasullasullas3@gmail.com",
    From: email,
    Subject: "This is the subject",
    Body: messageBody,
  }).then((message) => alert(message));
}
