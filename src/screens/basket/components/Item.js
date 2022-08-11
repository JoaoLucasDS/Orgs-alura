import react from "react"
import { Image, StyleSheet, View } from "react-native"

import NewText from "../../../components/NewText"

export default function Item({ item: { name, image} }) {
    return <View style={styles.item}>
        <Image source={image}  style={styles.images}/>
        <NewText style={styles.name}>{ name }</NewText>
    </View> 
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'Row',
        borderBottomWidth: 1.5,
        borderBottomColor: '#ECECEC',
        paddingVertical:16,
        marginHorizontal:16,
        alignItems:'center',
    },
    images:{
        width: 46,
        height:46,
        borderRadius:32,
        borderColor:'#464646'
    },
    name:{
        color:'#464646',
        marginLeft:16,
        fontSize:16,
        lineHeight:26
    }
})