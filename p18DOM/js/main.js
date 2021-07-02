
let counter = 0
let downButton = document.getElementById("down-button")
let upbutton = document.getElementById("up-button")


upbutton.addEventListener("click", () =>{
    counter++
    document.getElementById("counter-number").textContent = counter
})


