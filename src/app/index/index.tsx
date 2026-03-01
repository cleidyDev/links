import {Image,View,TouchableOpacity,FlatList, Modal,Text} from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"
import {styles} from "./styles"
import { colors } from '@/styles/color'
import { Categories } from "@/components/categories"
import { Link } from '@/components/link'
import { Option } from '@/components/option'
import { router } from 'expo-router'
import { useState } from 'react'
import { categories } from '@/utils/categories'

export default function Index(){
    const [category,setCategory] = useState(categories[0].name)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity activeOpacity={0.8} onPress={()=>router.navigate("./src/app/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            <Categories onChange={setCategory} selected={category} />
            <FlatList
                style={styles.links}
                contentContainerStyle={styles.LinksContent}
                showsVerticalScrollIndicator={false}
                data={["1","2","3","4","5","6","7","8","9","10"]}
                keyExtractor={item => item}
                renderItem={()=>(
                    <Link 
                        name="Organify"
                        url="https://beta.v1.organify.studio/cleidy-fumancas-workspace/" 
                        onDetails={()=> console.log("Link Pressed")}
                    />
                )}
            /> 
            <Modal visible={false} transparent>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                Projectos
                            </Text>
                            <TouchableOpacity >
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                            Organify
                        </Text>
                        <Text style={styles.modalUrl}>
                            https://beta.v1.organify.studio/cleidy-fumancas-workspace/
                        </Text>
                        <View style={styles.modalFooter}>
                            <Option name="Exlcuir" icon='delete' variant='secondary'/>
                            <Option name='Abrir' icon="language"/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}