import React from 'react';
import {Block, Button} from "../../../Components";
import {Input, Form} from "antd";
import {LockOutlined, InfoCircleTwoTone, MailOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {validateField} from "../../../Utils/Helpers";

const LoginForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
    } = props;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const success = false;

    return (
        <div>
            <div className='auth__top'>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт!</p>
            </div>
            <Block>
                {!success ? (
                        <Form
                            onSubmit={handleSubmit}
                            name="normal_login"
                            className="login-form"
                            onFinish={onFinish}
                        >

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
                                name="password"
                                validateStatus={validateField('password', touched, errors)}
                                help={!touched.password ? null : errors.password}
                                hasFeedback
                            >
                                <Input
                                    name="password"
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    size="large"
                                    type="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Item>
                            <Form.Item>
                                {isSubmitting && !isValid && <span>Ошибка!</span>}
                                <Button
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    size="large">
                                    Войти в аккаунт
                                </Button>
                            </Form.Item>
                            <Link href="#" className="auth__register-link" to="/registration">Зарегистрироваться</Link>
                        </Form>)
                    : <div className="auth__success-block">
                        <InfoCircleTwoTone style={{fontSize: "48px"}}/>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отправлено письмо с ссылкой для подтверждения аккаунта</p>
                    </div>}
            </Block>

        </div>

    );
};

export default LoginForm;
