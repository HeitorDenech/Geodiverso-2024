const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.interface', {delay:100, origin: 'top'});

sr.reveal('.txt-topo-site', {delay:100, origin: 'left'});

sr.reveal('.carrosel', {delay:100, origin: 'right'});

sr.reveal('.mapas-container', {delay:100, origin: 'top'});

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

// function gerarPDF() {

//     var doc = new jsPDF();
   
//     var img = new Image;
//     img.onload = function() {
//         doc.addImage(this, 10, 10);
//         doc.save("CTStest.pdf");
//         };

//     img.crossOrigin = "";  
    
//     img.src = 'C:/Users/HEITORDEALBUQUERQUED/Desktop/Heitor.html/Geodiverso-2024/Geodiverso-2024/GEODIVERSO/Mapa_europa.svg.png';
    
    
// }