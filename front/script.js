let button = document.getElementById("enviar");

button.onclick = async function() {

    let nome  = document.getElementById("nome").value; 
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("preencheremail").value;
    if(!nome && !sobrenome) {
        alert("Preencha todos os campos") 
        return false   
    }    else {

    let data = {nome,sobrenome,email}

    const response = await fetch ('http://localhost:3001/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    console.log(content);
    if(content.sucess) {
        alert("Formulário enviado com sucesso, aproveite!")
        window.location.reload();
    } else {
        alert("Não enviado");
    }
}
    }