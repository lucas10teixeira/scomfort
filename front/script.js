let button = document.getElementById("enviar");

button.onclick = async function() {
    let nome  = document.getElementById("nome").value; 
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("preencheremail").value;
    let data = {nome,sobrenome,email}

    const response = await fetch ('http://localhost:3001/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.sucess) {
        alert("Sucesso")
    } else {
        alert("Não");
    }
}