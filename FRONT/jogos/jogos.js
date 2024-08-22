const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false // Para que a animação ocorra apenas uma vez
})

// sr.reveal('.interface', {delay:100, origin: 'top'});

sr.reveal('.txt-topo-site', {delay:100, origin: 'left'});

sr.reveal('.carrosel', {delay:100, origin: 'right'});

sr.reveal('.container-jogos', {delay:100, origin: 'top'});

sr.reveal('.text h1', {delay:100, origin: 'top'});

sr.reveal('.text p', {delay:100, origin: 'top'});

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

// ---------------termos_de_uso--------------
const termosDeUso = `
<ol style="line-height: 1.6;">
    <li><strong>Aceitação dos Termos</strong><br>
    Ao acessar ou utilizar a plataforma Geodiverso, você concorda em cumprir e estar sujeito a estes Termos de Uso.</li>
    <li><strong>Descrição dos Serviços</strong><br>
    O Geodiverso oferece recursos educativos interativos para o ensino de Geografia no Ensino Médio.</li>
    <li><strong>Registro de Usuário</strong><br>
    Para utilizar algumas funcionalidades do Geodiverso, pode ser necessário criar uma conta.</li>
    <li><strong>Uso Permitido</strong><br>
    Você concorda em utilizar a plataforma apenas para fins educacionais e de acordo com as leis aplicáveis.</li>
</ol>
`;

// ---------------politica_de_privacidade--------------
const politicaDePrivacidade = `
<ol style="line-height: 1.6;">
    <li><strong>Informações Coletadas</strong><br>
    Ao utilizar a plataforma Geodiverso, podemos coletar informações pessoais que você fornece ao se registrar.</li>
    <li><strong>Uso das Informações</strong><br>
    As informações coletadas são utilizadas para prover e melhorar os serviços oferecidos pela plataforma.</li>
    <li><strong>Compartilhamento de Informações</strong><br>
    O Geodiverso não compartilha suas informações pessoais com terceiros.</li>
    <li><strong>Segurança das Informações</strong><br>
    Adotamos medidas de segurança apropriadas para proteger suas informações pessoais.</li>
</ol>
`;

document.getElementById('botao-footer-1').addEventListener('click', function() {
Swal.fire({
   title: 'Termos de Uso',
   html: termosDeUso, 
   icon: 'info',
   confirmButtonText: 'Aceitar os termos'
});
});

document.getElementById('botao-footer-2').addEventListener('click', function() {
Swal.fire({
   title: 'Política de Privacidade',
   html: politicaDePrivacidade, 
   icon: 'info',
   confirmButtonText: 'Aceitar os termos'
});
});