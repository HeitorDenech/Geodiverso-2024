const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false // Para que a animação ocorra apenas uma vez
})

sr.reveal('.text-header p', {delay:100, origin: 'top'});
sr.reveal('.Informacoes-usuario img', {delay:100, origin: 'top'});
sr.reveal('.botoes', {delay:100, origin: 'top'});

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

// --------------------perfil------------------------

document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
        swal("Erro", "ID do usuário não encontrado no localStorage.", "error");
        return;
    }

    fetch('http://localhost:3005/api/getUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cliente_id: userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector('.text-header #nome').textContent = data.data.name;
            document.querySelector('.text-header #email').textContent = data.data.email;
            const createDate = new Date(data.data.create_at);
            const formattedDate = createDate.toLocaleDateString();
            document.querySelector('.text-header #conta-criada').textContent = `Conta criada em ${formattedDate}`;
        } else {
            swal("Erro ao carregar o perfil", data.message, "error");
        }
    })
    .catch(error => {
        swal("Erro ao carregar o perfil", error.message, "error");
    });

    // -----------SAIR------------
    document.getElementById('botao-sair').addEventListener('click', function (event) {
        event.preventDefault();
        swal({
            title: "Você tem certeza de que deseja sair da conta?",
            icon: "warning",
            buttons: ["Não!", "Sim, tenho certeza!"],
        }).then((willExit) => {
            if (willExit) {
                localStorage.removeItem('userId');
                localStorage.removeItem('userName');
                window.location.href = "../login/login.html";
            }
        });
    });

    // -----------DELETAR------------
    document.getElementById('botao-deletar').addEventListener('click', function () {
        swal({
            title: "Você tem certeza que deseja sair da conta?",
            text: "Em caso de engano, esta ação não pode ser desfeita.",
            icon: "warning",
            buttons: ["Cancelar", "Sim, deletar!"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch('http://localhost:3005/api/deleteConta', {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ cliente_id: userId })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao deletar a conta');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        swal("Conta deletada com sucesso!", {
                            icon: "success",
                        }).then(() => {
                            localStorage.removeItem('userId');
                            localStorage.removeItem('userName');
                            window.location.href = "../login/login.html";
                        });
                    } else {
                        swal("Erro ao deletar a conta. Tente novamente.", {
                            icon: "error",
                        });
                    }
                })
                .catch(error => {
                    swal("Erro ao deletar a conta.", {
                        icon: "error",
                        text: error.message,
                    });
                });
            }
        });
    });
});