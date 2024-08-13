async function handleSubmit(event) {
    event.preventDefault();
 
    const email    = document.getElementById('input-email').value;
    const password = document.getElementById('input-senha').value;
 
    const data = {email, password};
    console.log(data)
 
    const response = await fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
 
    const result = await response.json();
 
    if(result.success) {
        console.log(result.data);
        window.location.href = "../home/home.html";
       
    } else {
        Swal.fire({
            icon: "error",
            text: result.message,
          });
    }
}