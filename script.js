const errormsg = document.querySelector('.error');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');

confirm_password.addEventListener('input', function(){
    if (password.value !=  confirm_password.value){
        errormsg.textContent = "*password do not match"
        confirm_password.classList.add("errorbox")
    }else{
        errormsg.innerHTML = "&nbsp;";
        confirm_password.classList.remove("errorbox")
    }

    
});

confirm_password.addEventListener('blur', function(){
    errormsg.innerHTML = "&nbsp;";
    password.classList.remove("errorbox")
});

confirm_password.addEventListener('focus', function(){
    if (password.value == "") {
        errormsg.textContent = "*you have not enter passwords"
        password.classList.add("errorbox")
    }
    if (password.value !=  confirm_password.value){
        errormsg.textContent = "*password do not match"
        confirm_password.classList.add("errorbox")
    }
})
