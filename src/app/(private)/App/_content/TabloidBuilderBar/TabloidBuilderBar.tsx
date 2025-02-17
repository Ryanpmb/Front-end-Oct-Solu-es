import LayoutOptions from "./_content/LayoutOptions";
import { ProductList } from "./_content/ProductList";
import ProductOptions from "./_content/ProductOptions";
import UploadData from "./_content/UploadData";


export default function TabloidBuilderBar() {
    return (
        <main className="flex flex-col gap-[10px] p-[10px] w-1/4 h-screen shadow-black shadow-lg text-center">
            <h1 className="m-0 text-red-300 text-4xl font-viga">É muito fácil, vamos lá!</h1>
            <p className="m-0">1º Passo</p>
            <UploadData />
            <p>2º Passo</p>
            <LayoutOptions />
            <p>3º Passo</p>
            <ProductOptions/>
            <ProductList/>
        </main>
    )
}
