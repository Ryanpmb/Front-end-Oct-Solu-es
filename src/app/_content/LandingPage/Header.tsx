import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPageHeader() {

    return (
        <header className="w-full h-[100px] flex items-center justify-center  shadow-black shadow-lg">

            <ul className="w-full h-[100px] flex items-center justify-center ">

                <div className="flex items-center justify-center w-[25%] h-full">
                    <img className="w-[60%]" alt="logo" />
                </div>

                <div className="flex items-center justify-around w-[45%] h-full">
                    <div className="flex items-center justify-between w-[45%] h-full ">

                        <li>
                            <Link className="hover:text-red-500" href="">Sobre</Link>
                        </li>

                        <li>
                            <Link className="hover:text-red-500" href="">Planos</Link>
                        </li>

                        <li>
                            <Link className="hover:text-red-500" href={""}>Nós</Link>
                        </li>

                    </div>
                </div>


                <div className="flex items-center justify-center gap-[10px] w-[30%] h-full">
                    <Button className="bg-red-500">
                        <Link href={"/Login"}>
                            Login
                        </Link>

                    </Button>

                    <Button className="bg-red-500">
                        Cadastre-se
                    </Button>
                </div>


            </ul>

        </header>
    )
}