"use strict";

const pfp = document.querySelector('#pfp')
const descriptif = document.querySelector('#descriptif')

pfp.addEventListener("mouseenter", ()=>
{
    descriptif.style.visibility = "visible"
    pfp.addEventListener("mouseleave", ()=>
    {
        descriptif.style.visibility = "hidden"

    })
})