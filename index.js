const btnSignup = document.querySelector(".btnSubmit button"),
fName = document.querySelector("input[name='firstName']"),
lName = document.querySelector("input[name='lastName']"),
pNum = document.querySelector("input[name='phoneNum']"),
email = document.querySelector("input[name='email']"),
pass = document.querySelector("input[name='password']"),
firstName =  document.querySelector(".firstName p"),
lastName =  document.querySelector(".lastName p"),
phoneNum =  document.querySelector(".phoneNum p"),
emailContainer =  document.querySelector(".email p"),
passCont =  document.querySelector(".password p"),
rForm = document.querySelector("form"),
signed = document.querySelector(".signupSuccess")

fName.onkeyup = () => {
    validFnLn(fName.value, firstName)    
}
lName.onkeyup = () => {
    validFnLn(lName.value, lastName)
}

// function to validate firstName and lastName 
function validFnLn(inputVal ,divContainer) {
    if (!/^[a-z]+$/i.test(inputVal)) {
        divContainer.classList.add("err")
        divContainer.innerHTML = "Invalid name (example: Mike) &#10006"
        return divContainer.classList.remove("success")
    } else {
        divContainer.classList.add("success")
        divContainer.innerHTML = "Valid name &#10003"
        return divContainer.classList.remove("err")
    }
}

// validate phone number 
pNum.onkeyup = () => {
    if (!/^\+234/.test(pNum.value)) {
        phoneNum.classList.add("err")
        phoneNum.classList.remove("success")
        phoneNum.innerHTML = "Phone number can only start with (+234) &#10006"
    } else {
        phoneNum.innerHTML = ""
        phoneNum.classList.remove("err")

        if (/[a-z]+/i.test(pNum.value)) {
            phoneNum.innerHTML = "Invalid phone number &#10006"
            phoneNum.classList.remove("success") 
            phoneNum.classList.add("err")
        } else {
            if (/[0-9]+/.test(pNum.value)) {
                if (pNum.value.length == 14) {
                    phoneNum.innerHTML = "Valid phone number &#10003"
                    phoneNum.classList.remove("err") 
                    phoneNum.classList.add("success") 
                }
            }
        }
    }
}

// validate email 
email.onkeyup = () => {
    if (email.value == '') {
        emailContainer.innerHTML = "Input cannot be empty &#10006"
        emailContainer.classList.remove("success")
        emailContainer.classList.add("err")
    } else {
        if (/[a-z0-9]+@[a-z]+\.com/i.test(email.value)) {
            emailContainer.innerHTML = "Valid email &#10003"
            emailContainer.classList.add("success")
            emailContainer.classList.remove("err")
        } else {
            emailContainer.innerHTML = "Email not valid &#10006"
            emailContainer.classList.remove("success")
            emailContainer.classList.add("err")
        }
    }
}

// validate password 
pass.onkeyup = () => {
    if (pass.value == '') {
        passCont.innerHTML = "Password cannot be empty &#10006"
        passCont.classList.add("err")
        passCont.classList.remove("success") 
    } else {
        if (pass.value.length < 8) {
            passCont.innerHTML = "Password must be at least 8 character long &#10006"
            passCont.classList.add("err") 
            passCont.classList.remove("success") 
        } else {
            if (!/\d+/.test(pass.value)) {
                passCont.innerHTML = "Password must have at least a number &#10006"
                passCont.classList.add("err") 
                passCont.classList.remove("success") 
            } else {
                if (!/[A-Z]+/.test(pass.value)) {
                    passCont.innerHTML = "Password must have at least a capital letter &#10006"
                    passCont.classList.add("err") 
                    passCont.classList.remove("success") 
                } else {
                    passCont.innerHTML = "Valid Password &#10003"
                    passCont.classList.add("success") 
                    passCont.classList.remove("err") 
                }
            }
        }
    }
}

// validate form input if not empty
btnSignup.onclick = (e) => {
    e.preventDefault()

    if (fName.value != '' || lName.value != '' || email.value != '' || pass.value!= '') {
        rForm.style.display = "none"
        signed.style.display = "block"

        setTimeout(() => {
            location.href = "index.html"
        }, 3000);
    } else {
        firstName.innerHTML = "Firstname is required"
        firstName.classList.add("err")

        lastName.innerHTML = "Lastname is required"
        lastName.classList.add("err")

        emailContainer.innerHTML = "Email is required"
        emailContainer.classList.add("err")

        passCont.innerHTML = "Password is required"
        passCont.classList.add("err")

        phoneNum.innerHTML = "Phone number is required"
        phoneNum.classList.add("err")
    }   
}

// Copyright 2022 21base 