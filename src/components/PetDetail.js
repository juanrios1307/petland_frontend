import React, {useState,useEffect} from "react";
import {Card, Row, Col, Image} from 'antd';


import travel from "../assets/images/travel.png"
import Axios from "axios";

const { Meta } = Card;

function PetDetail() {


    const [id, setId] = useState(0);


    //Datos Pet
    const [imagen, setImagen]=useState('')
    const [ciudad, setCiudad] = useState('');
    const [raza, setRaza] = useState('');
    const [color, setColor] = useState('');
    const [edad, setEdad] = useState('');
    const [nombre, setNombre] = useState('');
    const [size, setSize] = useState('');
    const [tipo, setTipo] = useState('');


    //Datos User
    const [correo, setCorreo] = useState('');
    const [nombreU, setNombreU] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudadU, setCiudadU] = useState('');


    const getData = async() =>{

        var id =(localStorage.getItem('pet'))
        setId(id)

        const url='https://shielded-eyrie-97252.herokuapp.com/api/pet/detail/'

        const config = {
            method: 'get',
            url: url,
            headers: {
                'id':id
            }
        };

        const response = await Axios(config)

        const data = response.data.data
        const user = data.user

        setImagen(data.imagen)
        setCiudad(data.ciudad)
        setRaza(data.raza)
        setColor(data.color)
        setEdad(data.edad)
        setNombre(data.nombre)
        setSize(data.size)
        setTipo(data.tipo)

        setCorreo(user.correo)
        setNombreU(user.nombre)
        setCiudadU(user.ciudad)
        setTelefono(user.telefono)




    }


    useEffect(()=>{

        getData()


    },[])

    return (
        <div id="hero" className="paquetesBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>{nombre}</h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
                                    <div>
                                        <Image src={imagen} alt="no imagen a mostrar" />
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                    <Card
                                        hoverable
                                    >
                                        <Meta title={nombre} description={tipo} />
                                        <p>{ciudad}</p>
                                        <p>{"Raza: "+raza}</p>
                                        <p>{"Color: "+ color}</p>
                                        <p>{"Edad: "+ edad}</p>
                                        <p>{"Tamaño: "+ size}</p>
                                    </Card>


                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={travel} width={200} />}

                                    >
                                        <Meta title={"Datos De Contacto"} />
                                        <p>{"Correo: "+ correo}</p>
                                        <p>{"Nombre: "+ nombreU}</p>
                                        <p>{"Ciudad: "+ ciudadU}</p>
                                        <p>{"Telefono: "+ telefono}</p>
                                    </Card>


                                </Col>

                            </Row>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default PetDetail;
