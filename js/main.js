
function validatePassword(){
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
    if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    }
    else {    
    store();
    alert("we have stored some of your data in local and session storage");
    confirm_password.setCustomValidity('strong password!!');
    }
}

function store(){ //stores items in the localStorage
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  //var user = document.getElementById('user').value;
  var key = "stadiums"

  const localStore = {
      fname: fname,
      lname: lname,
  }

  window.localStorage.setItem(key,JSON.stringify(localStore));  
  //converting object to string

  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  const ssnStore = {
      email: email,
      phone: phone
  }
  
  window.sessionStorage.setItem('ssnStore',JSON.stringify(ssnStore));  
  //converting object to string
  

}

