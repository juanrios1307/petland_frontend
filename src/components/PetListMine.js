import React, {useState,useEffect} from "react";
import {Card, Row, Col, Image} from 'antd';

import Axios from "axios";
import { EyeOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import {Redirect} from "react-router-dom";
import Swal from "sweetalert2";
const { Meta } = Card;



function PetListMine(props) {


    const [pets,setPets]=useState([])


    const gridStyle = {
        textAlign: 'center',
    };


    const getMyPets = async() =>{

        setPets([])

        const url='https://shielded-eyrie-97252.herokuapp.com/api/pet/mine/'

        const token=localStorage.getItem('token')

        const config = {
            method: 'get',
            url: url,
            headers: {
                'access-token':token
            }
        };

        const response = await Axios(config)


        var data = response.data.data

        await setPets(data)
        console.log(data)
    }



    useEffect(()=>{
        getMyPets()

    },[])




    const [seeBool, setSeeBool]=useState(false);
    const [updateBool, setupdateBool]=useState(false);


    const see = (id) =>{
        console.log(id)
        localStorage.setItem("pet",id)
        setSeeBool(true)
    }

    const edit = (id) =>{
        console.log("edit")

        localStorage.setItem("pet",id)

        setupdateBool(true)
    }

    const eliminar = async (id) =>{

        var url='https://shielded-eyrie-97252.herokuapp.com/api/pet/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'delete',
            url: url,
            headers: {
                'access-token': token,
                'pet':id
            }
        };

        const response = await Axios(config)

        const mensaje = response.data.data
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            window.location.reload(false)

        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }


    if(seeBool){
        return(
            <Redirect to="/pet/detail"/>
        )
    }else if(updateBool){
        return(
            <Redirect to="/pet/update"/>
        )
    } else {

        return (
            <div id="hero" className="busquedaBlock">
                <div>
                    <h1>H</h1>
                </div>
                {pets.map(item => {
                    return (
                        <Row gutter={[16, 16]}>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                                <Card
                                    hoverable
                                    style={gridStyle}

                                    actions={[
                                        <EyeOutlined key="select" onClick={() => see(item._id)}/>,
                                        <EditOutlined key="update" onClick={() => edit(item._id)}/>,
                                        <DeleteOutlined key="delete" onClick={() => eliminar(item._id)}/>,
                                    ]}


                                >
                                    <Row gutter={[16, 16]}>

                                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                                            <Meta title={item.nombre} description={item.tipo}/>

                                            <h2>{item.ciudad}</h2>
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

            </div>

        );
    }
}

export default PetListMine;
