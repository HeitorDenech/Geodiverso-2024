const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false // Para que a animação ocorra apenas uma vez
});

sr.reveal('.txt-topo-site', { delay: 100, origin: 'left' });
sr.reveal('.carrosel', { delay: 100, origin: 'right' });
sr.reveal('.content', { delay: 200, origin: 'right' });


let count = 1
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 3500)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1
    }

    document.getElementById("radio" + count).checked = true;

}


// ----------------API_conteúdos-------------------

async function getConteudos() {
    const response = await fetch('http://localhost:3005/api/conteudos', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    const results = await response.json();

    if (results.success) {
        let conteudos = results.data;
        let html = document.getElementById("conteudos");

        conteudos.forEach(conteudos => {

            // localStorage.setItem(page, conteudos.id)

            let card = "<div class='content'>" +
                        "<div class='question'>" +
                            // "<img src='../img/globalizacao.png' alt='' srcset=''>" +
                                "<div class='title-accordion'>" +
                                   " <h3>" + conteudos.titulo + "</h3>" +
                                   " <p>" + conteudos.sub_titulo + "<span>Ver mais.</span></p>" +
                               " </div>" +
                               " <svg width='15' height='10' viewbox='0 0 42 25'>" +
                                  "  <path d='M3 3L21 21L39 3' stroke='white' stroke-width='7' stroke-linecap='round' />" +
                              "  </svg>" +
                       " </div>" +
                       " <div class='answer'>" +
                           " <p>" + conteudos.texto_conteudo + "</p> "+
                        "</div> "+
                    "</div>" +
                    "</div>";

            html.innerHTML += card;
        });

        const curiosidades = document.querySelectorAll(".content");

curiosidades.forEach(content => {
    
    content.addEventListener("click", () => {
        content.classList.toggle("active")
    })
})



    } else {
        alert(results.message)
    }
}

getConteudos();


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