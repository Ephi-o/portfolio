"use strict";

//P/ - Enter/Escape main page

const on = document.querySelector('#on')
const off = document.querySelector('#off')
const btnOn = document.querySelector('.btnOn')
const btnOff = document.querySelector('.btnOff')
const boutons = document.querySelector('#boutons')
const transition = document.querySelector('#transition')
const aide = document.querySelector('#aide')
document.body.style.cursor = "none"
document.addEventListener("mousemove", indic);

document.addEventListener("keydown", (event)=>
{
    const nomTouche = event.key;
    if (nomTouche === 'Enter' || nomTouche === 'Space' || nomTouche == " ")
    {
        docOn()
    }
    else if(nomTouche === 'Escape')
    {
        docOff()
    }
})

on.addEventListener("click", ()=>
{
    docOn()
})

off.addEventListener("click", ()=>
{
    docOff()
})

function docOn()
{
    aide.setAttribute("src", "./RessourcesImport/Images/Button2.png")
    btnOn.classList.remove("visible")
    btnOn.classList.add("invisible")
    setTimeout(()=>{
        btnOff.classList.remove("invisible")
        boutons.classList.remove("invisible")
        btnOff.classList.add("visible")
        boutons.classList.add("visible")
    }, 1500)
}

function docOff()
{
    aide.setAttribute("src", "./RessourcesImport/Images/Button.png")
    transition.style.display = "block"
    setTimeout(()=>
    {
        btnOn.classList.add("visible")
        btnOn.classList.remove("invisible")
    }, 2000)
        btnOff.classList.add("invisible")
        boutons.classList.add("invisible")
        btnOff.classList.remove("visible")
        boutons.classList.remove("visible")
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
        radio()
}

function indic(e)
{
    var CurX = e.clientX + 10
    var CurY = e.clientY + 10
    aide.style.position = "absolute"
    aide.style.left = `${CurX}`+"px"
    aide.style.top = `${CurY}`+"px"
}

//P// - Hover via touches


const btnY = document.querySelector('#btnY')
const btnA = document.querySelector('#btnA')
const btnB = document.querySelector('#btnB')
const btnX = document.querySelector('#btnX')

document.addEventListener("keydown", (event)=>
{
    const nomTouche = event.key;
    console.log(event.key)
    if(btnOn.classList == "btnOn invisible")
    {
        switch(nomTouche)
        {
            case 'ArrowUp':
                btnY.classList.add("arrowselected")
                btnX.classList.remove("arrowselected")
                btnB.classList.remove("arrowselected")
                btnA.classList.remove("arrowselected")
                break
            case 'ArrowDown':
                btnY.classList.remove("arrowselected")
                btnX.classList.remove("arrowselected")
                btnB.classList.remove("arrowselected")
                btnA.classList.add("arrowselected")
                break
            case 'ArrowLeft':
                btnY.classList.remove("arrowselected")
                btnX.classList.add("arrowselected")
                btnB.classList.remove("arrowselected")
                btnA.classList.remove("arrowselected")
                break
            case 'ArrowRight':
                btnY.classList.remove("arrowselected")
                btnX.classList.remove("arrowselected")
                btnB.classList.add("arrowselected")
                btnA.classList.remove("arrowselected")
                break
        }
    }
})
    
//P/// - Sound effect

var audio = new Audio('./RessourcesImport/Sons/Tv off - Sound effects.mp3');

function radio()
{       
        audio.play()       
}