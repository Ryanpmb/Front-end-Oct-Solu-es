import { Metadata } from "next";
import OnboardingMessage from "./_content/OnboardingMessage";

export const metadata: Metadata = {
    title: "Cartaz Prático - DashBoard",
    description: "Gerador de Cartazes de forma mais prática e eficiente",

}

export default function DashBoard() {
    return (
        <main className="w-full h-[90%] flex bg-red-600">

            <section className="w-1/2 flex items-center justify-center flex-col gap-[20px]">
                <OnboardingMessage />
            </section>

            <section className="w-1/2 flex items-center justify center ">
                <img src="/Slider/arte1.png" alt="" />
            </section>

        </main>
    )
} 