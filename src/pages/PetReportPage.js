import React from "react";
import '../assets/css/App.css';
import AppHeader from "../components/Header";

import AppFooter from "../components/main/footer";
import Layout from "antd/es/layout/layout";
import PetReport from "../components/PetReport";
const { Header, Content, Footer } = Layout;

function PetRegisterPage() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader/>
            </Header>
            <Content>
                <PetReport />
            </Content>
            <Footer>
                <AppFooter/>
            </Footer>
        </Layout>
    );
}

export default PetRegisterPage;
