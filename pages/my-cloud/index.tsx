import { Header } from "@/components/Header";
import nookies from "nookies";
import { GetServerSidePropsContext, NextPage } from "next";
import API from "@/api/config/axios";
import * as Api from "../../api";
import { Layout } from "@/layouts/Layout";

interface Props {
    items: any
}

const CloudPage: NextPage<Props> = ({ items }) => {
    console.log(items);
    return (
        <Layout title="CloudStorage / My Cloud">
            <h1>Cloud private page</h1>
        </Layout>
    )
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { accessToken } = nookies.get(ctx);
    API.defaults.headers.Authorization = `Bearer ${accessToken}`;
    
    try {
        const items = await Api.files.getFiles();
        
        return {
            props: { items }
        }
    } catch (err) {
        console.log(err);
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
}

export default CloudPage;



