"use strict";

const reason = document.querySelector('#reason')
const form = document.querySelector('#form')
const raison = document.createElement("input")
raison.setAttribute("type", "text")
raison.setAttribute("placeholder", "Raison...")
const coordonnate = document.querySelector('#coordonnate')
const selection = document.querySelector('#selection')


// P/ ------------------------------------ Ajout div pour raison/selection ------------------------------------
reason.addEventListener("change", ()=>
{
    if(reason.value == "other")
    {
        
        form.appendChild(raison)
        form.style.gridRowTemplate = "repeat(9, 5vh)"
        raison.style.gridRow = "5"
        raison.style.display = "block"
        raison.style.width = "43vw"
        raison.style.height = "5vh"
        raison.classList.add("raisonactived")
    }
    if(reason.value != "other" && (raison.classList == "raisonactived"))
    {
        form.removeChild(raison)
    }
})

selection.addEventListener("change", ()=>
{
    if(selection.value == "nada")
    {
        coordonnate.setAttribute("disabled", "disabled")
    }
    if(selection.value != "nada")
    {
        coordonnate.removeAttribute("disabled", "disabled")
    }
})

const name_ = document.querySelector('#name')
const firstname = document.querySelector('#firstname')
const mail = document.querySelector('#mail')

// P// ------------------------------------ Vérification régex ------------------------------------
name_.addEventListener("change", verifname)
firstname.addEventListener("change", verifname)
mail.addEventListener("change", verifMail)
coordonnate.addEventListener("change", verifCoordonnate)


function verifname(e)
{
    let value;
    // value=/^[A-Za-z\-_]+$/
    value = /^[a-zA-ZÀ-ÿ '-]+$/
    value.test(e.target.value)
    console.log(value.test(e.target.value))
    if(value.test(e.target.value))
        {
            e.target.style.backgroundColor = ""
        }
        else
        {
            e.target.style.backgroundColor = "rgba(255, 0, 0, 1)"
        }
    }
    
function verifMail(e)
{
    let value;
    value=/\S+\@[A-Za-z]+\.[A-Za-z]/
    value.test(e.target.value)
    console.log(value.test(e.target.value))
    if(value.test(e.target.value))
        {
            e.target.style.backgroundColor = ""
        }
        else
        {
            e.target.style.backgroundColor = "rgba(255, 0, 0, 1)"
        }
}

function verifCoordonnate()
{
    let value
    console.log(selection.value)
    switch(selection.value)
    {
        case "tel": value=/^(\+33|0)\d([\s\.\-]?\d{2}){4}$/
            break
        case "linkedin" : console.log("JE SUIS UN link")
            break
        case "discord" : value=/.*[#](\d){4}/
            break
        case "other" : console.log("JE SUIS UN other")
            break
        case "nada" : 
            break
    }
    if(value.test(coordonnate.value))
    {
        coordonnate.style.backgroundColor = ""
    }
    else
    {
        coordonnate.style.backgroundColor = "rgba(255, 0, 0, 1)"
    }
}

//P/// ------------------------------------ Animation Canvas ------------------------------------

const canvas = document.getElementById('canvas-form')
const ctx = canvas.getContext('2d')

function resize()
{
    canvas.width = form.clientWidth;
    canvas.height = form.clientHeight;
}
resize();
window.addEventListener('resize', resize);


var count = canvas.height;
var bubbles = [];
var bubbleCount = 40;
var bubbleSpeed = 1.5;

function animate() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < bubbles.length; i++) 
    {
    bubbles[i].position.x = Math.sin(bubbles[i].count/bubbles[i].distanceBetweenWaves) * 50 + bubbles[i].xOff;
    bubbles[i].position.y = bubbles[i].count;
    bubbles[i].render();
    if(bubbles[i].count < 0 - bubbles[i].radius) {
        bubbles[i].count = canvas.height + bubbles[i].yOff;
    } else {
        bubbles[i].count -= bubbleSpeed;
    }
}
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);

var createBubble = function()
{
    this.position = {x: 0, y: 0};
    this.radius = 8 + Math.random() * 6;
    this.xOff = Math.random() * canvas.width - this.radius;
    this.yOff = Math.random() * canvas.height;
    this.distanceBetweenWaves = 50 + Math.random() * 40;
    this.count = canvas.height + this.yOff;
    this.color = 'rgba(184, 26, 26, 0.5)';

    this.resetPosition = function() {
    this.position = {x: 0, y: 0};
    this.radius = 8 + Math.random() * 6;
    this.xOff = Math.random() * canvas.width - this.radius;
    this.yOff = Math.random() * canvas.height;
    this.distanceBetweenWaves = 50 + Math.random() * 40;
    this.count = canvas.height + this.yOff;
    }
    this.render = function() {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI*2, false);
    ctx.fill()
    ctx.restore();
    }
}
for (var i = 0; i < bubbleCount; i++) 
{
    var tempBubble = new createBubble();
    bubbles.push(tempBubble);
}