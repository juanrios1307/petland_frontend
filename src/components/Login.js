import React, {useState} from 'react';
import '../assets/css/Login.css';
import DashImg from '../assets/images/pets.svg';
import Deliveries from '../assets/images/refugeLog.svg';
import { Redirect } from 'react-router-dom';

import Swal from "sweetalert2";

import Axios from "axios";

function AppLogin() {


    const [correo,setCorreo] = useState('.');

    const [pwd, setPwd] = useState('');

    const Login = async(e) => {

        e.preventDefault()

        const url='http://localhost:5000/api/user/login/'

        const response = await Axios.post(
            url,
            {correo,pwd})

        console.log(response)

        const mensaje = response.data.mensaje
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            localStorage.setItem("token",response.data.token)

            window.location.reload(false)
        }else{
            Swal.fire({
                title: mensaje,

            })

            setPwd('')
            setCorreo('')
        }
    }

    if(localStorage.getItem('token')){
        return(
            <Redirect to="/"/>
        )
    }else {

        return (

            <div className="body">

                <div className="container">
                    <div className="img">
                        <img src={Deliveries} alt="logistic.svg"/>
                    </div>
                    <div className="login-content">
                        <form className="form" onSubmit={Login}>
                            <img src={DashImg} alt="logo.svg"/>
                            <h2 className="title">Bienvenido</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="email" className="input" placeholder="Email" required
                                           onChange={e => setCorreo(e.target.value)}/>
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" className="input" placeholder="Contraseña" required
                                           onChange={e => setPwd(e.target.value)}/>
                                </div>
                            </div>


                            <input type="submit" className="btn" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppLogin;
