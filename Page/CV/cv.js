"use strict";

const speech_bubble = document.querySelector('#speech_bubble')
const logo_ = document.querySelectorAll('#logo_')
const infos = document.querySelector('#infos')
const logo_container = document.querySelector('#logo_container')
const maitrises = document.querySelector('#maitrises')
const url = "./cv.json"
var z = 0
var x = 0

speech_bubble.addEventListener("click", ()=>
{
    speech_bubble.style.display = "none"
})

function orient()
{
    for(let i = 0; i < logo_.length ; i++)
    {
        var X = i * 36
        if(window.matchMedia("(orientation: landscape)").matches === true)
        {
            logo_[i].style.top = `calc(cos(${X}deg) * -40vmin`;
            logo_[i].style.left = `calc(sin(${X}deg) * -40vmin`;
        }
        if(window.matchMedia("(orientation: portrait)").matches === true)
        {
            logo_[i].style.top = `calc(cos(${X}deg) * -35vmin`;
            logo_[i].style.left = `calc(sin(${X}deg) * -35vmin`;
        }
    }
}

if (window.DeviceOrientationEvent)
    {
    window.addEventListener('deviceorientation', orient());
    }
window.addEventListener('resize', orient());

for(let i = 0; i < logo_.length ; i++)
{
        logo_[i].addEventListener("click", ()=>
            {
                x = i
                z++
                z = 0
                for(let y = 0; y < logo_.length ; y++)
                {
                    logo_[y].style.filter = 'grayscale(100%)'
                    logo_[i].style.filter = ''
                }
                logo_container.style.transition = '1s'
                logo_container.style.left = '10vw'
                if(window.matchMedia("(orientation: portrait)").matches === true)
                {
                    logo_container.style.left = ''
                    logo_container.style.translate = '0% 40%'
                    if(change != 0)
                    {
                        logo_container.style.translate = '0% 35%'
                        console.log(change)
                    }
                }
                infos.style.opacity = '1'
                infos.style.transition = 'opacity 1.5s .5s'
                infos.style.zIndex= 3;
                fetch(url).then(handleFetch);
                if(change == 1)
                infos.style.background = "none"
            })
}

maitrises.addEventListener("click", ()=>
{
    z++
    if(z == 2)
    {
    for(let i = 0; i < logo_.length ; i++)
    {
        logo_[i].style.filter = ""
        logo_container.style.left = ""
        infos.style.opacity = ""
        infos.style.zIndex= "";
        logo_container.style.transition = '1s'
        infos.style.transition = '.5s'    
        setTimeout(()=>
        {
            logo_container.style.transition = '1s'
            logo_container.style.translate = '0% 0%'
            infos.style.left = ''
        }, 500)
    }
}
})

function handleFetch(response)
{
    
    if(response.ok)
    {
        response.json()
            .then(showResult)
            .catch(error=>console.log(error));
    }
    else
    {
        console.error(response.status, response.statusText);
    }
}
function showResult(data)
{
    infos.innerHTML = ""
    var w
    switch(x)
    {
        case 0 :
            w = data.html
            break
        case 1 :
            w = data.css
            break
        case 2 :
            w = data.sass
            break   
        case 3 :
            w = data.js
            break   
        case 4 :
            w = data.jquery
            break   
        case 5 :
            w = data.typescript
            break   
        case 6 :
            w = data.angular
            break   
        case 7 :
            w = data.mySql
            break   
        case 8 :
            w = data.php
            break   
        case 9 :
            w = data.symfony
            break   
    }
    for(let y = 0; y < w.length ; y++)
    {
        infos.innerHTML += w[y]
    }
}

// P/ CV2 change 

const sword = document.querySelector('#sword')
const photo = document.querySelector('#photo')
const diplomes = document.querySelector('#diplomes')
const experiences = document.querySelector('#experiences')
const shortcut_contact = document.querySelector('#shortcut_contact')
const apropos = document.querySelector('#Apropos')
const continu = document.querySelector('#proposcontinu')
const array_continu = document.querySelectorAll('#proposcontinu span')
const transition1 = document.querySelector('#transition1')
const transition2 = document.querySelector('#transition2')
var audio = new Audio('../../RessourcesImport/Sons/Codec.mp3');
var change = 0
var z = 0
var on = 0

sword.addEventListener("click", ()=>
{
    var random = Math.floor(Math.random()*3)
    if(random == 2)
    {
        if(langue = localStorage.getItem("lang") === "en")
        {
            transition1.innerHTML = `<h1>Hire</h1>`
            transition2.innerHTML = `<h1>Me !</h1>`
        }
        if(langue = localStorage.getItem("lang") === "fr-FR")
        {
            transition1.innerHTML = `<h1>Embauchez</h1>`
            transition2.innerHTML = `<h1>Moi !</h1>`
        }
        
    }
    logo_container.style.transition = '0s'
    transition1.style.display = "block"
    transition2.style.display = "block"
    sword.style.pointerEvents = "none"
    setTimeout(()=>
    {
        sword.style.pointerEvents = ""
        change++
        if(change == 2)
        {change = 0}
        photo.classList.toggle("fantasy")
        diplomes.classList.toggle("fantasy")
        experiences.classList.toggle("fantasy")
        maitrises.classList.toggle("fantasy")
        shortcut_contact.classList.toggle("fantasy")
        apropos.classList.toggle("fantasy")
        continu.classList.toggle("fantasy")
        if(change == 0)
        {
            infos.style.background = ""
            photo.innerHTML = ""
            document.body.style.backgroundSize = "0%"
            continu.style.display = "none"
            apropos.innerHTML = ""
            sword.style.rotate = ''
            apropos.innerHTML = "<li>Guéret Killian</li>"
            apropos.innerHTML += "<p>Développeur Web et Web mobile Junior, à la recherche d'un stage, retrouvez mes maîtrises à ma droite et si vous avez des questions, retrouvez moi dans #Contact.</p>"
        }
        if(change == 1)
        {
            sword.style.rotate = '180deg'
            infos.style.background = "none"
            photo.innerHTML = "<h1>CALL IN COMING</h1>"
            document.body.style.backgroundSize = "100%" 
            if(langue = localStorage.getItem("lang") === "fr-FR" || !localStorage.getItem("lang"))
                {
                    apropos.innerHTML = "<li>Status</li> <li>Équipements</li> <li>Loisirs</li> <li>Paramètres</li>"
                }
                if(langue = localStorage.getItem("lang") === "en")
                {
                    apropos.innerHTML = "<li>Status</li> <li>Equipments</li> <li>Hobbies</li> <li>Parameters</li>"
                }
                }
    }, 2000)
    setTimeout(()=>
    {
        transition1.style.display = ""
        transition2.style.display = ""
    }, 4000)
})
    
photo.addEventListener("click", ()=>
    {
        if(change == 1)
        {
            photo.style.opacity = "0"
            photo.innerHTML = ""
            photo.style.transition = "opacity 1s"
        setTimeout(()=>
        {
            photo.style.opacity = "1"
            photo.style.background = "repeating-linear-gradient(0deg, rgba(60, 165, 103, 0.6) 0%, rgba(46, 139, 103, 0.6) 5%, rgba(46, 139, 103, 0.6) 10%, rgba(60, 165, 103, 0.6) 15%), url(../../images/144479330_4109381992428708_2752974402439397130_n.jpg)"
            photo.style.backgroundRepeat = "no-repeat";
            photo.style.backgroundPosition = "center";        
            photo.style.backgroundSize = "100%"
        }, 1000)
        audio.play()   
        }
})

document.addEventListener("keydown", (event) =>
{
    const nomTouche = event.key;
    if(change != 0)
    {
    switch(nomTouche)
        {
            case 'Enter':
                {continu.style.display = "grid"
                on++
                break}
            case 'Escape':
                {continu.style.display = ""
                on = 0
                break}
            case 'ArrowRight':
                {if(on != 0)
                    if(z != 1 && z != 3)
                    {z++}
                break}
            case 'ArrowLeft':
                {if(on != 0)
                    if(z != 0 && z != 2)
                    {z--}
                break}
            case 'ArrowUp':
                {if(on != 0)
                    if(z != 0 && z != 1)
                    {z-=2}
                break}
            case 'ArrowDown':
                {if(on != 0)
                    if(z != 2 && z != 3)
                    {z+=2}
                break}
        }
    for(let i = 0; i < array_continu.length ;i++)
    {
        array_continu[i].classList.remove("toggled")
    }
    array_continu[z].classList.add("toggled")
}
})

var apropostouch = 0

apropos.addEventListener("click", ()=>
{
    if(window.innerWidth < 1100)
    apropostouch++
    if(change != 0)
    {if(apropostouch == 1)
    {
        continu.style.display = "grid"
    }
    if(apropostouch == 2)
    {
        continu.style.display = ""
        apropostouch = 0
    }}
})