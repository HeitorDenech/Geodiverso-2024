let button = document.getElementById("submit");

button.onclick = async function () {
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-senha").value;
    let name = document.getElementById("input-nome").value;

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let results = regexEmail.test(email);

    if (name === "" || email === "" || password === "") {
        Swal.fire({
            title: "Preencha todos os campos!",
            icon: "error",
        });
    } else if (password === "" || password === null) {
        Swal.fire({
            title: "Verifique sua senha!",
            icon: "error",
        });
    } else if (email === "") {
        Swal.fire({
            title: "Insira seu email!",
            icon: "error",
        });
    } else if (!results) {
        Swal.fire({
            title: "Verifique seu email!",
            icon: "error",
        });
    } else {
        let data = { name, email, password };

        const response = await fetch('http://localhost:3005/api/user/create', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        if (content.success) {
            Swal.fire({
                title: "Parabéns!",
                text: "Você foi cadastrado no Geodiverso com sucesso!",
                imageUrl: 'sucesso-img.jpg',
                imageWidth: 400,
                imageHeigth: 300,
                imageAlt: 'Imagem de sucesso'
            }).then(() => {
                window.location.href = "../login/login.html";
            });
        } else {
            Swal.fire({
                title: "Email já cadastrado",
                imageUrl: 'nao-sucesso-img.jfif',
                imageWidth: 400,
                imageHeigth: 300,
                imageAlt: 'Imagem de sucesso'
            });
        }
    }
}
