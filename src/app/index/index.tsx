import {Image,View,TouchableOpacity,FlatList} from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"
import {styles} from "./styles"
import { colors } from '@/styles/color'
import { Categories } from "@/components/categories"
import { Link } from '@/components/link'

export default function Index(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity activeOpacity={0.8}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            <Categories/>
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
        </View>
    )
}