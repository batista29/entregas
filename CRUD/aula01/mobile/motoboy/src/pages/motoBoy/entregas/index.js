import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main() {
    const [posts, setPosts] = useState([])
    const [lida, setLida] = useState([]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("id");
            setLida(JSON.parse(value))
        } catch (err) {
            console.log(err);
        }
    }

    if (lida.length == 0) getData();

    useEffect(() => {
        fetch(`http://10.87.207.14:3000/vw_pedidos/${lida}`)
            .then(res => { return res.json() })
            .then(data => {
                setPosts(data)
            })
    })

    const finalizarEntrega = (id_pedido) => {
        let dados = {
            id_pedido: id_pedido,
            hora_fim: null
        }
        fetch('http://10.87.207.14:3000/pedidos/mobile/motoboy'
            , {
                "method": "PUT",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
            .then(response => {
                if (response.status === 200) {
                    console.log("Enviado");
                } else {
                    console.log(response.status);
                }
            })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    posts.map((post, index) => {
                        var date = new Date(post.data)
                        var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                        return (
                            <View key={index} style={styles.publi}>
                                <Text style={styles.texto}>Id: {post.id_pedido}</Text>
                                <Text style={styles.texto}>Cliente: {post.cliente}</Text>
                                <Text style={styles.texto}>Produto: {post.produto}</Text>
                                <Text style={styles.texto}>Endereço: {post.endereco}</Text>
                                <Text style={styles.texto}>Data: {dataFormatadata}, Entrega: {post.hora_entrega}</Text>

                                <TouchableOpacity onPress={() =>{
                                    finalizarEntrega(post.id_pedido)
                                }}>
                                    <Text style={styles.texto2}>Finalizar entrega</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a9a9a9',
        alignItems: 'center',
    },
    texto: {
        marginBottom: 5,
        fontSize: 19,
        color: 'white',
        fontFamily: 'Arial',
    },
    texto2: {
        marginBottom: 5,
        fontSize: 19,
        color: '#90ee90',
        fontFamily: 'Arial',
    },
    publi: {
        height: '230px',
        width: '370px',
        border: '1px solid white',
        marginTop: '30px',
        backgroundColor: 'rgb(7, 2, 0)',
        textAlign: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '50px',
        width: '50px'
    },
    botao: {
        height: '40px',
        width: '40px',
        marginTop: '2vh',
        border: '1px solid white',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#EFEFEF",
        fontSize: '35px'
    },
})