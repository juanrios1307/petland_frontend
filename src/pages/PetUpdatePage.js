import React from "react";
import '../assets/css/App.css';
import AppHeader from "../components/Header";
import AppFooter from "../components/main/footer";
import Layout from "antd/es/layout/layout";
import PetUpdate from "../components/PetUpdate";
const { Header, Content, Footer } = Layout;

function PetUpdatePage() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader/>
            </Header>
            <Content>
                <PetUpdate />
            </Content>
            <Footer>
                <AppFooter/>
            </Footer>
        </Layout>
    );
}


export default PetUpdatePage;
