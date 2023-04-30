import { FC } from "react";
import styles from './LoginForm.module.scss';
import { Button, Form, Input, notification } from "antd";
import { RegisterRequest } from "@/api/types/auth.type";

import * as Api from '../../api';

export const RegisterForm: FC = () => {
    const onSubmit = async (values: RegisterRequest) => {
        try {
            const { message } = await Api.auth.register(values);
            notification.success({
                message,
                description: 'Redirect to your cloud...',
                duration: 2
            });
        } catch (err: any) {
            console.warn('RegisterForm', err);
            notification.error({
                message: err.response.data.message,
                description: 'Try again',
                duration: 2
            })
        }
    }

    return (
        <div className={styles.formBlock}>
            <Form
                name="basic"
                labelCol={{
                    span: 8
                }}
                layout="vertical"
                onFinish={onSubmit}>
                <Form.Item
                    name={['name']}
                    label="Name"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Login (email)"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'E-mail is not valid'
                        },
                        {
                            required: true,
                            message: 'Email required'
                        }
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password'
                        }
                    ]}
                    hasFeedback>
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: '50px'}}
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password'
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}