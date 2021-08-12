import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";
import Axios from "axios"

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const AppRegistrationForm = () => {
    const [form] = Form.useForm();

    const [bool,setBool] = useState(false);

    const onFinish=(values) =>{
        Register(values)
    }

    const Register = async(values) => {

        const url='http://localhost:5000/api/user/'

        const config = {
            method: 'post',
            url: url ,
            data: values

        };

        const response = await Axios(config)


        console.log(response)

        const mensaje = response.data.mensaje
        const status=response.status
        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            //localStorage.setItem("token",response.data.token)
            setBool(true)
            window.location.reload(false)
        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }

    if(bool){
        return(
            <Redirect to="/login"/>
        )
    }else {


        return (
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Registro</h2>
                    </div>

                    <div className="block">
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}

                            scrollToFirstError
                        >
                            <Form.Item
                                name="correo"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'El email ingresado no es valido',
                                    },
                                    {
                                        required: true,
                                        message: 'Por favor ingresa tu email!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="pwd"
                                label="Contraseña"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresa tu contraseña!',
                                    },
                                    {
                                        min:6,
                                        message: 'Tu contraseña debe contener mas de 6 caracteres!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirmar Contraseña"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor confirma tu contraseña!',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('pwd') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                name="nombre"
                                label="Nombre "
                                rules={[{required: true, message: 'Por favor ingresa tu nombre!', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>


                            <Form.Item
                                name="telefono"
                                label="Celular "
                                rules={[{required: true, message: 'Por favor ingresa tu telefono!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="ciudad"
                                label="Ciudad "
                                rules={[{required: true, message: 'Por favor ingresa tu ciudad!'}]}
                            >
                                <Input/>
                            </Form.Item>


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        );
    }
};

export default AppRegistrationForm
