import { Metadata } from "next";
import TabloidSetupWizard from "./_content/TabloidBuilderBar/TabloidBuilderBar";

export const metadata : Metadata = {
    title: "Cartaz Prático - App",
    description: "Gerador de Cartazes de forma mais prática e eficiente",
}

export default function App() {
    return (
        <>
            <TabloidSetupWizard />
        </>
    )
}