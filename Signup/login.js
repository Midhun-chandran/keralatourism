function validate() {
        console.log("helo");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    let valid = true;
    let emailReg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    let mobReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const small = document.querySelectorAll("small");
     var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    console.log(valid);
    if ((username.value.trim() === "") || (password.value.trim() === "")) {
        console.log(valid)
        valid = false;
        small[0].style.display = "block";
        small[0].style.color = "red";
        small[0].innerText = "username or password cannot be blank";
    } else if (!(emailReg.test(username.value)) || (!strongRegex.test(password.value))) {
        console.log("pass"+(strongRegex.test(password.value)))
        valid = false;
        small[0].style.display = "block";
        small[0].style.color = "red";
        small[0].innerText = "Invalid username or password";
    } else {
        small[0].style.display = "none";
    }
    
    
    return valid;
}

