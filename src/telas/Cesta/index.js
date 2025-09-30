import react from "react";
import { FlatList, StyleSheet, View } from "react-native-web";
import { StyleSheet } from "react-native/types_generated/index";

export default function Cesta(){
    <FlatList>
        data={itens.lista}
        renderItem={item}
        keyExtractor={({nome})=> nome}
        ListHeaderComponet={()=>{
            return <>
                   </>
        }}
    </FlatList>
}


const estilos = StyleSheet.create({
    titulo:{
        color:"#464646",
        fontWeigth:"bold",
        marginTop:32,
        marginBottom:8,
        fontSize:20,
        lineHeight:32,
    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    }
})