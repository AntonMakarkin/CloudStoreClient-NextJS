import { NextPage } from "next";
import Head from "next/head";
import { LoginForm } from "@/components/auth/LoginForm";
import { Tabs } from "antd";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { LoginLayout } from "@/layouts/LoginLayout";

const AuthPage: NextPage = () => {
    return (
      <LoginLayout title="CloudStore / Auth">
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
      </LoginLayout>
    );
};

export default AuthPage;