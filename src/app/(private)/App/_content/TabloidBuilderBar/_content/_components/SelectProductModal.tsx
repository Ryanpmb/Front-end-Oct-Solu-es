import { ProductInterface } from "@/app/Interfaces/ProductInterface";
import { HistoryStageContext } from "@/components/Context Apis/HistoryStage";
import { StageContext } from "@/components/Context Apis/StageContext";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

export function SelectProductModal(
    {
        searchedProducts,
        setSearchedProducts,
        searchProductsWithNameAndEanFn,
        setHasProductVisibilityInIndex,
        index,
        toggleModalVisibilyWhenClose,
        setToggleModalVisibilyWhenClose
    }: {
        searchedProducts: ProductInterface[],
        setSearchedProducts: Dispatch<SetStateAction<ProductInterface[] | []>>,
        searchProductsWithNameAndEanFn: (value: string, index: number) => void,
        setHasProductVisibilityInIndex: Dispatch<SetStateAction<number | null>>,
        index: number,
        toggleModalVisibilyWhenClose: boolean,
        setToggleModalVisibilyWhenClose: Dispatch<SetStateAction<boolean>>
    }) {



    const [isLoadingProductsImages, setIsLoadingProductsImages] = useState<boolean>(true)
    const { setStage, stages } = useContext(StageContext)
    const { saveToHistory } = useContext(HistoryStageContext)
    const currentStage = stages.find(stage => stage.id === 1)

    const addProductSelectedInStage = (product: ProductInterface) => {
        if (currentStage) {
            const newProduct: ProductInterface = {
                id: Date.now(),
                name: product.name,
                img: product.img,
                x: 100,
                y: 100,
                width: 100,
                height: 100,
                price: 0.00,
                KonvaImg: new window.Image(),
            }

            newProduct.KonvaImg.src = product.img
            newProduct.KonvaImg.onload = () => {
                const updatedProductList = [...currentStage.products, newProduct]
                setStage((prevStages) => {
                    return prevStages.map((stage) => {
                        if (stage.id === currentStage?.id) {
                            return {
                                ...stage,
                                products: updatedProductList,
                            }
                        }
                        return stage;
                    });
                });

                saveToHistory(updatedProductList, currentStage.shapes, currentStage.texts, currentStage.copies)
            }






            setHasProductVisibilityInIndex(null);
            setToggleModalVisibilyWhenClose(false);
            setSearchedProducts([])
        }
    }


    return (

        <Dialog defaultOpen open={toggleModalVisibilyWhenClose} onOpenChange={() => { setToggleModalVisibilyWhenClose(false); setHasProductVisibilityInIndex(null) }}>

            <DialogContent className="w-full h-50% flex-grow-1  overflow-auto max-h-[50%]">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex justify-around">
                        Escolha um Produto!
                        <Input
                            className="w-[30%] border border-black"
                            type="text"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchProductsWithNameAndEanFn(e.target.value, index)}
                            placeholder={`Pesquise por um produto`}
                        />
                    </DialogTitle>
                </DialogHeader>

                <ul className="flex items-center justify-center flex-wrap gap-[10px]">
                    {searchedProducts.map((product) => (

                        <li onClick={() => addProductSelectedInStage(product)} className="flex items-center justify-center gap-[20px] flex-col w-[200px] h-[250px] cursor-pointer border border-black hover:bg-gray-100" key={product.id}>
                            <div>

                                {
                                    isLoadingProductsImages &&
                                    <div className="w-full h-full flex justify-center items-center">
                                        <div className="w-10 h-10 border border-red rounded-full animate-spin"></div>
                                    </div>
                                }
                                <img onLoad={() => setIsLoadingProductsImages(false)} className="w-[100px]" src={product.img} alt={`Image do produto ${product.name}`} />

                            </div>
                            <div>
                                <h1>{product.name}</h1>
                            </div>
                        </li>

                    ))}
                </ul>

            </DialogContent>

        </Dialog>
    )
} 