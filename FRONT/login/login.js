// ---------pegar_a_tecla_enter-------------

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('input-email');
    const passwordInput = document.getElementById('input-senha');

    emailInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    });

    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    });
});

// -----------api_do_sabado_letivo--------------

async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-senha').value;

    const data = { email,    password };
    console.log(data);

    try {
        const response = await fetch('http://localhost:3005/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success && result.data) {
            console.log(result.data);

            localStorage.setItem('userId', result.data.id);
            localStorage.setItem('userName', result.data.name);

            window.location.href = "../home/home.html";
        } else {
            swal({
                title: "Erro",
                text: result.message,
                icon: "error",
            });
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        swal({
            title: "Erro",
            text: "Ocorreu um erro ao fazer login.",
            icon: "error",
        });
    } 
}