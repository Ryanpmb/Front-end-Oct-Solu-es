import { ProductInterface } from "@/app/Interfaces/ProductInterface";
import { KonvaNewShapeInterface } from "@/app/Interfaces/ShapeInterface";
import { KonvaNewTextInterface } from "@/app/Interfaces/TextInterface";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CopyType = ProductInterface | KonvaNewShapeInterface | KonvaNewTextInterface;

interface StageInterface{
    id: number;
    productsQuantity: number;
    products: ProductInterface[];
    shapes: KonvaNewShapeInterface[];
    texts: KonvaNewTextInterface[];
    copies:CopyType[];
    background: HTMLImageElement | null;
}


type StageContextType = {
    stages: StageInterface[] | [];
    setStage: Dispatch<SetStateAction<StageInterface[]>>;
}



export const StageContext = createContext<StageContextType>({
    stages: [{id: 1, productsQuantity: 0,  products: [], shapes: [], texts: [], copies: [], background: null}],
    setStage: () => {},
})

export function StageProvider( {children} : {children: ReactNode} ){
    const [stages, setStage] = useState<StageInterface[]>([{id: 1, productsQuantity: 0, products: [], shapes: [], texts: [], copies: [], background: null}])

    return(
        <StageContext.Provider value={{stages, setStage}}>
            {children}
        </StageContext.Provider>    
    )

}