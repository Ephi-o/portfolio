"use strict";

//P/ - Enter/Escape main page

const btnOn = document.querySelector('.btnOn')
const btnOff = document.querySelector('.btnOff')
const boutons = document.querySelector('#boutons')
const transition = document.querySelector('#transition')
const aide = document.querySelector('#aide')
const help = document.querySelector('#help')

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

btnOn.addEventListener("click", ()=>
{
    docOn()
})

btnOff.addEventListener("click", ()=>
{
    docOff()
})

function docOn()
{
    aide.style.opacity = "0"
    help.style.opacity = "0"
    setTimeout(()=>
    {
        aide.style.opacity = "1"
        help.style.opacity = "1"
        if(langue === "fr-FR")
        {
            help.innerHTML = "Utilisez votre souris, ou les flèches directionnelles."
        }
        if(langue === "en")
        {
            help.innerHTML = "Use your mouse or arrows"
        }
    }, 4000)
    btnOn.classList.remove("visible")
    btnOn.classList.add("invisible")
    setTimeout(()=>{
        btnOff.classList.remove("invisible")
        boutons.classList.remove("invisible")
        btnOff.classList.add("visible")
        boutons.classList.add("visible")
    }, 1000)
}


function docOff()
{
    if(langue == "fr-FR")
        {
            help.innerHTML = "Appuyez sur 'Entrer', 'Espace' ou 'LeftMouse'."
        }
    else if(langue == "en")
        {
            help.innerHTML = "Push 'Enter', 'Space' or 'LeftMouse'"
        }
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
    var CurX = e.clientX + 15
    var CurY = e.clientY + 15
    aide.style.position = "absolute"
    aide.style.left = `${CurX}`+"px"
    aide.style.top = `${CurY}`+"px"
    help.style.position = "absolute"
    help.style.left = `${CurX+5}`+"px"
    help.style.top = `${CurY+5}`+"px"
}

setTimeout(()=>
{
    aide.style.opacity = "1"
    help.style.opacity = "1"
}, 2000)

//P// - Hover via touches

const btnY = document.querySelector('#btnY')
const btnA = document.querySelector('#btnA')
const btnB = document.querySelector('#btnB')
const btnX = document.querySelector('#btnX')

document.addEventListener("keydown", (event)=>
{
    const nomTouche = event.key;
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
    if(nomTouche == 'Enter')
            {
                if(btnY.classList == "Y arrowselected")
                {
                    window.location.href = "./Page/CV/cv.html";
                }
                if(btnX.classList == "X arrowselected")
                {
                    window.location.href = "./Page/Contact/contact.html";
                }
                if(btnA.classList == "A arrowselected")
                {
                    window.location.href = "./Page/Projet/projet.html";
                }
                if(btnB.classList == "B arrowselected")
                {
                    window.location.href = "./Page/Github/git.html";
                }
            }
        
    }
)
    
//P/// - Sound effect

var audio = new Audio('./RessourcesImport/Sons/Tv off - Sound effects.mp3');

function radio()
{       
        setTimeout(()=>
        {audio.play() }, 300)      
}