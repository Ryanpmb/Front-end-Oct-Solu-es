"use client"
import { BackgroundProvider } from "@/components/Context Apis/BackgroundContext";
import TabloidBuilderBar from "./_content/TabloidBuilderBar/TabloidBuilderBar";
import { StageProvider } from "@/components/Context Apis/StageContext";

import CanvasEditor from "./_content/CanvasEditor/CanvasEditor";
import { SelectedItemProvider } from "@/components/Context Apis/SelectedItem";


// export const metadata: Metadata = {
//     title: "Cartaz Prático - App",
//     description: "Gerador de Cartazes de forma mais prática e eficiente",
// }

export default function App() {
    return (
        <main className="flex w-full">
            <StageProvider>
                <SelectedItemProvider>
                    <TabloidBuilderBar />
                    <CanvasEditor />
                </SelectedItemProvider>
            </StageProvider>
        </main>

    )
}