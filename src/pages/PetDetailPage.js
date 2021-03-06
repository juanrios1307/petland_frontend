import React from "react";
import '../assets/css/App.css';
import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import PetDetail from "../components/PetDetail";
import AppFooter from "../components/main/footer";
import AppHeader from "../components/Header";
const { Header, Content } = Layout;

function PetDetailPage() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader/>
            </Header>
            <Content>
                <PetDetail/>
            </Content>
            <Footer>
                <AppFooter/>
            </Footer>
        </Layout>
    );
}

export default PetDetailPage;
