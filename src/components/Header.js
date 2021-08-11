import React, { useState,useEffect } from "react";
import {Redirect} from "react-router-dom";
import {Anchor, Drawer, Button, Form, Cascader, Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import Http from "../libs/http";

const { Link } = Anchor;

const options = [
    {
        value: 1,
        label: 'Cerrar Sesión',
    },
    {
        value: 2,
        label: 'Mis Mascotas',
    },
    {
        value: 3,
        label: 'Reportar Mascota',
    },
    {
        value: 4,
        label: 'Registrar Mascota',
    }

];
function AppHeader() {

    const [visible, setVisible] = useState(false);
    const [token, setToken] = useState('');

    const [boolBusqueda, setBoolBusqueda] = useState(false);
    const [boolRegistrarMascota, setBoolRegistrarMascota] = useState(false);
    const [boolReportarMascota, setBoolReportarMascota] = useState(false);
    const [boolMisMascotas, setBoolMisMascotas] = useState(false);

    const cerrarSesion = () =>{
        localStorage.removeItem("token")

        setToken('')
    }

    const misMascotas = () =>{
        setBoolMisMascotas(true)
    }



    const onChange =(value) =>{

        if(value[0]===1){
            cerrarSesion()
        }else if(value[0] === 2){
            misMascotas()
        }else if(value[0]===3){
            setBoolReportarMascota(true)
        }else if(value[0]===4){
            setBoolRegistrarMascota(true)
        }
    }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };





    const buscar = async(values) => {



        setBoolMisMascotas(true)


    }

    useEffect(()=>{

        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }

    },[])


    if(boolBusqueda){
        return (
            <Redirect to="/busqueda"/>
        )
    }else if(boolMisMascotas){
        return (
            <Redirect to="/pet/mylist"/>
        )
    }else if(boolReportarMascota){
        return (
            <Redirect to="/pet/report"/>
        )
    }else if(boolRegistrarMascota){
        return (
            <Redirect to="/pet/register"/>
        )
    }else {

        return (
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <i className="fa fa-paw" aria-hidden="true"></i>
                        <a href="/"> PETLAND</a>
                    </div>
                    <div className="mobileHidden">
                        <Anchor targetOffset="65">

                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{remember: true}}
                                layout="inline"
                                onFinish={buscar}
                            >
                                <Form.Item
                                    name="pet"
                                    rules={[{required: true, message: 'Por favor ingresa el nombre, raza o tipo de una mascota!'}]}
                                >

                                    <Input placeholder="Search" />


                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Buscar
                                    </Button>
                                </Form.Item>
                            </Form>

                            <Link href="/" title="Home"/>

                            {token && (
                                <Cascader options={options} onChange={onChange}>
                                    <UserOutlined/>
                                </Cascader>

                            )

                            }

                            {!token && (

                                <Link href="/login" title="Iniciar Sesión"/>


                            )}

                            {!token && (

                                <Link href="/signup" title="Registrate"/>


                            )}


                        </Anchor>
                    </div>
                    <div className="mobileVisible">
                        <Button type="primary" onClick={showDrawer}>
                            <i className="fas fa-bars"></i>
                        </Button>
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                        >
                            <Anchor targetOffset="65">
                                <Link href="/" title="Home"/>
                                <Link href="/login" title="Iniciar Sesión"/>
                                <Link href="/signup" title="Registrate"/>
                            </Anchor>
                        </Drawer>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;
