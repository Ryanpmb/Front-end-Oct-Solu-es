import { useUserData } from "@/services/User/User"

export default function Header() {
    const {data : user } = useUserData();
    return(
        <header className="h-[10%] w-full flex shadow-black shadow-2xl bg-red-700 relative">
            <ul className="w-full flex flex-row items-center justify-between bg-red-700">

                <li className="w-[20%]  flex items-center justify-center gap-[10px] text-white">
                    <img className="w-[50%]" src="/imgs/logo-branca.png" alt="" />
                </li>

                <li className="w-[20%] h-full  flex items-center justify-center gap-[10px] text-white">
                    {user?.name}
                </li>
            </ul>
        </header>
    )
}