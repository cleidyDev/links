import {View,Text, TouchableOpacity, Alert} from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/color"
import { router } from "expo-router"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { Button } from "@/components/Button"
import { useState } from "react"

export function AddPage(){
    const [name,setName] = useState("")
    const [url, setUrl] = useState("")
    const [category,setCategory] = useState("")

    function handleAdd(){
        if(!category){
            return Alert.alert("Categoria","Selecione a categoria")
        }

        if(!name.trim()){
            return Alert.alert("Name","Infome o nome do link")
        }

        if(!url.trim()){
            return Alert.alert("URL", "Informe a URL")
        }

        
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={()=>router.back()}>
                    <MaterialIcons name = "arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>
                Selecione uma categoria
            </Text>
            <Categories onChange={setCategory} selected={category} />
            <View style={styles.form}>
                <Input placeholder="Link Name" onChangeText={setName} autoComplete="name"/>
                <Input placeholder="URL" onChangeText={setUrl} autoComplete="url"/>
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>

    )
}