import { NextPage } from "next";
import Head from "next/head";
import { LoginForm } from "@/components/auth/LoginForm";
import { Tabs } from "antd";
import { RegisterForm } from "@/components/auth/RegisterForm";

const AuthPage: NextPage = () => {
    return (
        <>
          <Head>
            <title>CloudStore / Auth</title>
          </Head>
          <main style={{ width: 400, margin: "50px auto" }}>
            <Tabs
              items={[
                {
                  label: "Log In",
                  key: "1",
                  children: <LoginForm />,
                },
                {
                  label: "Sign Up",
                  key: "2",
                  children: <RegisterForm />,
                },
              ]}
            />
          </main>
        </>
      );
};

export default AuthPage;