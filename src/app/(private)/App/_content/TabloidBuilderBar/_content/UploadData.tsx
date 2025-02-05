"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { LogoData, useUserData } from "@/services/User/User"
import { DialogTitle } from "@radix-ui/react-dialog"
import axios from "axios"
import { Form, Formik } from "formik"
import { useRef, useState } from "react"
import CropperLogo from "./_components/CropperLogo"
import { ReactCropperElement } from "react-cropper"

export default function UploadData() {

    const { data: user } = useUserData()
    const { data: logoClub } = LogoData()

    const [contentAdress, setContentAdress] = useState(0);
    const informations = user ? JSON.parse(user.Adress) : []

    const [isLoadingLogoImage, setIsLoadingLogoImage] = useState<boolean>(false)
    const [logoClubImageWithoutBackground, setLogoClubImageWithoutBackground] = useState<string | null>(null)
    const [logoClubCroppedImage, setLogoClubCropperImage] = useState<Base64URLString | null>(null)
    const cropperRef = useRef<ReactCropperElement | null>(null)

    const adressGroup: Record<string, string> = Array.from({ length: contentAdress }).reduce(
        (acc: Record<string, string>, _, index) => ({
            ...acc,
            [`Adress-${index}`]: informations[index]?.Adress ?? "",
            [`Telefone-${index}`]: informations[index]?.Telefone ?? "",
            [`Whatsapp-${index}`]: informations[index]?.Whatsapp ?? "",
            [`horaFuncionamento-${index}`]: informations[index]?.horaFuncionamento ?? ""
        }), {}
    )

    const removeBackGroundImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return;

        setIsLoadingLogoImage(true)

        const apiKey = 'xuKpSfvXweRcPq2b8UyAFfLU';
        const formData = new FormData();
        formData.append("image_file", file);
        formData.append("size", "auto");


        try {
            const { data: imageWithoutBackground } = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
                headers: {
                    'X-Api-Key': apiKey,
                },
                responseType: 'blob',
            });

            const ImageObjectUrl = URL.createObjectURL(imageWithoutBackground)
            setLogoClubImageWithoutBackground(ImageObjectUrl)

        } catch (error) {

            throw error;

        } finally {
            setIsLoadingLogoImage(false)
        }

    }

    const handleSaveAdressInformations = (values: any) => {

        const addresses = [];

        for (let i = 0; i < contentAdress; i++) {
            addresses.push({
                Adress: values[`Adress-${i}`],
                Telefone: values[`Telefone-${i}`],
                WhatsApp: values[`Whatsapp-${i}`],
                horaFuncionamento: values[`horaFuncionamento-${i}`]
            })
        }
    }

    

    return (

        <section>
            <Dialog>
                <DialogTrigger asChild>

                    <Button className="rounded-3xl hover:bg-red-700 w-[80%]">
                        Carregue aqui os dados principais da sua loja
                    </Button>

                </DialogTrigger>

                <DialogContent>

                    <DialogHeader>
                        <DialogTitle className="text-gray-500 text-4xl">
                            Campos não Obrigatórios
                        </DialogTitle>
                    </DialogHeader>

                    <Formik
                        initialValues={{
                            adressGroup
                        }}

                        onSubmit={handleSaveAdressInformations}
                    >
                        <Form>
                            <div className="flex items-center justify-start gap-[30px] w-full">

                                <div className="flex flex-col items-start justify-start w-[150px]">
                                    <p>Logo do seu clube</p>
                                    <input id="logoClubInput" name={"Logo"} onChange={(e) => { removeBackGroundImage(e); }} type={"file"} placeholder={"Logo de seu mercado"} hidden />
                                    <label htmlFor="logoClubInput" className="m-0 w-full h-[40px] rounded-lg flex items-center justify-center  bg-red-500 text-white shadow-black shadow-md" style={{ fontFamily: 'Segoe UI', fontSize: '13px' }}>
                                        Carregar a Logo
                                    </label>
                                </div>

                                {isLoadingLogoImage && <div className="w-16 h-16 border-blue-500 border-solid border-4 border-t-4 rounded-full animate-spin"></div>}

                                {logoClubImageWithoutBackground && (
                                    <CropperLogo
                                        image={logoClubImageWithoutBackground}
                                        ref={cropperRef}
                                        setLogoClubCroppedImage={setLogoClubCropperImage}
                                        setLogoClubImageWithoutBackground={setLogoClubImageWithoutBackground}
                                    />
                                )}

                                {logoClub &&
                                    <img src={logoClub} className="w-[150px] h-[150px]" alt="" />
                                }
                            </div>

                        </Form>

                    </Formik>
                </DialogContent>
            </Dialog>
        </section>
    )
}