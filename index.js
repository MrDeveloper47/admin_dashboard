function toggle() {
var sidenev = document.getElementById('sidenev');
var topnav =  document.getElementById("topnav");
var width = sidenev.style.width;

if(width == '0px'){
sidenev.style.width = '250px'
sidenev.style.transition = '0.3s'
topnav.style.left = "250px";
topnav.style.width = "100%";
topnav.style.transition = '0.3s'
section.style.marginLeft = "250px"
section.style.width = "100%"
section.style.transition = "0.3s"

}
else{
    sidenev.style.width = '0px'
    sidenev.style.transition = '0.3s';
    topnav.style.left = "0px";
topnav.style.width = "100%";
topnav.style.transition = '0.3s'
section.style.marginLeft = "0px"
section.style.width = "100%"
section.style.transition = "0.3s"
}
}

function regsiterclick(activeBtn, InActivrBtn, activeId, inActiveId){
var regsiter = document.getElementById(activeId);
var inActiveId = document.getElementById(inActiveId);

var activebutton = document.getElementById(activeBtn);
var inActivebutton = document.getElementById(InActivrBtn);


activebutton.style.background ="darkorange";
activebutton.style.Color="white";
 
inActivebutton.style.background ="white";
inActivebutton.style.Color="black";
 



regsiter.style.display = "block";
inActiveId.style.display = "none";


}


function signup(event){
event.preventDefault();
var user = {};
var form = document.forms.signupForm;
var name = form.elements.name;
var msge = document.getElementById("message");
var mob = form.elements.mob;
var mobilemsge = document.getElementById("mobmessage");
var email = form.elements.email;
var emailmsg = document.getElementById("emailmessage");
var pass = form.elements.pass;
var passmsg = document.getElementById("pasmessage")
if(name.value.trim().length == 0)
{

    name.style.borderColor ="red";
    msge.innerHTML="Name is required";
    msge.style.color="red";
    msge.style.display="block";
    
}
else if(mob.value.trim().length == 0)
{
    mob.style.borderColor ="red";
    mobilemsge.style.display = "block";
    mobilemsge.style.color = "red";
    mobilemsge.innerHTML = "Mobile is Required";

}
else if(email.value.trim().length == 0)
{
    email.style.borderColor ="red";
    emailmsg.innerHTML = "Email is Required";
    emailmsg.style.color = "red";
    emailmsg.style.display = "block";

}
else if(pass.value.trim().length == 0)
{
    pass.style.borderColor ="red";
    passmsg.innerHTML = "Password is required";
    passmsg.style.color ="red";
    passmsg.style.display ="block";
  

}
else if(pass.value.trim().length < 8){
    pass.style.borderColor ="red";
    passmsg.innerHTML = "Password must be greater then 8 chracter!";
    passmsg.style.color ="red";
    passmsg.style.display ="block";

}
else{
    user.name.value.trim();
    user.mob.value.trim();
    user.email.value.trim();
    user.pass.value.trim();
    console.log(user);
    Swal.fire({
        title: 'Registration Success!',
        icon: 'success'
        
      })
};

}

function nameinput(input, messageId)
{
var message = document.getElementById(messageId);
input.style.borderColor ="#ccc";
message.style.display ="none";
}

function mobinput(minput, messagemob)
{
var mobileMessage = document.getElementById(messagemob);
minput.style.borderColor ="#ccc";
mobileMessage.style.display ="none";
}

function emailinput(einput, messageemail)
{
var eMessage = document.getElementById(messageemail);
einput.style.borderColor ="#ccc";
eMessage.style.display ="none";
}

function passinput(pinput, messageepass)
{
var pMessage = document.getElementById(messageepass);
pinput.style.borderColor ="#ccc";
pMessage.style.display ="none";
}

function togglePassword (idofInput, activeeye){
    var password = document.getElementById(idofInput);
    var eyeIcon = document.getElementById(activeeye)

    if(password.type == "password")
    {

        password.type ="text";
        eyeIcon.className ="fa fa-eye-slash"
    }

    else{
       password.type ="password";
       eyeIcon.className ="fa fa-eye"
    }
}



function login(event){

    var user = {};
    event.preventDefault();
    var  emailmessage = document.getElementById("email-message");
    var passwordmsg = document.getElementById("password-message");
    var form = document.forms.loginForm;
   var  email = form.elements.lemail;
   var password = form.elements.pass;

  if(email.value.trim().length == 0){

    email.style.borderColor ="red";
    emailmessage.innerHTML="Email is required";
    emailmessage.style.color="red";
    emailmessage.style.display="block";
  }

  else if(password.value.trim().length < 8) {
    password.style.borderColor ="red";
    passwordmsg.innerHTML="Password must be greater then 8 chracter!";
    passwordmsg.style.color="red";
    passwordmsg.style.display="block";

  }
  
  else{
    user.email = email.value.trim();
    user.password = password.value.trim();
    console.log(user);
    Swal.fire({
        title: 'Login Success!',
        icon: 'success'
        
      })
  };
}