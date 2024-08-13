const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.interface', {delay:100, origin: 'top'});

sr.reveal('.txt-topo-site', {delay:100, origin: 'left'});

sr.reveal('.carrosel', {delay:100, origin: 'right'});

sr.reveal('.sobre-jogos p', {delay:100, origin: 'top'});

sr.reveal('.sobre-jogos a', {delay:250, origin: 'top'});

sr.reveal('.sobre-mapas h1', {delay:100, origin: 'left'});

sr.reveal('.sobre-mapas p', {delay:150, origin: 'left'});

sr.reveal('.sobre-mapas a', {delay:150, origin: 'left'});

sr.reveal('.container-sobre-curiosidades h1', {delay:100, origin: 'right'});

sr.reveal('.container-sobre-curiosidades p', {delay:140, origin: 'right'});

sr.reveal('.container-sobre-curiosidades a', {delay:180, origin: 'right'});

sr.reveal('.text h1', {delay:100, origin: 'top'});

sr.reveal('.text p', {delay:140, origin: 'top'});

sr.reveal('.text a', {delay:180, origin: 'top'});

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