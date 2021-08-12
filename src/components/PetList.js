import React, {useState,useEffect} from "react";
import {Card, Row, Col, Image} from 'antd';

import Axios from "axios";
import { EyeOutlined } from '@ant-design/icons';
import {Redirect} from "react-router-dom";
const { Meta } = Card;



function PetList(props) {


    const [pets,setPets]=useState([])

    const condicion = localStorage.getItem("condicion")

    const gridStyle = {
        textAlign: 'center',
    };

    const url='http://localhost:5000/api/pet/'
    const getAllPets = async() =>{

        setPets([])

        var response = await Axios.get(url)
        var data = response.data.data

        await setPets(data)
        console.log(data)
    }

    const getPetsBySearch = async() =>{



        const url='http://localhost:5000/api/pet/search'

        setPets([])

        const config = {
            method: 'get',
            url: url ,
            headers: {
                'condicion':condicion
            },

        };

        const response = await Axios(config)


        var data = response.data.data

        await setPets(data)
        console.log(data)

    }


    useEffect(()=>{

        if(condicion != undefined) {

            getAllPets()
        }else{

            getPetsBySearch()
        }

    },[])
    



    const [seeBool, setSeeBool]=useState(false);

    const see = (id) =>{
        console.log(id)
        localStorage.setItem("pet",id)
        setSeeBool(true)
    }

    if(seeBool){
        return(
            <Redirect to="/pet/detail"/>
        )
    }else {

        return (
            <div id="hero" className="busquedaBlock">

                {pets.map(item => {
                    return (
                        <Row gutter={[16, 16]}>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                                <Card
                                    hoverable
                                    style={gridStyle}

                                    actions={[
                                        <EyeOutlined key="select"
                                                     onClick={() => see(item._id)}/>,

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

export default PetList;
