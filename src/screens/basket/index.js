import react from "react"
import { StyleSheet, View, FlatList} from "react-native"

import Header from "./components/Header"
import Details from "./components/Details"
import Item from "./components/Item"
import NewText from "../../components/NewText"

export default function Basket({header,details,itens}) {
    return (
        <>
            <FlatList 
                data={itens.list} 
                renderItem={Item} 
                keyExtrator={({name}) => name}
                ListHeaderComponent={()=>{
                    return <>
                        <Header {...header}/>

                        <View style={styles.body}>
                            <Details {...details}/>
                            <NewText style={styles.title}>{itens.title}</NewText>
                        </View>
                    </>
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    body:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title:{
        color:'#464646',
        fontWeight:'bold',
        marginTop:32,
        marginBotton:8,
        fontSize:20,
        lineHeight:32
    },
})