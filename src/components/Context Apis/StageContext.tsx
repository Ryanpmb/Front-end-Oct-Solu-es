import { ProductInterface } from "@/app/Interfaces/ProductInterface";
import { KonvaNewShapeInterface } from "@/app/Interfaces/ShapeInterface";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface StageInterface{
    id: number;
    productsQuantity: number;
    products: ProductInterface[];
    shapes: KonvaNewShapeInterface[];
    texts: {}[];
    copies: {}[];
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