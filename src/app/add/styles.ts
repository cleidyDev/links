import { colors } from "@/styles/color"
import {StyleSheet} from "react-native"

export const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingTop:62,
    },
    Header:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:24,
        marginBottom:24
    },
    title:{
        color:colors.gray[200],
        fontSize:24,
        fontWeight:"600"
    },
    label:{
        color:colors.gray[400],
        paddingHorizontal:24,
        fontSize:14,
    },
    form:{
        padding:24,
        gap:16,
    }
})