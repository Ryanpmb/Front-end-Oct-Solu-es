"use client"

import { Button } from "@/components/ui/button"
import { useUserData } from "@/services/User/User"
import { Metadata } from "next"
import Link from "next/link"



export default function OnboardingMessage() {
    const { data: user } = useUserData()
    return (
        <>
            <article className="w-[80%]">
                <h1 className="text-6xl text-white m-0 text-start ">Seja bem vindo {user?.name}</h1>
                <h1 className="text-6xl text-white m-0 text-start ">Você está a um</h1>
                <h1 className="text-6xl text-white m-0 text-start ">Passo de começar</h1>
                <p className="text-start text-white m-0 ">Faça seus tablóides de maniera rápida e fácil</p>
            </article>

            <article className="w-[80%]">
                <Button className="border border-white hover:bg-white hover:text-red-700 w-[30%]  rounded-2xl">
                    <Link href={"/App"} >Começar</Link>
                </Button>
            </article>
        </>


    )
}