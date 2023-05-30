//NOTE - Call Radio
        var img = document.getElementById("photo");
        var audio = new Audio('../../RessourcesImport/Codec.mp3');
        // function play(){audio.play()}
        // img.addEventListener('click', play)

        var photo = document.getElementById("photo")
        var frame = document.getElementById("frame")
        var call = document.getElementById("para")
        function radio()
        {       
                audio.play()
                photo.classList.toggle("photo-active");
                call.classList.toggle("call-active");       
        }
        
        frame.addEventListener('click', radio)
        // call.addEventListener('click', radio)
        
//TODO - DQM / Hobby
let i = -1
const hobby = document.querySelector('.cv > .color2')
const avant = document.querySelectorAll('.avant')

document.addEventListener("keydown", (event) =>{
        const nomTouche = event.key;
        if (nomTouche === 'Enter')
        hobby.style.visibility = "visible"
        if (nomTouche === 'Escape')
        hobby.style.visibility = "hidden"
})

document.addEventListener("keydown", (event) =>{
        const nomTouche = event.key;
        if (nomTouche === 'Enter')
        i = 0
},)

document.addEventListener("keydown", (event) =>{
        const nomTouche = event.key;
        if (nomTouche === 'ArrowRight' && i <3 )
        i++
        if (nomTouche === 'ArrowDown' && i <2)
        i +=2
        if (nomTouche === 'ArrowUp' && i> 1)
        i -=2
        if (nomTouche === 'ArrowLeft' && i> 0)
        i--
        if (nomTouche === 'Escape')
        i = -1
        avant[0].style.visibility = "hidden"
        avant[1].style.visibility = "hidden"
        avant[2].style.visibility = "hidden"
        avant[3].style.visibility = "hidden"
        avant[i].style.visibility = "visible"
}, false)