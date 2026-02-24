import { categories } from "@/utils/categories"
import {FlatList} from "react-native"
import { Category } from "@/components/category"
import { styles } from "./styles"

export function Categories(){
    return(
        <FlatList
            data={categories}
            keyExtractor={(item)=>item.id}
            horizontal
            style={styles.conteiner}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>
                <Category
                    name={item.name} icon={item.icon} isSelected={false}
                />
            }
        />
    )
}