let form = document.getElementById("validator-form")

let email = document.getElementById("email")

let pass = document.getElementById("password")

let emailm = document.getElementById("email-msg")

let passm = document.getElementById("pass-msg")

const message = document.getElementById('message');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

form.addEventListener("submit",function(e){
    e.preventDefault();

    let valid = true;
    

    if (!emailRegex.test(email.value.trim())) {
        emailm.textContent="enter valid email";
        valid=false;
    } else {
          emailm.textContent="";  
    }

    if (!passRegex.test(pass.value.trim())) {
        passm.textContent="enter valid password";
        valid=false;
    } else {
          passm.textContent="";  
    }

    message.textContent = valid ? "✅ Email and Password are valid!" : "";

})
