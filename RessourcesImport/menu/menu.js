"use strict";

const button = document.querySelector('#button')
const home = document.querySelector('#home_menu')
const contact = document.querySelector('#contact_menu')
const projects = document.querySelector('#projects_menu')
const git = document.querySelector('#git_menu')
const awesome = document.querySelector('.awesome')
const cv = document.querySelector('#cv_menu')
var x = 0
var path = window.location.pathname;
var page = path.split("/").pop();

home.style.visibility = "hidden"
projects.style.visibility = "hidden"
git.style.visibility = "hidden"
cv.style.visibility = "hidden"
contact.style.visibility = "hidden"

button.addEventListener("click", ()=>
{
    x++
    awesome.classList.toggle("pushed")
    awesome.classList.remove("unpushed")
    if(x == 2)
    {
        awesome.classList.add("unpushed")
        x = 0
    }
    awesome.classList.toggle("fa-bars")
    awesome.classList.toggle("fa-xmark")
    home.classList.toggle("menu_selected")
    home.style.visibility = "visible"
    if(page == "cv.html")
    {
        contact.classList.toggle("menu_selected")
        projects.classList.toggle("menu_selected")
        git.classList.toggle("menu_selected")
        cv.style.display = "none"
        menuP1(contact)
        menuP2(projects)
        menuP3(git)
        projects.style.visibility = "visible"
        git.style.visibility = "visible"
        contact.style.visibility = "visible"
    }
    if(page == "contact.html")
    {
        cv.classList.toggle("menu_selected")
        projects.classList.toggle("menu_selected")
        git.classList.toggle("menu_selected")
        contact.style.display = "none"
        menuP1(cv)
        menuP2(projects)
        menuP3(git)
        projects.style.visibility = "visible"
        git.style.visibility = "visible"
        cv.style.visibility = "visible"
    }
    if(page == "git.html")
    {
        cv.classList.toggle("menu_selected")
        contact.classList.toggle("menu_selected")
        projects.classList.toggle("menu_selected")
        git.style.display = "none"
        menuP1(cv)
        menuP2(contact)
        menuP3(projects)
        projects.style.visibility = "visible"
        cv.style.visibility = "visible"
        contact.style.visibility = "visible"
    }
})

function menuP1(el)
{
    el.children[0].children[0].style.left = "-2.5vmin"
    el.children[0].children[0].style.top = "-3.5vmin"
    el.children[0].children[0].style.position = "relative"
    el.style.clipPath = "polygon(100% 0, 100% 25%, 100% 50%, 50% 50%)";
}
function menuP2(el)
{
    el.children[0].children[0].style.left = "-2.75vmin"
    el.children[0].children[0].style.top = "3.5vmin"
    el.children[0].children[0].style.position = "relative"
    el.style.clipPath = "polygon(100% 100%, 100% 75%, 100% 50%, 50% 50%)";
}
function menuP3(el)
{
    el.children[0].children[0].style.left = "4vmin"
    el.children[0].children[0].style.top = "-2vmin"
    el.children[0].children[0].style.position = "relative"
    el.style.clipPath = "polygon(100% 100%, 76% 100%, 50% 100%, 50% 50%)";
}