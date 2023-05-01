import Head from "next/head";
import { Header } from "@/components/Header";
import { FC, PropsWithChildren } from "react";

import styles from "@/styles/Home.module.scss";

interface LayoutProps {
    title: string;
}

export const LoginLayout: FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main style={{ width: '400px', margin: '50px auto'}}>
                {children}
            </main>
        </>
    )
}