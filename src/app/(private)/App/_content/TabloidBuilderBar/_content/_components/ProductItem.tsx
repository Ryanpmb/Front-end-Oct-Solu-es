import { StageContext } from "@/components/Context Apis/StageContext"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useContext, useEffect, useState } from "react"

export function ProductItem({
    productId,
    name,
    price,
    img,
    priceBoxtype
}: {
    productId: number,
    name: string,
    price?: number,
    img: string,
    priceBoxtype: string | null | undefined
}) {

    const { setStage, stages } = useContext(StageContext)
    const [isLoadingProductImage, setLoadingProductImage] = useState<boolean>(true)

    const changeProductName = (newProductName: string) => {
        if (newProductName) {
            setStage((prevStage) => {
                return prevStage.map((stage) => {
                    if (stage.id === 1) {
                        return {
                            ...stage,
                            products: stage.products.map((product) => {
                                return product.id === productId ? { ...product, name: newProductName } : product;
                            })
                        }
                    }

                    return stage
                })
            })
        }
    }

    const changeProductPrice = (newProductPrice: number) => {
        if (newProductPrice) {
            setStage((prevStage) => {
                return prevStage.map((stage) => {
                    if (stage.id === 1) {
                        return {
                            ...stage,
                            products: stage.products.map((product) => {
                                return product.id === productId ? { ...product, price: newProductPrice } : product;
                            })
                        }
                    }
                    return stage
                })
            })
        }
    }
    const changeSecondProductPrice = (newSecondProductPrice: number) => {
        if (newSecondProductPrice) {
            setStage((prevStage) => {
                return prevStage.map((stage) => {
                    if (stage.id === 1) {
                        return {
                            ...stage,
                            products: stage.products.map((product) => {
                                return product.id === productId ? { ...product, secondePrice: newSecondProductPrice } : product;
                            })
                        }
                    }
                    return stage
                })
            })
        }
    }

    const changePriceBoxType = (priceBoxtype: string) => {

        if (priceBoxtype) {
            setStage((prevStage) => {
                return prevStage.map((stage) => {
                    if (stage.id === 1) {
                        return {
                            ...stage,
                            products: stage.products.map((product) => {
                                return product.id === productId ? { ...product, priceBoxtype: priceBoxtype } : product;
                            })
                        }
                    }

                    return stage
                })
            })

        }
    }

    return (
        <div className="flex w-full justify-evenly items-center ">
            <div>
                {
                    isLoadingProductImage && <div className="w-10 h-10 border border-red rounded-full animate-spin" />
                }
                <img onLoad={() => setLoadingProductImage(false)} className="w-[100px]" src={img} alt="" /> 
            </div>
            <div className="w-[70%] flex items-center gap-[10px]">
                <div >
                    <Input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeProductName(e.target.value)}
                        placeholder="Digite o nome do produto!"
                        defaultValue={name}
                        className="w-full"
                    />

                    <div className="flex gap-[5px] w-full">

                        {
                            (priceBoxtype === 'normal' || priceBoxtype === undefined) &&  (
                                <Input
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeProductPrice(parseFloat(e.target.value))}
                                    placeholder="R$00,00"
                                    className="w-[60%]"
                                />
                            )
                        }

                        {
                            (priceBoxtype === "de/por" || priceBoxtype === "Club") && (
                                <>
                                    <Input
                                        type="number"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeProductPrice(parseFloat(e.target.value))}
                                        placeholder="R$00,00"
                                        className="w-[40%]"
                                    />
                                    <Input
                                        placeholder="R$00,00"
                                        className="w-[40%]"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeSecondProductPrice(parseFloat(e.target.value))}
                                    />
                                </>
                            )
                        }
                    </div>
                </div>

                <div>
                    <RadioGroup defaultValue="normal" onValueChange={(value) => { changePriceBoxType(value) }} className="flex flex-col items-start justify-center">

                        <div className="flex items-center justify-center gap-[5px] ">
                            <RadioGroupItem value="normal" id="normal-option" />
                            <Label htmlFor="normal-option">
                                Normal
                            </Label>
                        </div>
                        <div className="flex items-center justify-center gap-[5px] ">
                            <RadioGroupItem value="Club" id="club-option" />
                            <Label htmlFor="club-option">
                                Clube
                            </Label>
                        </div>
                        <div className="flex items-center justify-center gap-[5px] ">
                            <RadioGroupItem value="de/por" id="de/por-option" />
                            <Label htmlFor="de/por-option">
                                De/Por
                            </Label>
                        </div>

                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}