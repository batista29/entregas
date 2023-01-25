const email = document.getElementById('email')
const senha = document.getElementById('senha')

function login() {

    let dados = {
        email: email.value,
        senha: senha.value
    }
   
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    }

    fetch('http://localhost:3000/motoBoy/login', options)
        .then(response => {return response.json()})
        .then(resp => {
            console.log(resp.email)
            if (resp.err === undefined) {
                if (dados.email == resp.email && dados.senha == resp.senha) {
                    localStorage.setItem("info", JSON.stringify({ "id": resp.id_entregador, "nome": resp.nome }))
                    window.location.href = "../../index.html"
                } else {
                    alert("Usuario ou senha incorreto")
                }
            }
        })
}
