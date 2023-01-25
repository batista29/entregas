const urlVwExec = 'http://localhost:3000/vwExecucao'
const urlVwPedidos = 'http://localhost:3000/vw_pedidos2'

const execucao = document.querySelector('.execucao')
const caminho = document.querySelector('.caminho')
const exe = document.querySelector('.exe')
const cam = document.querySelector('.cam')

function pedidosExecucao() {

    const options = { method: 'GET' }

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

                execucao.appendChild(lista)
            })
        })
}

function pedidosCaminho() {

    const options = { method: 'GET' }

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

function pedidos() {

    pedidosExecucao()
    pedidosCaminho()
}

pedidos()

