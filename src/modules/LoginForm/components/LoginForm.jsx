import React from 'react';
import {Form, Input} from "antd";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import  {validateField} from '../../../utils/helpers'







const LoginForm =  props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,

    } = props;
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
                        validateStatus={validateField('email', touched, errors)}
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
                        name="password"

                        validateStatus={validateField('password', touched, errors)}
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



                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onSubmit={handleSubmit}
                            size='large'>
                            Зарегистрироваться
                        </Button>

                    </Form.Item>

                    <Link to='/register' className='auth__register-link' href="#">Зарегистрироваться</Link>

                </Form>
            </Block>
        </div>

    )
}

export default LoginForm;




