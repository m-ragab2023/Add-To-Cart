// get element register  requird 
let UserName = document.getElementById('UserName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let send_btn = document.querySelector("#send_btn");


// validate Data 
 send_btn.addEventListener("click",register
)
function register(e){
        e.preventDefault();
        if(UserName.value === "" || email.value === "" || password.value === ""){
                alert(" Please enter full details ");
        }else{
             localStorage.setItem('username' , UserName.value);
             localStorage.setItem('Email' , email.value);
             localStorage.setItem('password' , password.value);
    
             setTimeout (()=>{
                   window.location= 'index.html' ;
             },2)
        }
}
