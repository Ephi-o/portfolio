"use strict";

const speech_bubble = document.querySelector('#speech_bubble')
const logo_ = document.querySelectorAll('#logo_')
const infos = document.querySelector('#infos')
const logo_container = document.querySelector('#logo_container')
const maitrises = document.querySelector('#maitrises')
const url = "./cv.json"
var z = 0
speech_bubble.addEventListener("click", ()=>
{
    speech_bubble.style.display = "none"
})

for(let i = 0; i < logo_.length ; i++)
{
    var X = i * 36
    logo_[i].style.top = `calc(cos(${X}deg) * -40vmin`;
    logo_[i].style.left = `calc(sin(${X}deg) * -40vmin`;
    logo_[i].addEventListener("click", ()=>
    {
        z++
        z = 0
        for(let y = 0; y < logo_.length ; y++)
        {
            logo_[y].style.filter = 'grayscale(100%)'
            logo_[i].style.filter = ''
        }
        logo_container.style.transition = '1s'
        logo_container.style.left = '10vw'
        infos.style.opacity = '1'
        infos.style.transition = '1.5s .5s'
        fetch(url).then(handleFetch);
        // infos.innerHTML = logo_[i]
    })
}

maitrises.addEventListener("click", ()=>
{
    z++
    if(z == 2)
    {
    for(let i = 0; i < logo_.length ; i++)
    {
        logo_[i].style.filter = ''
        logo_container.style.left = ''
        infos.style.opacity = ''
        logo_container.style.transition = '1s .5s'
        infos.style.transition = '.5s'    
        setTimeout(()=>
        {
            logo_container.style.transition = ''
            infos.style.transition = ''    
        }, 1000)
    }
}
})

function handleFetch(response)
{
    console.log(response);
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
    infos.innerHTML = `<h2>${data.html.h1}</h2>`;
    console.log(data.html.h1)
}