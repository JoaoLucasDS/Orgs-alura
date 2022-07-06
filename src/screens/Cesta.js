import react from "react"
import { Image, StyleSheet, Text, Dimensions, View } from "react-native"

import NewText from "../components/NewText"

import header from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta() {
    return (
        <>
            <Image source={header} style={styles.header}/>
            <NewText style={styles.headerTitle}>Detalhe da cesta</NewText>

            <View style={styles.body}>
                <NewText style={styles.title}>
                    Cesta de Verduras
                </NewText>
                <View style={styles.farm}>
                    <Image source={logo} style={styles.farmLogo}/>
                    <NewText style={styles.farmName}>
                        Jenny Jack Farm
                    </NewText>
                </View>
                <NewText style={styles.description}>
                    Uma cesta com produtos selecionados
                    cuidadozamente da fazenda direto para sua
                    cozinha.
                </NewText>
                <NewText style={styles.price}>
                    R$ 40,00
                </NewText>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: 578 / 768 * width,
    },
    body:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    headerTitle:{
        marginTop:20,
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    title:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    farmLogo:{
        width: 32,
        height:32,
    },
    farm:{
        flexDirection: "row",
        paddingVertical:12,
        alignItems: 'center',
    },
    farmName:{
        color: "#676767",
        fontSize:16,
        lineHeight:16,

        marginLeft: 12,
    },
    description:{
        color: "#a3a3a3",
        fontSize:16,
        lineHeight:26,
    },
    price:{
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize:26,
        lineHeight: 42,
        marginTop: 8,
    },
    
})