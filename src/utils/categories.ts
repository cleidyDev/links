import { type MaterialIcons } from "@expo/vector-icons"

type Category = {
    id:string,
    name:string,
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories : Category[]= [
    {id:"1",name:"Projectos",icon:"code"},
    {id:"2",name:"Docs",icon:"folder"},
    {id:"3",name:"Sites",icon:"language"},
    {id:"4",name:"Educacao",icon:"book"},
    {id:"5",name:"Artigo",icon:"newspaper"},
    {id:"6",name:"Cloud",icon:"cloud-download"},
]