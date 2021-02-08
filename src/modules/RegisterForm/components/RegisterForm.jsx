import React from 'react';
import {Form} from "antd";
import {Block, Button, FormField} from "../../../components";
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
        isSubmitting
    } = props;
    const success = false;
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
                {!success ? (

                    <Form
                    onSubmit={handleSubmit}

                    className="login-form"
                   /* initialValues={{
                        remember: true,
                    }}
                   onFinish={onFinish}*/
                >
                        <FormField touched={touched} errors={errors}
                                   name='email' icon={<MailOutlined  className="site-form-item-icon" />} handleBlur={handleBlur}
                                   handleChange={handleChange} values={values} placeholder='E-mail'
                        />
                        <FormField touched={touched} errors={errors}
                                   name='fullname' icon={<UserOutlined  className="site-form-item-icon" />} handleBlur={handleBlur}
                                   handleChange={handleChange} values={values} placeholder='Ваше имя'
                        />
                        <FormField touched={touched} errors={errors}
                                   name='password' icon={<LockOutlined  className="site-form-item-icon" />} handleBlur={handleBlur}
                                   handleChange={handleChange} values={values} placeholder='Введите пароль'
                                   type="password"
                        />
                        <FormField touched={touched} errors={errors}
                                   name='password2' icon={<LockOutlined  className="site-form-item-icon" />} handleBlur={handleBlur}
                                   handleChange={handleChange} values={values} placeholder='Повторите пароль'
                                   type="password"
                        />

                    <Form.Item>
                        <Button
                            onClick={handleSubmit}
                            type="primary"
                            htmlType="submit"
                            disabled={isSubmitting}
                            size='large'>
                            Зарегистрироваться
                        </Button>

                    </Form.Item>

                    <Link to='/signin' className='auth__register-link' href="#">Войти в аккаунт</Link>

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