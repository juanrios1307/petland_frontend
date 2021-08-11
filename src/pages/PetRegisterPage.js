import React from "react";
import '../assets/css/App.css';
import AppHeader from "../components/Header";
import PetRegister from "../components/PetRegister";
import AppFooter from "../components/main/footer";
import Layout from "antd/es/layout/layout";
const { Header, Content, Footer } = Layout;

function PetRegisterPage() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader/>
            </Header>
            <Content>
                <PetRegister />
            </Content>
            <Footer>
                <AppFooter/>
            </Footer>
        </Layout>
    );
}

export default PetRegisterPage;
