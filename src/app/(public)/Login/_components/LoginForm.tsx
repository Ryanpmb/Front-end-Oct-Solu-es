"use client";


import React from "react";
import { Button } from "@/components/ui/button"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { LoginInterface } from "@/app/Interfaces/UserInterface"
import { UserLogin } from "@/services/User/Auth"
import { validationSchemaLogin } from "./validationSchemaLogin";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const LoginForm = () => {

    const router = useRouter();

    const handleSubmitLogin = async (userLogin: LoginInterface) => {
        try {
            await UserLogin(userLogin)
            const token = Cookies.get("access_token")
            if (token) {
                router.push("/DashBoard")
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="absolute bg-red-400 right-0 h-full w-[25%] flex items-center justify-center shadow-black shadow-xl">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchemaLogin}
                onSubmit={handleSubmitLogin}
            >
                <Form className="flex items-center justify-center flex-col gap-[30px] w-[95%]">
                    <div className="flex w-[80%] flex-col text-start">
                        <h2 className="text-5xl text-white m-0 " >
                            Login
                        </h2>
                        <p className="text-white text-lg font-Segoeui m-0">Preencha os campos abaixo</p>
                        <p className="text-white text-lg font-Segoeui m-0">com seus dados de acesso.</p>
                    </div>

                    <div className="w-[80%] flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[15px] w-full">
                            <ErrorMessage name="email" component={"span"} />
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="p-[10px] rounded-3xl bg-red-200"
                            />

                            <ErrorMessage className='errorMessage' name='password' component={'span'} />
                            <Field
                                name='password'
                                placeholder='Digite Sua Senha'
                                type='password'
                                className="p-[10px] rounded-3xl bg-red-200"
                            />
                        </div>

                        <div className="flex gap-[10px] items-center justify-center w-full">
                            <Button type="submit" className="w-1/2 rounded-3xl">
                                Acessar
                            </Button>

                            <Button className="w-1/2 rounded-3xl">
                                Criar minha Conta
                            </Button>
                        </div>

                        <div className="">
                            <Button className="bg-transparent hover:bg-transparent">
                                Esqueci a senha
                            </Button>
                        </div>
                    </div>
                </Form>

            </Formik>
        </section>
    )
}

export default LoginForm;