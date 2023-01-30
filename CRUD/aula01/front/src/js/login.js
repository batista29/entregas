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
            if (resp.err === undefined) {
                if (dados.email == resp[0].email && dados.senha == resp[0].senha) {
                    localStorage.setItem("infoMotoBoy", JSON.stringify({ "id": resp[0].id_entregador,"nome":resp[0].nome}));
                    window.location.href = "../../index.html"
                } else {
                    alert("Usuario ou senha incorreto")
                }
            }
        })
}
