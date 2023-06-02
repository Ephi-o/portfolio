"use strict";

const speech_bubble = document.querySelector('#speech_bubble')
const logo_ = document.querySelectorAll('#logo_')

speech_bubble.addEventListener("click", ()=>
{
    speech_bubble.style.display = "none"
})

console.log(logo_)

for(let i = 0; i < logo_.length ; i++)
{
    var X = i * 36
    logo_[i].style.top = `calc(cos(${X}deg) * -40vmin`;
    logo_[i].style.left = `calc(sin(${X}deg) * -40vmin`;
    console.log(logo_[i])
    console.log(i)
    console.log(X)
}