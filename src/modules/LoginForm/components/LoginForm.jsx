import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (

                <div className="auth__top">
                    <h2>
                        Войти в аккаунт
                    </h2>
                    <p>
                        Пожалуйста, войдите в свой аккаунт
                    </p>

                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            hasFeedback
                            validateStatus="success"
                            name="username"

                        >
                            <Input

                                size='large'
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Введите имя" />
                        </Form.Item>
                        <Form.Item
                            name="password"

                        >
                            <Input
                                size='large'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Введите пароль"
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button
                                type="primary"
                                size='large'>
                                Войте в аккаунт
                            </Button>

                        </Form.Item>

                        <Link to='/register' className='auth__register-link' href="#">Зарегистрироваться</Link>

                    </Form>
                </Block>
                </div>

    )
}

export default LoginForm;