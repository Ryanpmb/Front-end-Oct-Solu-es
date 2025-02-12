import { ProductInterface } from "@/app/Interfaces/ProductInterface";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import React from "react";

export function SelectProductModal({ products }: { products: ProductInterface[] }) {

    return (

        <Dialog defaultOpen >

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        Selecione um Produto!
                    </DialogTitle>
                </DialogHeader>



                {products.map((product) => (
                    <div className="" key={product.id}>
                        {product.name}
                    </div>
                ))}


            </DialogContent>

        </Dialog>
    )
} 