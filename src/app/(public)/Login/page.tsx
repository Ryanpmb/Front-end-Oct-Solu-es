import LoginForm from "./_components/LoginForm";

export default function Login() {
    return (
        <main className="w-full h-screen flex">
            <section className="bg-red-600 relative w-full h-full flex justify-start items-center">

                <article className="w-[75%] flex flex-col items-center  justify-center gap-[30px] ">

                    <div className="w-[90%] flex items-start justify-left">
                        <img alt="" />
                    </div>

                    <div className="w-[90%] p-[20px] text-6xl flex flex-col items-start text-white shadow-black shadow-xl">
                        <h1>Navegue Nesta</h1>
                        <h1>experiência incrível</h1>
                    </div>

                </article>
                <LoginForm />
            </section>
        </main>
    )
}