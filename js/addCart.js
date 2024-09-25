let userInfo = document.getElementById('user-info');
let User = document.getElementById("user");
let hideUser = document.getElementById('Hide-user');
let logout_btn = document.getElementById('LogOut');
// console.log(userInfo);
// console.log(User);
// console.log(hideUser);

if(localStorage.getItem('username')){
    hideUser.remove();
    userInfo.style.display = 'flex';
    User.innerHTML = localStorage.getItem('username');
}

logout_btn.addEventListener('click' , function(){
    localStorage.clear();
    setTimeout(() => {
        window.location = 'register.html';
    }, 2);
})


// product 

let productDom = document.querySelector(".products")

let products = [
{
    id:1,
    title :"LapTop",
    size :"larger",
    ImageUrl :"Images/Laptop.webp"
},
{
    id:2,
    title :"Computer",
    size :"larger",
    ImageUrl :"Images/Computer.jpeg"
},
{
    id:3,
    title :"Mouse",
    size :"larger",
    ImageUrl :"Images/mouse.webp"
},
{
    id:4,
    title :"Keybord",
    size :"larger",
    ImageUrl :"Images/Keybord.webp"
}
   ]

// show product 

function showProductui(){
 
    let productui = products.map((item)=>{
        return `
            <div class="products-items">
               <img src="${item.ImageUrl}" class="products-item-image" />

                  <div class="product-item-des">
                     <h2>${item.title}</h2>
                     <p>Lorem, ipsum dolor.</p>
                     <span> Size : ${item.size} </span>
                  </div>

                  <div class="product-item-action">
                     <button class="Add-to-cart" onclick="addTocart()">Add To Cart  </button>
                     <i class="fa-solid fa-heart"></i>
                  </div>
            </div>
        `
    })
    productDom.innerHTML = productui;

}
showProductui();
function checkyouruser(){
    if(localStorage.getItem('username')){
         console.log("add to cart ");
    }else{
        window.location= 'login.html';
    }
}

showProductui();
function addTocart(id){
    let cartchoise = products.find((item)=>item.id === id)
    console.log(cartchoise)
}
