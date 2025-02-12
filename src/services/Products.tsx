import { useQuery } from "@tanstack/react-query"
import { api } from "./api"
import { ProductInterface } from "@/app/Interfaces/ProductInterface"


export const FindProducts = async (productName: string)=>{
    try {
        const products = await api.post("/getProduct", {productName})
        return products.data
    } catch (error) {
        console.error(error)
    }
} 