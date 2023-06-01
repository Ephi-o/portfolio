"use strict";

const button = document.querySelector('#button')
const cv = document.querySelector('#cv')
const home = document.querySelector('#home')
const contact = document.querySelector('#contact')
const projects = document.querySelector('#projects')
const git = document.querySelector('#git')
const awesome = document.querySelector('.awesome')
var x = 0

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
    if(cv)
    {
        cv.classList.toggle("menu_selected")
    }
    if(home)
    {
    home.classList.toggle("menu_selected")
    }
    if(contact)
    {
    contact.classList.toggle("menu_selected")
    }
    if(projects)
    {
        projects.classList.toggle("menu_selected")
    }
    if(git)
    {
        git.classList.toggle("menu_selected")
    }
})