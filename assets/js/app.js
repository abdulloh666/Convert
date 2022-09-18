let number =  document.querySelector("#input"); 
let btn = document.querySelector("#btn");
let select = document.querySelector("#select");
let h1El = document.querySelector("h1")

function check(){
    h1El.innerHTML = ( number.value / select.value);
}

btn.addEventListener('click' , check );
   
