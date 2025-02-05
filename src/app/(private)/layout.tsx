"use client"

import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import Header from "./_components/Header/Header"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {

    const queryClient = new QueryClient()
    return (
        <html lang="en">
            <body className="w-full h-screen">
                <QueryClientProvider client={queryClient}>
                    <Header />
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    )
}