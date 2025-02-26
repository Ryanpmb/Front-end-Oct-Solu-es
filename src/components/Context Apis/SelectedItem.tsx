import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import Konva from 'konva';
import { string } from "yup";

interface SelectedItemContextType {
    selectedItem: Konva.NodeConfig | Konva.NodeConfig[] | null,
    setSelectedItem: Dispatch<SetStateAction<Konva.NodeConfig | Konva.NodeConfig[] | null>>;
}

export const SelectedItemContext = createContext<SelectedItemContextType>({
    selectedItem: null,
    setSelectedItem: () => {},
});


export function SelectedItemProvider({ children }: { children: ReactNode }) {
    const [selectedItem, setSelectedItem] = useState<Konva.NodeConfig | Konva.NodeConfig[] | null>(null)
    return (
        <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </SelectedItemContext.Provider>
    )
}