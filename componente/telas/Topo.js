import react from "react";
import { Image,StyleSheet,Dimensions } from "react-native-web";

import Texto from "./Texto";
import { StyleSheet } from "react-native/types_generated/index";

export default function Topo(titulo){
    return <>
    <Texto style={estilos.titulo}>  {titulo}   </Texto>
    </>
}

cons estilos = StyleSheet.create({
    topo;{
        width: "100%",
        height: 578 / 786 * width,
        position: "absolute",
        textAling:"center",
        fontSize: 16,
        lineHeight: 26,
        color:'white',
        fontWeight: "bold",
        padding:16,
    }
});