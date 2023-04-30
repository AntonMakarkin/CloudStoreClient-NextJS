import { Header } from "@/components/Header";
import nookies from "nookies";
import { GetServerSidePropsContext, NextPage } from "next";
import API from "@/api/config/axios";
import * as Api from "../../api";

interface Props {
    items: any
}

const CloudPage: NextPage = () => {
    return (
        <>
            <Header/>
            <main>
                <h1>Cloud private page</h1>
            </main>
        </>
    )
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { accessToken } = nookies.get(ctx);
    API.defaults.headers.Authorization = `Bearer ${accessToken}`;
    
    try {
        await Api.files.getFiles();
        
        return {
            props: {}
        }
    } catch (err) {
        console.log(err);
        return {
            props: {}
        }
    }
}

export default CloudPage;



