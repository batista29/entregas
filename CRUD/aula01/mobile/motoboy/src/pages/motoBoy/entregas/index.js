import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

export default function Main() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://192.168.1.7:3000/vw_pedidos2")
            .then(res => { return res.json() })
            .then(data => {
                setPosts(data)
            })
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    posts.map((post, index) => {
                        console.log(post)
                        var date = new Date(post.data)
                        var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                        return (
                            <View key={index} style={styles.publi}>
                                <Text style={styles.texto}>Id: {post.id_pedido}</Text>
                                <Text style={styles.texto}>Cliente: {post.cliente}</Text>
                                <Text style={styles.texto}>Produto: {post.produto}</Text>
                                <Text style={styles.texto}>Endereço: {post.endereco}</Text>
                                <Text style={styles.texto}>Data: {dataFormatadata}</Text>
                                <Text style={styles.texto}>Horario: {post.hora_entrega}</Text>
                                {/* <TouchableOpacity onPress={() =>{
                                    enviarPedido(post.id_pedido)
                                }}>
                                    <Text>Oi</Text>
                                </TouchableOpacity> */}
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
        backgroundColor: 'rgba(191, 233, 246, 0.802)',
        alignItems: 'center',
    },
    texto: {
        marginBottom: 5,
        fontSize: 19,
        color: 'white',
        fontFamily: 'Arial',
    },
    publi: {
        height: '230px',
        width: '370px',
        border: '1px solid white',
        marginTop: '30px',
        backgroundColor: 'rgb(7, 2, 30)',
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