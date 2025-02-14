import { StageContext } from "@/components/Context Apis/StageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Trash } from "lucide-react"
import { useContext, useEffect, useRef, useState } from "react"
import { SelectProductModal } from "./_components/SelectProductModal"
import { FindProducts } from "@/services/Products"
import { ProductInterface } from "@/app/Interfaces/ProductInterface"
import { ProductItem } from "./_components/ProductItem"


export function ProductList() {

    const { setStage, stages } = useContext(StageContext)

    const [hasProductsModalVisibilityInIndex, setHasProductVisibilityInIndex] = useState<number | null>(null)
    const [toggleModalVisibilyWhenClose, setToggleModalVisibilyWhenClose] = useState(false)

    const [searchedProducts, setSearchedProducts] = useState<ProductInterface[] | []>([])
    const debounceTimeout = useRef<Timeout | null>(null)

    const productList = stages.find((stage) => stage.id === 1)?.products


    const searchProductsWithNameAndEan = async (productName: string, index: number) => {
        if (productName) {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current)
            }
            debounceTimeout.current = setTimeout(async () => {

                try {
                    const response = await FindProducts(productName)
                    setSearchedProducts(response)
                } catch (error) {

                    console.error(error)

                }

            }, 500)
        }
    }

    const removeProduct = (productId: number | undefined) => {
        if (productId) {
            setStage((prevStages) => {
                return prevStages.map((stage) => {
                    if (stage.id === 1) {
                        return {
                            ...stage,
                            products: stage.products.filter((product) => product.id !== productId),
                        }
                    }
                    return stage
                })
            })
        }
    }

    const addProductBlock = () => {
        setStage((prevStages) => {
            return prevStages.map((stage) => {
                if (stage.id == 1) {
                    return {
                        ...stage,
                        productsQuantity: stage.productsQuantity + 1,
                    }
                }

                return stage
            })
        })
    }

    return (
        <section className="gap-[4px] w-full flex-grow-0  overflow-auto max-h-[500px] ">
            {
                Array.from({ length: stages.find((stage) => stage.id === 1)?.productsQuantity || 0 }, (_, index) => (

                    <div className="flex flex-col items-center justify-center w-full h-[200px] rounded-lg border border-black mt-2 mb-2 gap-[20px]" key={index} id={`product-${index}`}>

                        <div className="w-full flex items-center justify-center gap-[5px]" >
                            <Button onClick={() => { setHasProductVisibilityInIndex(index); setToggleModalVisibilyWhenClose(true) }}>
                                Adicionar Produto
                                <Search />
                            </Button>
                            <Button onClick={() => removeProduct(productList?.[index].id)}>
                                <Trash />
                            </Button>

                            {
                                hasProductsModalVisibilityInIndex === index &&
                                <SelectProductModal
                                    setSearchedProducts={setSearchedProducts}
                                    searchedProducts={searchedProducts}
                                    searchProductsWithNameAndEanFn={searchProductsWithNameAndEan}
                                    setHasProductVisibilityInIndex={setHasProductVisibilityInIndex}
                                    index={index}
                                    toggleModalVisibilyWhenClose={toggleModalVisibilyWhenClose}
                                    setToggleModalVisibilyWhenClose={setToggleModalVisibilyWhenClose}
                                />
                            }





                        </div>

                        {
                            productList?.[index] && (
                                <ProductItem
                                    productId={productList[index].id}
                                    name={productList[index].name}
                                    img={productList[index].img}
                                    priceBoxtype={productList[index].priceBoxtype}
                                />
                            )
                        }

                    </div>


                ))
            }

            {stages.find((stage) => stage.id === 1)?.productsQuantity !== 0 && (

                <Button onClick={() => addProductBlock()} >
                    Adicionar Produto
                </Button>

            )}
        </section>
    )
}