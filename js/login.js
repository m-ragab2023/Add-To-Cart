// login in 
let Email = document.getElementById('Email');
let PassWord = document.getElementById('PassWord');
let login_btn = document.getElementById('vad');
 // get Data form localStorage
let getUser = localStorage.getItem('username')
let getpassword  = localStorage.getItem('password');
// valdite data 
login_btn.addEventListener ("click",function(e){
    e.preventDefault();
    if(Email.value === "" || PassWord.value === ""){
            alert(" please Fill Data ")
    }else{
        if(getUser 
            && getUser.trim()=== Email.value.trim() 
            &&  getpassword && 
            getpassword === PassWord.value)
            {
                console.log("Hello Mohamed");
                setTimeout(
                    window.location="index.html",
                 2)
            }else{
                console.log("this worng");
            }
    }
})