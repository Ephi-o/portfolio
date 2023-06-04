"use strict";

console.log(window.navigator.language)
if(window.navigator.language != "fr")
{
    if(!localStorage.getItem("lang"))
    {
        localStorage.setItem("lang", "en")
    }
}

var langue = localStorage.getItem("lang")
var path = window.location.pathname;
var page = path.split("/").pop();
//P/ Langues

const fa_language = document.querySelector('.fa-language')
const languag = document.querySelector('#language')
var lgOpen = 0

fa_language.addEventListener("click", ()=>
{
    lgOpen++
    console.log(lgOpen)
    if(lgOpen == 1)
    {
        languag.style.scale = "1"
        languag.style.backgroundColor = "#FCFCFC"
        languag.style.transition ="1s"
        languag.children[0].style.visibility = "visible"
        languag.children[1].style.visibility = "visible"
    setTimeout(()=>
    {
        languag.style.width = "20vmin"
        languag.children[0].style.transition= "opacity 1s 1s"
        languag.children[1].style.transition= "opacity 1s 1s"
        languag.children[0].style.opacity = "1"
        languag.children[1].style.opacity = "1"
    }, 1000)
    }
    if(lgOpen == 2)
    {
        lgOpen = 0
        languag.children[0].style.transition= "opacity 1s"
        languag.children[1].style.transition= "opacity 1s"
        languag.children[0].style.opacity = "0"
        languag.children[1].style.opacity = "0"
        languag.style.width = "7vmin"
        languag.style.scale = "0"
        languag.style.transition = "width 1s 1s, scale 1s 2s"
    }
})

languag.children[0].addEventListener("click", ()=>
{
    if(langue != "fr_FR")
    {localStorage.setItem("lang", "fr-FR")
    location.reload()}
})

languag.children[1].addEventListener("click", ()=>
{
    if(langue != "en")
    {localStorage.setItem("lang", "en")
    location.reload()}
})

if(page == "index.html")
{
    if(langue == "en")
    {
    btnY.children[0].children[0].children[0].innerHTML = "My CV"
    btnA.children[0].children[0].children[0].innerHTML = "My Projects"
    btnB.children[0].children[0].children[0].innerHTML = "My Git"
    btnX.children[0].children[0].children[0].innerHTML = "Contact Me"
    console.log(langue)
    help.innerHTML = "Push 'Enter', 'Space' or 'LeftMouse'"
    }
}

if(page == "cv.html")
{
    if(langue === "en")
    {diplomes.children[0].innerHTML = "Professionnal Title - Web Developer - 2023"
    diplomes.children[1].innerHTML = "<em>Baccalauréat général</em> - Sciences - 2020"
    experiences.children[0].innerHTML = "Stage at X"
    apropos.children[1].innerHTML = "Young Web developer, searching for a stage. Find wich languages I know and master on the right, and don't hesitate to contact me."
    speech_bubble.children[0].innerHTML = "Another view ?"
    continu.children[0].innerHTML = "Literature <li>Lovecraft</li> <li>Andrzej Sapkowski</li> <li>Michael Moorcock</li>"
    continu.children[1].innerHTML = "Sport <li>Running</li> <li>Taekwondo</li> <li>Musculation</li>"
    continu.children[2].innerHTML = "Video Games <li>Hades</li> <li>The Witcher/Skyrim</li> <li>WoW/TESO</li>"
    continu.children[3].innerHTML = "Music <li>Rock/Métal</li> <li>Jazz</li> <li>Classique</li>"
}
}

if(page == "contact.html")
{
    const message = document.querySelector('#message')
    if(langue === "en")
    {name_.setAttribute("placeholder", "Name")
    firstname.setAttribute("placeholder", "Firstname")
    selection.children[0].innerHTML = "Another contact"
    selection.children[1].innerHTML = "Phone"
    selection.children[4].innerHTML = "Other..."
    selection.children[5].innerHTML = "Nothing"
    coordonnate.setAttribute("placeholder", "Contact details")
    reason.children[0].innerHTML = "Your reason"
    reason.children[1].innerHTML = "Need information"
    reason.children[2].innerHTML = "Need help"
    reason.children[3].innerHTML = "Job offer"
    reason.children[4].innerHTML = "Other reason..."
    message.setAttribute("placeholder", "Your message")
}}

if(page == "projet.html")
{
    const desc = document.querySelector('#desc')
    if(langue === "en")
    {desc.innerHTML = "Few projects of mine"
}}

if(page == "git.html")
{
    const git3 = document.querySelector('#git3')
    if(langue === "en")
    {git3.children[0].innerHTML = "Few works of which I'm proud."
}}