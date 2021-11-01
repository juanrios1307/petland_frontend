import React, {useState,useEffect} from "react";
import {Card, Row, Col, Image} from 'antd';


import travel from "../assets/images/travel.png"
import Axios from "axios";
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";
import {EyeOutlined} from "@ant-design/icons";

const { Meta } = Card;

function PetDetail() {

    const gridStyle = {
        textAlign: 'center',
    };

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
    const [adopcion, setAdopcion] = useState('');

    //Datos User
    const [correo, setCorreo] = useState('');
    const [nombreU, setNombreU] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudadU, setCiudadU] = useState('');

    const [productos,setProductos] = useState([]);

    //bool
    const [bool, setBool] = useState(false);

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
        setAdopcion(data.adopcion)


        setCorreo(user.correo)
        setNombreU(user.nombre)
        setCiudadU(user.ciudad)
        setTelefono(user.telefono)




    }

    const getProductos = async() =>{

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

        setProductos(data)
    }

    const adoptar = async()=>{
        const url='http://localhost:5000/api/adopt/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'put',
            url: url ,
            headers: {
                'access-token': token,
                pet:id
            },

        };

        const response = await Axios(config)

        const mensaje = response.data.mensaje
        const status=response.status

        console.log(mensaje)

        if(status===200){

            setBool(true)

            Swal.fire({
                title: mensaje,

            })

            window.location.reload(false)
        }else{
            Swal.fire({
                title: status,

            })

        }
    }


    useEffect(()=>{

        getData()
        getProductos()


    },[])

    if(bool){
        return(
            <Redirect to="/pet/myadopts"/>
        )
    }else {

        return (
            <div id="hero" className="paquetesBlock">

                <div id="pricing" className="block pricingBlock bgGray">
                    <div className="container-fluid">
                        <div className="titleHolder">
                            <h2>{nombre}</h2>
                            <div className="site-card-wrapper">
                                <Row gutter={[16, 16]}>

                                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                                        <div>
                                            <Image src={imagen} alt="no imagen a mostrar"/>
                                        </div>
                                    </Col>
                                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                        <Card
                                            hoverable
                                        >
                                            <Meta title={nombre} description={tipo}/>
                                            <p>{ciudad}</p>
                                            <p>{"Raza: " + raza}</p>
                                            <p>{"Color: " + color}</p>
                                            <p>{"Edad: " + edad}</p>
                                            <p>{"Tamaño: " + size}</p>

                                            {adopcion && (
                                                <button onClick={adoptar}>Adoptar Mascota</button>
                                            )}

                                        </Card>


                                    </Col>

                                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={travel} width={200}/>}

                                        >
                                            <Meta title={"Datos De Contacto"}/>
                                            <p>{"Correo: " + correo}</p>
                                            <p>{"Nombre: " + nombreU}</p>
                                            <p>{"Ciudad: " + ciudadU}</p>
                                            <p>{"Telefono: " + telefono}</p>
                                        </Card>


                                    </Col>

                                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                        {productos.map(item => {
                                            return (
                                                <Row gutter={[16, 16]}>
                                                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                                                        <Card
                                                            hoverable
                                                            style={gridStyle}

                                                        >
                                                            <Row gutter={[16, 16]}>

                                                                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                                                                    <Meta title={item.nombre}/>

                                                                    <h2>{item.cantidad}</h2>
                                                                    <p>{item.raza}</p>
                                                                    <p>{item.color}</p>


                                                                </Col>

                                                                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>

                                                                    <Image
                                                                        src={item.imagen}
                                                                        alt={"No Hay Imagenes para Mostrar"}
                                                                        width={400}
                                                                    />


                                                                </Col>
                                                            </Row>
                                                        </Card>


                                                    </Col>


                                                </Row>
                                            )
                                        })
                                        }


                                    </Col>

                                </Row>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PetDetail;
