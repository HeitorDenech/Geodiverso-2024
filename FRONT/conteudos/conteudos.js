const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

// sr.reveal('.interface', {delay:100, origin: 'top'});

sr.reveal('.txt-topo-site', {delay:100, origin: 'left'});

sr.reveal('.carrosel', {delay:100, origin: 'right'});

sr.reveal('.content', {delay:200, origin: 'right'});

let count = 1
document.getElementById("radio1").checked = true;
 
setInterval(function(){
    nextImage();
}, 3500)
 
function nextImage (){
    count++;
    if(count>4){
        count = 1
    }
 
    document.getElementById("radio"+count).checked = true;
 
}

const curiosidades = document.querySelectorAll(".content");

curiosidades.forEach(content => {
    content.addEventListener("click", () => {
        content.classList.toggle("active")
    })
})