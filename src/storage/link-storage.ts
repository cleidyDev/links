import type { LinkStorage } from "@/types/type"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Constants from "expo-constants"

const LINKS_STORAGE_KEY = Constants.expoConfig?.extra?.linksStorageKey || "links-storage"



async function get():Promise<LinkStorage[]>{
    const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
    const response = storage ? JSON.parse(storage) : []

    return response
}

async function save(newLink:LinkStorage) {
    try{
        const storage = await get()
        const update = JSON.stringify( [...storage,newLink])

        await AsyncStorage.setItem(LINKS_STORAGE_KEY,update)
    }catch(error){
        throw error
    }
}

async function remove(id:string) {
    try{
        const storage = await get()
        const update = storage.filter((link)=>link.id !== id)
        await AsyncStorage.setItem(LINKS_STORAGE_KEY,JSON.stringify(update))
    }catch(error){
        throw error
    }
}


export const linkStorage = { get,save,remove}