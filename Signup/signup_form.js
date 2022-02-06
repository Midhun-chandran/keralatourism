function validate() {
     const firstname = document.getElementById("fname");
     const lastname = document.getElementById("Lname");
     const email = document.getElementById("email");
     const mobile = document.getElementById("mobile");
     const password = document.getElementById("password");
     const rePassword = document.getElementById("re_password");
       const small = document.querySelectorAll("small");
       let valid=true;
      let emailReg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
     let mobReg= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      if (firstname.value.trim() === "") {
      
          valid = false;
          small[0].style.display="block";
          small[0].style.color = "red";
            small[0].innerText = "Firstrname cannot be blank";
     }else{
           small[0].style.display = "none";
     }
     // ######################################## Last name #############################################################

     if (lastname.value.trim() === "") {
          valid = false;
          small[1].style.display = "block";
          small[1].style.color="red";
          small[1].innerText = "Lastname cannot be blank";

     } else
     {
            small[1].style.display = "none";
     }
     if (email.value.trim()===""){
          valid=false;
          small[2].style.display = "block";
          small[2].style.color = "red";
          small[2].innerText = "email cannot be blank";
     }
       
     else if(!(emailReg.test(email.value)))
      {  
        
          valid=false;
           small[2].style.display = "block";
           small[2].style.color = "red";
           small[2].innerText = "Invalid email";
     }
     
     else{
           small[2].style.display = "none";
     }
     console.log(emailReg.test(email.value));

     if (mobile.value.trim() === "") {
          valid = false;
          small[3].style.display = "block";
          small[3].style.color = "red";
          small[3].innerText = "Mobile number cannot be blank";
     }
     else if (!(mobReg.test(mobile.value))) {

          valid = false;
          small[3].style.display = "block";
          small[3].style.color = "red";
          small[3].innerText = "Invalid Mobile Number";
     }
     else{
          small[3].style.display = "none";
     }
   
      if (password.value.trim() === "") {
           valid = false;
           small[4].style.display = "block";
           small[4].style.color = "red";
           small[4].innerText = "password cannot be blank";
      }
       else {
            small[4].style.display = "none";
       }
      if (rePassword.value.trim() === "") {
           valid = false;
           small[5].style.display = "block";
           small[5].style.color = "red";
           small[5].innerText = "password cannot be blank";
      }
      else if (password.value !== rePassword.value){
           valid = false;
           small[5].style.display = "block";
           small[5].style.color = "red";
           small[5].innerText = "Passwords are not same";
      }
       else {
            small[5].style.display = "none";
       }
      return valid;
}


function passwordChanged() {
     var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
     var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
     var enoughRegex = new RegExp("(?=.{8,}).*", "g");


     if (password.value.length == 0) {
          strength.innerHTML = '-';
     } else if (false == enoughRegex.test(password.value)) {
          strength.innerHTML = 'More Characters';
     } else if (strongRegex.test(password.value)) {
          strength.innerHTML = '<span style="background-color:green;font-weight:bold">Strong</span>';
     } else if (mediumRegex.test(password.value)) {
          strength.innerHTML = '<span style="background-color:orange;font-weight:bold">Medium</span>';
     } else {
          strength.innerHTML = '<span style="background-color:red;font-weight:bold">Poor!!</span>';
     }
}