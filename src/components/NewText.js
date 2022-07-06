import { Text, StyleSheet } from "react-native"

export default function NewText( {children, style} ) {
    let model = styles.regular

    if (style?.fontWeight === 'bold'){
        model = styles.bold
    }

    return <Text style={[style, model]}>{ children }</Text>
}

const styles = StyleSheet.create({
    regular: {
        fontFamily: "MontserratRegular",
    },
    bold:{
        fontFamily: "MontserratBold",
        fontWeight:"regular"
    }
})