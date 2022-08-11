import react from "react"
import { Image, Dimensions, StyleSheet } from "react-native"

import NewText from "../../../components/NewText"

import topo from "../../../../assets/topo.png"

const width = Dimensions.get('screen').width

export default function Header({ title }) {
    return(
        <>
            <Image source={topo} style={styles.header}/>
            <NewText style={styles.title}>{title}</NewText>
        </>
    )

}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: 578 / 768 * width,
    },
    title:{
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
})