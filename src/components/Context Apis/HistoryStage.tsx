import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { ProductInterface } from "@/app/Interfaces/ProductInterface";
import { KonvaNewShapeInterface } from "@/app/Interfaces/ShapeInterface";
import { KonvaNewTextInterface } from "@/app/Interfaces/TextInterface";
import Konva from "konva";

interface HistoryInterface {
    products: ProductInterface[] & [], shapes: KonvaNewShapeInterface[] & [], texts: KonvaNewTextInterface[] & [], copies: Konva.NodeConfig[] | [];
}
interface HistoryStageContextProps {
    history: HistoryInterface[] | [];
    setHistory: Dispatch<SetStateAction<HistoryInterface[] | []>>;
    saveToHistory: (products: ProductInterface[], shapes: KonvaNewShapeInterface[], texts: KonvaNewTextInterface[], copies: Konva.NodeConfig[]) => void;
}

export const HistoryStageContext = createContext<HistoryStageContextProps>({
    history: [],
    setHistory: () => { },
    saveToHistory: (products: ProductInterface[], shapes: KonvaNewShapeInterface[], texts: KonvaNewTextInterface[], copies: Konva.NodeConfig[]) => { }
})

export const HistoryStageProvider = ({ children }: { children: ReactNode }) => {
    const [history, setHistory] = useState<HistoryInterface[] | []>([])
    const saveToHistory = (products: ProductInterface[], shapes: KonvaNewShapeInterface[], texts: KonvaNewTextInterface[], copies: Konva.NodeConfig[]) => {
        const newHistoryEntry = {
            products: JSON.parse(JSON.stringify(products)),
            shapes: JSON.parse(JSON.stringify(shapes)),
            texts: JSON.parse(JSON.stringify(texts)),
            copies: JSON.parse(JSON.stringify(copies))
        }
        const updatedHistory = [...history.slice(0, history.length + 1), newHistoryEntry]
        setHistory(updatedHistory)
        localStorage.setItem("history", JSON.stringify(updatedHistory))
       
    }

    return (
        <HistoryStageContext.Provider value={{ history, setHistory, saveToHistory }}>
            {children}
        </HistoryStageContext.Provider>
    )
}