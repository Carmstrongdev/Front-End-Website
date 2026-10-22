const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {

    const email = document.querySelector("#email").value;
    const confirmEmail = document.querySelector("#confirm-email").value;

    if (email !== confirmEmail) {
        event.preventDefault();
        alert("The email addresses do not match.");
    } else {
        event.preventDefault();
    }

});