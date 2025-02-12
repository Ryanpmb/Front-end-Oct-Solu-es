"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { LogoData, UpdateUserInformations, useUserData } from "@/services/User/User"
import { DialogTitle } from "@radix-ui/react-dialog"
import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useRef, useState } from "react"
import CropperLogo from "./_components/CropperLogo"
import { ReactCropperElement } from "react-cropper"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UserInterface } from "@/app/Interfaces/UserInterface"

export default function UploadData() {

    const { data: user } = useUserData()
    const { data: logoClub } = LogoData()
    const queryClient = useQueryClient()

    
    const informations = user ? JSON.parse(user.Adress) : []
    const [contentAdress, setContentAdress] = useState(informations?.length ?? 0);

    const [isLoadingLogoImage, setIsLoadingLogoImage] = useState<boolean>(false)
    const [logoClubImageWithoutBackground, setLogoClubImageWithoutBackground] = useState<string | null>(null)
    const [logoClubCroppedImage, setLogoClubCropperImage] = useState<string | null>(null)
    const cropperRef = useRef<ReactCropperElement | null>(null)

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

    const { mutateAsync: updateUserInformationsFn } = useMutation({
        mutationFn: UpdateUserInformations,
        onSuccess(_, variables) {
            const cached = queryClient.getQueryData(['user'])

            queryClient.setQueryData(["user"], (data : UserInterface) =>{
                return{
                    ...data, 
                    Adress: variables.addresses
                }
            })

        }

    })


    const handleSaveAdressInformations = async (values: any) => {

        const addresses = [];

        for (let i = 0; i < contentAdress; i++) {
            addresses.push({
                Adress: values[`Adress-${i}`],
                Telefone: values[`Telefone-${i}`],
                WhatsApp: values[`Whatsapp-${i}`],
                horaFuncionamento: values[`horaFuncionamento-${i}`]
            })
        }

        await updateUserInformationsFn({
            addresses: JSON.stringify(addresses),
            LogoClubImage: logoClubCroppedImage,
        })
    }



    return (

        <section>
            <Dialog>
                <DialogTrigger asChild>

                    <Button className="rounded-xl hover:bg-red-700 w-[80%]">
                        Carregue aqui os dados principais da sua loja
                    </Button>

                </DialogTrigger>

                <DialogContent className="w-[50%]">

                    <DialogHeader>
                        <DialogTitle className="text-gray-500 text-5xl font-viga">
                            Campos não Obrigatórios
                        </DialogTitle>
                    </DialogHeader>

                    <Formik
                        initialValues={{
                            ...Array.from({ length: contentAdress }).reduce(
                                (acc: Record<string, string>, _, index) => ({
                                    ...acc,
                                    [`Adress-${index}`]: informations[index]?.Adress ?? "",
                                    [`Telefone-${index}`]: informations[index]?.Telefone ?? "",
                                    [`Whatsapp-${index}`]: informations[index]?.Whatsapp ?? "",
                                    [`horaFuncionamento-${index}`]: informations[index]?.horaFuncionamento ?? ""
                                }), {}
                            )
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
                                    <img src={logoClub} className="w-[150px] h-[120px]" alt="" />
                                }
                            </div>


                            {Array.from({ length: contentAdress }, (_, index) => (
                                <div key={index} id={`adress-${index}`} className="flex items-center justify-start gap-[30px] w-full mt-5">
                                    <div className="flex flex-col items-start justify-start w-[34%]">

                                        <p>Endereço:</p>
                                        <Field className=" p-[10px] rounded-xl bg-gray-300 focus:border focus:border-gray-500 w-full border border-gray-500 " name={`Adress-${index}`} type={"text"} placeholder={"Endereço de seu mercado"} />

                                    </div>


                                    <div className="flex flex-col items-start justify-start w-[10%]">

                                        <p>Telefone:</p>
                                        <Field className=" p-[10px] rounded-xl bg-gray-300 focus:border focus:border-gray-500 w-full border border-gray-500 " name={`Telefone-${index}`} type={"text"} placeholder={"Telefone de seu mercado"} />

                                    </div>

                                    <div className="flex flex-col items-start justify-start w-[10%]">

                                        <p>Whatsapp:</p>
                                        <Field className=" p-[10px] rounded-xl bg-gray-300 focus:border focus:border-gray-500 w-full border border-gray-500 " name={`Whatsapp-${index}`} type={"text"} placeholder={"Whatsapp de seu mercado"} />

                                    </div>


                                    <div className="flex flex-col items-start justify-start w-[34%]">

                                        <p>Horário de funcionamento:</p>
                                        <Field className=" p-[10px] rounded-xl bg-gray-300 focus:border focus:border-gray-500 w-full border border-gray-500 " name={`horaFuncionamento-${index}`} type={"text"} placeholder={"Horário de funcionamento de seu mercado"} />

                                    </div>
                                </div>
                            ))}
                            <div className="flex w-full items-start justify-start mt-[10px]">
                                <Button onClick={() =>{ setContentAdress((prevValue : number) => prevValue + 1) }} type="button">
                                    + Endereções
                                </Button>
                            </div>

                            <div className="w-full flex items-center justify-center mt-[10px]">
                                <Button className="w-1/2">
                                    Salvar
                                </Button>
                            </div>
                        </Form>

                    </Formik>

                </DialogContent>
            </Dialog>
        </section>
    )
}