import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type TabloidBackgroundContextType = {
    tabloidBackground: HTMLImageElement | null;
    setTabloidBackground: Dispatch<SetStateAction<HTMLImageElement| null>>;
}

export const TabloidBackgroundContext = createContext<TabloidBackgroundContextType>({
    tabloidBackground: null,
    setTabloidBackground: () => {}
})

export function BackgroundProvider( {children} : {children: ReactNode} ){
    const [tabloidBackground, setTabloidBackground] = useState<HTMLImageElement | null >(null)

    return(
        <TabloidBackgroundContext.Provider value={{tabloidBackground, setTabloidBackground}}>
            {children}
        </TabloidBackgroundContext.Provider>
    )
}
