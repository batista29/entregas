const urlVwExec = 'http://localhost:3000/vw_pedidos2'
const urlVwPedidos = 'http://localhost:3000/vw_pedidosCaminho'
const urlPedidos = 'http://localhost:3000/pedidos'

const execucao = document.querySelector('.execucao')
const caminho = document.querySelector('.caminho')
const exe = document.querySelector('.exe')
const cam = document.querySelector('.cam')

function pedidosExecucao() {

    let options = { method: 'GET' }

    fetch(urlVwExec, options)
        .then(response => { return response.json() })
        .then(resp => {
            resp.forEach(element => {

                var date = new Date(element.data)
                var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                let lista = exe.cloneNode(true)
                lista.classList.remove("model")

                lista.querySelector('#exId').innerHTML = 'Id: ' + element.id_pedido
                lista.querySelector('#exCli').innerHTML = 'Cliente: ' + element.cliente
                lista.querySelector('#exProd').innerHTML = 'Produto:' + element.produto
                lista.querySelector('#exEnd').innerHTML = 'Endereco: ' + element.endereco
                lista.querySelector('#exData').innerHTML = 'Data: ' + dataFormatadata
                lista.querySelector('#exHora').innerHTML = 'Horário: ' + element.hora_pedido
                lista.querySelector('#exFunc').innerHTML = element.id_entregador

                execucao.appendChild(lista)
            })
        })
}

function pedidosCaminho() {

    let options = { method: 'GET' }

    fetch(urlVwPedidos, options)
        .then(response => { return response.json() })
        .then(resp => {
            resp.forEach(element => {

                var date = new Date(element.data)
                var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                let lista = cam.cloneNode(true)
                lista.classList.remove("model")

                lista.querySelector('#caId').innerHTML = 'Id: ' + element.id_pedido
                lista.querySelector('#caCli').innerHTML = 'Cliente: ' + element.cliente
                lista.querySelector('#caProd').innerHTML = 'Produto: ' + element.produto
                lista.querySelector('#caEnd').innerHTML = 'Endereco: ' + element.endereco
                lista.querySelector('#caData').innerHTML = 'Data: ' + dataFormatadata
                lista.querySelector('#caHora').innerHTML = 'Horário: ' + element.hora_pedido
                lista.querySelector('#caEnt').innerHTML = 'Entrega: ' + element.hora_entrega

                caminho.appendChild(lista)
            })
        })
}

function atualizarPedido(infoPedidos) {

    infoPedidos = infoPedidos.parentNode.children

    var horaAtual = new Date().toLocaleTimeString();

    var data = new Date()

    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();

    var dataAtual = ano + '-' + mes + '-' + dia

    let dados = {
        id_pedido: infoPedidos[0].innerHTML.split(':')[1],
        cliente: infoPedidos[1].innerHTML.split(':')[1],
        endereco: infoPedidos[2].innerHTML.split(':')[1],
        produto: infoPedidos[3].innerHTML.split(':')[1],
        data: dataAtual,
        hora_pedido: infoPedidos[5].innerHTML.split(': ')[1],
        hora_entrega: horaAtual,
        hora_fim: "00:00:00",
        id_entregador: infoPedidos[6].innerHTML
    }

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch(urlPedidos, options)
        .then(response => console.log(response.json()))
        .then(res => {
            alert('enviar pedido para entrega?')
            window.location.reload(true);
        })

}

function finalizarEntrega(idPedido) {

    let dados = {
        id_pedido: idPedido.parentNode.children[0].innerHTML.split(':')[1]
    }

    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch(urlPedidos, options)
        .then(response => response.json())
        .then(res => {
            alert('finalizar entrega?')
            window.location.reload(true);
        })
}

function gerarPedido() {

    let cliente = document.getElementById('cliente').value
    let endereco = document.getElementById('endereco').value
    let produto = document.getElementById('produto').value
    let data = document.getElementById('data').value
    console.log(data.split('T')[1])

    let idEntregador = Math.floor(Math.random() * 4) + 1;

    let dados = {
        cliente: cliente,
        endereco: endereco,
        produto: produto,
        data: data.split('T')[0],
        hora_pedido: data.split('T')[1],
        hora_entrega: "00:00:00",
        hora_fim: "00:00:00",
        id_entregador: idEntregador
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch(urlPedidos, options)
        .then(response => response.json())
        .then(res => {
            window.location.reload(true);
        })

}

const AllPedidos = document.querySelector('.allPedidos')
const itensPedido = document.querySelector('.itensPedido')

function listarAllPedidos() {

    let options = { method: 'GET' };

    fetch(urlPedidos, options)
        .then(response => response.json())
        .then(res => {
            res.forEach(element => {

                var date = new Date(element.data)
                var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                let lista = itensPedido.cloneNode(true)
                lista.classList.remove("model")

                lista.querySelector('#idCli').innerHTML = 'Id: ' + element.id_pedido
                lista.querySelector('#CliNome').innerHTML = 'Cliente: ' + element.cliente
                lista.querySelector('#Produto').innerHTML = 'Produto:' + element.produto
                lista.querySelector('#Endereco').innerHTML = 'Endereco: ' + element.endereco
                lista.querySelector('#Data').innerHTML = 'Data: ' + dataFormatadata
                lista.querySelector('#Hora').innerHTML = 'Horário: ' + element.hora_pedido

                AllPedidos.appendChild(lista)
            })
            

        })
}

function pedidos() {
    pedidosExecucao()
    pedidosCaminho()
    listarAllPedidos()
}

pedidos()