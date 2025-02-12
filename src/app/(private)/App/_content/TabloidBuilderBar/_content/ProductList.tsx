import { StageContext } from "@/components/Context Apis/StageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { SelectProductModal } from "./_components/SelectProductModal"
import { FindProducts } from "@/services/Products"
import { ProductInterface } from "@/app/Interfaces/ProductInterface"


export function ProductList() {

    const { setStage, stages } = useContext(StageContext)
    const [hasProductsModalVisibility, setHasProductVisibility] = useState(false)
    const [products, setProducts] = useState<ProductInterface[] | [] >([])

    const searchProductsWithNameAndEan = async (productName: string, index: number) => {

        if (productName) {
            setHasProductVisibility(true)
            try {
                const response = await FindProducts(productName)
                setProducts(response)
            } catch (error) {
                console.error(error)
            }
        }
    }

    useEffect(()=>{
        console.log(products)
    }, [products])

    return (
        <section className="gap-[4px] w-full flex-grow-0  overflow-auto max-h-[500px] ">
            {
                Array.from({ length: stages.find((stage) => stage.id === 1)?.productsQuantity || 0 }, (_, index) => (

                    <div className="flex flex-col items-center justify-center w-full h-[200px] rounded-lg border border-black mt-2 mb-2" key={index} id={`product-${index}`}>

                        <div className="w-full flex items-center justify-center gap-[5px]" >
                            <Input className="w-[70%] border border-black" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchProductsWithNameAndEan(e.target.value, index)} />
                            <Button>
                                <Trash />
                            </Button>

                            {
                                hasProductsModalVisibility && <SelectProductModal products={ products } />
                            }

                        </div>

                    </div>


                ))
            }

            {stages.find((stage) => stage.id === 1)?.productsQuantity !== 0 && (

                <Button>
                    Adicionar Produto
                </Button>

            )}
        </section>
    )
}