const urlFunc = 'http://localhost:3000/motoBoy'
const funcionario = document.querySelector('.funcionario')
const func = document.querySelector('.func')

function listarFuncionario() {

    let options = { method: 'GET' };

    fetch(urlFunc, options)
        .then(response => { return response.json() })
        .then(resp => {
            resp.forEach(element => {

                let lista = func.cloneNode(true)
                lista.classList.remove("model")

                lista.querySelector('.idEntregador').innerHTML = 'Id:' + element.id_entregador
                lista.querySelector('.nomeEntregador').innerHTML = 'Nome:' + element.nome
                lista.querySelector('.veiculo').innerHTML = 'Veiculo:' + element.veiculo

                funcionario.appendChild(lista)
            })
        })
}

function abrirModal() {
    let modal = document.querySelector(".modal-container");
    modal.classList.remove("model");
}

function fecharModal() {
    let modal = document.querySelector(".modal-container");
    modal.classList.add("model");
}

function abrirModalAtt(info) {

    info = info.parentNode.children[2].innerHTML.split(':')[1]

    localStorage.setItem(
        "infoFunc",
        JSON.stringify({ id: info })
    );

    let modal = document.querySelector(".attModal");
    modal.classList.remove("model");
}

function fecharModalAtt() {
    let modal = document.querySelector(".attModal");
    modal.classList.add("model");
}

function adicionarFuncionario() {

    let inpVeiculo = document.getElementById('inpVeiculo').value
    let inpNomeFuncionario = document.getElementById('inpNomeFunc').value
    let inpEmail = document.getElementById('inpEmail').value
    let inpSenha = document.getElementById('inpSenha').value

    let dados = {
        nome: inpNomeFuncionario,
        email: inpEmail,
        senha: inpSenha,
        veiculo: inpVeiculo
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    if (inpVeiculo != '' && inpNomeFuncionario != '' && inpEmail != '' && inpSenha != '') {
        fetch(urlFunc, options)
            .then(response => response.json())
            .then(resp => {
                window.location.reload(true)
            })
    } else {
        alert('Os campos precisam ser preenchidos!')
    }
}

function excluirFuncionarios(id_entregador) {

    let dados = {
        id_entregador: id_entregador.parentNode.children[2].innerHTML.split(':')[1]
    }

    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch(urlFunc, options)
        .then(response => response.json())
        .then(resp => {
            alert('excluir funcionario')
            window.location.reload(true)
        })
}

function atualizarFuncionario() {

    let info = JSON.parse(localStorage.getItem("infoFunc"));

    let attVeiculo = document.getElementById('inpVeiculo').value
    let attNomeFunc = document.getElementById('inpNomeFunc').value
    let attEmail = document.getElementById('inpEmail').value
    let attSenha = document.getElementById('inpSenha').value
    
    let dados = {
        id_entregador:info.id,
        nome:attNomeFunc,
        email:attEmail,
        senha:attSenha,
        veiculo:attVeiculo
    }

    let options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dados)
      };

      fetch(urlFunc, options)
        .then(response => {return response.json()})
        .then(resp => {
            console.log(resp)
        })
}

listarFuncionario()