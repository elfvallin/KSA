
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})



 function validation(){
     if(document.formfill.name.value==""){
         document.getElementById("result").innerHTML="Enter Your name ";
         return false;
     }
     else if(document.formfill.Yourname.value.length<6){
         document.getElementById("result").innerHTML="Atleast six letters"
     }
     else if(document.formfill.Email.value==""){
         document.getElementById("result").innerHTML="Enter your email"
     }
    }
    