import { colors } from "@/styles/color"
import {StyleSheet} from "react-native"


export const styles = StyleSheet.create({
    container:{
        height:52,
        width :"100%",
        color:colors.green[300],
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
    },
    title:{
        color:colors.green[900],
        fontSize:16,
        fontWeight:"600",
    }
})