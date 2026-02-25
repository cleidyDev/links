import { colors } from "@/styles/color"
import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    header:{
        paddingHorizontal:24,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:32,
    },
    container:{
        paddingTop:62,
        flex:1
    },
    logo:{
        height:32,
        width: 38,
    },
    links:{
        borderTopWidth:1,
        borderTopColor:colors.gray[600],
    },
    LinksContent:{
        gap:20,
        padding:24,
        paddingBottom:100,
    }
})