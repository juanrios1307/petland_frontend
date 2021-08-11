import React, {useEffect} from "react";
import {Card,Row, Col} from 'antd';
import cat from "../../assets/images/cat.jpg";
import cat1 from "../../assets/images/cat1.jpg";
import dog from "../../assets/images/dog.jpg";
import dog1 from "../../assets/images/dog1.jpg";
import pug from "../../assets/images/pug.jpg";

const { Meta } = Card;


function AppHero() {

    useEffect(()=>{
        localStorage.removeItem('ciudad')

    },[])

    return (
        <div id="hero" className="heroBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>PETLAND </h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                    <Card
                                        hoverable
                                        cover={<img alt="Modern Design" src={pug} />}
                                    >
                                        <Meta title={"Adopta Mascotas"} />
                                    </Card>

                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>

                                        <Card
                                            hoverable
                                            cover={<img alt="Modern Design" src={dog} />}
                                        >
                                            <Meta title={"Perritos"} />
                                        </Card>

                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>

                                    <Card
                                        hoverable
                                        cover={<img alt="Modern Design" src={cat} />}
                                    >
                                        <Meta title={"Gatitos"} />
                                    </Card>

                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>

                                    <Card
                                        hoverable
                                        cover={<img alt="Modern Design" src={cat1} />}
                                    >
                                        <Meta title={"Reporta Mascotas perdidas"} />
                                    </Card>

                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>

                                    <Card
                                        hoverable
                                        cover={<img alt="Modern Design" src={dog1} />}
                                    >
                                        <Meta title={"Busca"} />
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

export default AppHero;
