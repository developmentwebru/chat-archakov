import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,

    } = props;
    const success = true;
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (

        <div className="auth__top">
            <h2>
                Регистрация
            </h2>
            <p>
                Для входа в чат, вам нужно зарегистрироваться
            </p>

            <Block>
                {success ? (<Form
                    onSubmit={handleSubmit}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                   onFinish={onFinish}
                >
                    <Form.Item
                        help={!touched.email ? '' : errors.email}
                        hasFeedback
                        validateStatus={!touched.email ? '' : errors.email  ? 'error' : 'success'}
                    >
                        <Input
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            size='large'
                            prefix={<MailOutlined  className="site-form-item-icon" />}
                            placeholder="E-mail"
                        />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus="success"
                        name="username"

                    >
                        <Input

                            type="user"
                            size='large'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Ваше имя" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        validateStatus={!touched.password ? '' : errors.password  ? 'error' : 'success'}
                        help={!touched.password ? '' : errors.password}
                    >
                        <Input
                            id="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item


                    >
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Повторите пароль"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onSubmit={handleSubmit}
                            size='large'>
                            Зарегистрироваться
                        </Button>

                    </Form.Item>

                    <Link to='/login' className='auth__register-link' href="#">Войти в аккаунт</Link>

                </Form> ): (<div className='auth__success-block'>
                             <InfoCircleTwoTone style={{ fontSize: '50px' }} />
                            <h3>Подтвердите свой аккаунт</h3>
                            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
                        </div>)}
            </Block>


            <div>

            </div>
        </div>

    )
}

export default RegisterForm;