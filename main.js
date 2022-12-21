let products = document.querySelectorAll(".product")
let buttons = document.querySelectorAll(".button")
let openbtn = document.querySelector(".open")
function card(){
   let cart = document.createElement("div")
   let field = document.createElement("div")
   let heading = document.createElement("h2")
   let closebtn =document.createElement("button")

cart.classList.add("cart")
field.classList.add("cart-field")
closebtn.classList.add("close")

 heading.textContent= "В нашей корзирне"
closebtn.textContent= "закрыть"


document.body.appendChild(cart)
cart.appendChild(heading)
cart.appendChild(field)
cart.appendChild(closebtn)
}
card()


let cart = document.querySelector(".cart")
let closebtn= document.querySelector(".close")
let field = document.querySelector(".cart-field")

openbtn.addEventListener("click",function(){
    cart.style.display = "block" 
}
)
closebtn.addEventListener("click",function(){
    cart.style.display = "none" 
}
) 
buttons.forEach( function(item,index){
item.addEventListener("click", function(){
    let cloneItem = products[index].cloneNode(true)
    let btn = cloneItem.querySelector("button")
    btn.remove()
    field.appendChild(cloneItem)
    products[index].remove()
})
} )