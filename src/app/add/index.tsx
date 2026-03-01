import {View,Text, TouchableOpacity} from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/color"
import { router } from "expo-router"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { Button } from "@/components/Button"

export function AddPage(){
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
            <Categories />
            <View style={styles.form}>
                <Input placeholder="Link Name"/>
                <Input placeholder="Url"/>
                <Button title="Adicionar"/>
            </View>
        </View>

    )
}