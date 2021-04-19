import React from 'react';
import {Block, Button} from "../../../Components";
import {Input, Form} from "antd";
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {Link} from "react-router-dom";
import { validateField } from "../../../Utils/Helpers";


const RegistrationForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const success = false;

    return (
        <div>
            <div className='auth__top'>
                <h2>Регистрация</h2>
                <p>Для входа в чат, Вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form onSubmit={handleSubmit}
                          name="normal_registration"
                          className="registration"
                          onFinish={onFinish}>

                        <Form.Item
                            name='email'
                            validateStatus={validateField('email', touched, errors)}
                            help={!touched.email ? null : errors.email}
                            hasFeedback>
                            <Input name='email'
                                   prefix={<MailOutlined className="site-form-item-icon"/>}
                                   size="large"
                                   placeholder="E-mail"
                                   value={values.email}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            name="name"
                            validateStatus={!touched.name ? '' : errors.name ? "error" : "success"}
                            help={!touched.name ? null : errors.name}
                            hasFeedback>
                            <Input
                                name="name"
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                size="large"
                                placeholder="Ваше имя"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            validateStatus={validateField('password', touched, errors)}
                            help={!touched.password ? null : errors.password}
                            hasFeedback>
                            <Input
                                name="password"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                size="large"
                                type="password"
                                placeholder="Ваш Пароль"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                        </Form.Item>

                        <Form.Item
                            name="password2"
                            validateStatus={validateField('password', touched, errors)}
                            help={!touched.password ? null : errors.password}
                            hasFeedback>
                            <Input
                                name="password"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                size="large"
                                value={values.password}
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Повторите пароль"/>
                        </Form.Item>

                        <Form.Item>

                            <Button
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                                type="primary"
                                size="large">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>

                        <Link href="#" className="auth__register-link" to="/login">Войти в аккаунт</Link>
                    </Form>) : <div className="auth__success-block">
                    <InfoCircleTwoTone style={{fontSize: "48px"}}/>
                    <h2>Подтвердите свой аккаунт</h2>
                    <p>На вашу почту отправлено письмо с ссылкой для подтверждения аккаунта</p>
                </div>}

            </Block>
        </div>

    );
};

export default RegistrationForm;
