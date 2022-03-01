let userName = document.getElementById("userName");
let password = document.getElementById("password");

function getValue(){
    if(userName.value === "admin" && password.value === "user"){
        alert("true")
        return false
    }
    else{
        alert("hi")
    }
}

getValue()