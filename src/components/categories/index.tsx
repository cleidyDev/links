import { categories } from "@/utils/categories"
import {FlatList} from "react-native"
import { Category } from "@/components/category"
import { styles } from "./styles"

type Props = {
    selected:string,
    onChange:(category:string)=>void
}
export function Categories({selected,onChange}:Props){
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
                    name={item.name}
                    icon={item.icon}
                    isSelected={item.name === selected}
                    onPress={()=>onChange(item.name)}
                />
            }
        />
    )
}