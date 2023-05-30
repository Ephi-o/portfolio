"use strict";

const on = document.querySelector('#on')
const off = document.querySelector('#off')
const btnOn = document.querySelector('.btnOn')
const btnOff = document.querySelector('.btnOff')
const boutons = document.querySelector('#boutons')
const transition = document.querySelector('#transition')

document.addEventListener("keydown", ()=>
{
    btnOn.classList.toggle("visible")
    btnOn.classList.toggle("invisible")
    setTimeout(()=>{
        btnOff.classList.toggle("invisible")
        boutons.classList.toggle("invisible")
        btnOff.classList.toggle("visible")
        boutons.classList.toggle("visible")
    }, 1500)
})

on.addEventListener("click", ()=>
{
        btnOn.classList.toggle("visible")
        btnOn.classList.toggle("invisible")
        setTimeout(()=>{
            btnOff.classList.toggle("invisible")
            boutons.classList.toggle("invisible")
            btnOff.classList.toggle("visible")
            boutons.classList.toggle("visible")
        }, 1500)
})

off.addEventListener("click", ()=>
{
    transition.style.display = "block"
    setTimeout(()=>
    {
        btnOn.classList.toggle("visible")
        btnOn.classList.toggle("invisible")
    }, 2000)
        btnOff.classList.toggle("invisible")
        boutons.classList.toggle("invisible")
        btnOff.classList.toggle("visible")
        boutons.classList.toggle("visible")
        setTimeout(()=>
        {
            transition.style.opacity = "0"
            transition.style.transition = "opacity 1s"
        }, 1500)
        setTimeout(()=>
        {
            transition.style.opacity = ""
            transition.style.transition = ""
            transition.style.display = ""
        }, 2500)
})
