import react from "react"
import { Image, View, StyleSheet } from "react-native"

import NewText from "../../../components/NewText"
import Button from "../../../components/Button"

export default function Details({title, logo, name, description, price, button}) {
    return(
        <>
            <NewText style={styles.title}>
                {title}
            </NewText>
            <View style={styles.body}>
                <Image source={logo} style={styles.logo}/>
                <NewText style={styles.Name}>
                    {name}
                </NewText>
            </View>
            <NewText style={styles.description}>
                {description}
            </NewText>
            <NewText style={styles.price}>
                {price}
            </NewText>
            <Button text={button}/>
        </>
    )

}

const styles = StyleSheet.create({
    title:{
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    logo:{
        width: 32,
        height:32,
    },
    body:{
        flexDirection: 'row',
        paddingVertical:12,
        alignItems: 'center',
    },
    Name:{
        color: '#676767',
        fontSize:16,
        lineHeight:16,

        marginLeft: 12,
    },
    description:{
        color: '#a3a3a3',
        fontSize:16,
        lineHeight:26,
    },
    price:{
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize:26,
        lineHeight: 42,
        marginTop: 8,
    },
})