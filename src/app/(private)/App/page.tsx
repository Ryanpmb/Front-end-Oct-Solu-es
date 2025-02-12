"use client"
import { BackgroundProvider } from "@/components/Context Apis/BackgroundContext";
import TabloidBuilderBar from "./_content/TabloidBuilderBar/TabloidBuilderBar";

// export const metadata: Metadata = {
//     title: "Cartaz Prático - App",
//     description: "Gerador de Cartazes de forma mais prática e eficiente",
// }

export default function App() {
    return (
        <>
            <BackgroundProvider>
                <TabloidBuilderBar />
            </BackgroundProvider>
        </>
    )
}