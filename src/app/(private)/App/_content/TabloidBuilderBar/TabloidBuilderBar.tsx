import UploadData from "./_content/UploadData";


export default function TabloidSetupWizard() {

    return(
        <main className="flex flex-col gap-[10px] p-[10px] w-1/4 h-screen shadow-black shadow-lg text-center">
            <h1 className="m-0 text-red-300 text-4xl font-viga">É muito fácil, vamos lá!</h1>
            <p className="m-0">1º Passo</p>
            <UploadData/>
        </main>
    )
}
