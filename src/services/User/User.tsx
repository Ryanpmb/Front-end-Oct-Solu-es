"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../api"
import { AxiosPromise } from "axios"

const userId = localStorage.getItem("userId")

const GetUser = async () => {

    const userData = await api.get(`/GetUser/${userId}`)

    return userData?.data

}

const useUserData = () => {
    const response = useQuery({
        queryKey: ["user"],
        queryFn: GetUser,
        refetchOnWindowFocus: true,
    })

    return response
}

const getLogoClubImage = async () => {
    const logo = await api.get(`ClubImage/${userId}`)
    return logo?.data
}

const LogoData = () =>{
    const response = useQuery({
        queryKey:["logo"],
        queryFn: getLogoClubImage,
        staleTime: 1000,
        
    })

    return response
}

const UpdateUserInformations = async  ({ addresses, LogoClubImage} : {addresses: string, LogoClubImage: string | null }) => {
    try {
        const response = await api.patch("/updateUserInformations",{
            Adress: addresses,
            Logo: LogoClubImage,
            id: userId
        })
        return response
    } catch (error) {
        throw error;
    }
}



export {
    useUserData,
    LogoData,
    UpdateUserInformations
}