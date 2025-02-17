import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import Konva from 'konva';

interface SelectedItemContextType {
    selectedItem: Konva.Node | Konva.Node[] | null,
    setSelectedItem: Dispatch<SetStateAction<Konva.Node | Konva.Node[] | null>>;
}

export const SelectedItemContext = createContext<SelectedItemContextType>({
    selectedItem: null,
    setSelectedItem: () => { },
});


export function SelectedItemProvider({ children }: { children: ReactNode }) {
    const [selectedItem, setSelectedItem] = useState<Konva.Node | Konva.Node[] | null>(null)
    return (
        <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </SelectedItemContext.Provider>
    )
}