const form = document.getElementById("form");
const username = document.getElementById("fname");
const email = document.getElementById("email");
const pswd = document.getElementById("pswd");
const pswdR = document.getElementById("pswdR");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  checkInput();
});

function checkInput(){
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const pswdValue = pswd.value.trim();
  const pswdRValue = pswdR.value.trim();

  if(nameValue === ""){
    setErrorFor(username, "Name can't be blank");
  }
  else {
    setSuccessFor(username);
  }

  if(emailValue === ""){
    setErrorFor(email, "Email can't be blank");
  }
  else if(!isEmail(emailValue)){
    setErrorFor(email, "Not valid email");
  }
  else{
    setSuccessFor(email);
  }

  if(pswdValue === ""){
    setErrorFor(pswd, "Password can't be blank");
  }
  else if(!isPswdOk(pswdValue)){
    setErrorFor(pswd, "Password must contain one of special charactor ! $ _ -");
  }
  else{
    setSuccessFor(pswd);
  }

  if(pswdValue!== pswdRValue || pswdRValue === ""){
    setErrorFor(pswdR, "Password is not matching");
  }
  else{
    setSuccessFor(pswdR);
  }
}

function setErrorFor(input, msg){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = msg;

  formControl.className = "form-control error";
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPswdOk(value){
  return Boolean(value.match(/[!$_-]/g))
}