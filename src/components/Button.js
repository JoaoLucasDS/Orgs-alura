import { StyleSheet,TouchableOpacity } from "react-native"
import NewText from "./NewText"

export default function Button( {text} ) {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <NewText style={styles.buttonText}>
                        {text}
                    </NewText>
                </TouchableOpacity>
        </>
    )
    
}

const styles = StyleSheet.create({
    button:{
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    buttonText:{
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }
})