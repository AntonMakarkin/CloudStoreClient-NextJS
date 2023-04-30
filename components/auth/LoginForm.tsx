import { FC } from 'react';
import styles from './LoginForm.module.scss';
import { Form, notification } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { LoginRequest } from '../../api/types/auth.type';

import * as Api from "../../api";

export const LoginForm:FC = () => {
    const onSubmit = async (values: LoginRequest) => {
        try {
            const { message } = await Api.auth.login(values);
            notification.success({
                message,
                description: 'Redirect to your cloud...',
                duration: 2
            });

            location.href = '/my-cloud'

        } catch (err: any) {
            console.warn('LoginForm', err);
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
                layout='vertical'
                onFinish={onSubmit}
                >
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
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password'
                        }
                    ]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}>
                    <Button type="primary" htmlType='submit'>
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}