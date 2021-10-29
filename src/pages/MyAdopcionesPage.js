import React from "react";
import 'antd/dist/antd.css';
import '../assets/css/App.css';
import AppHeader from "../components/Header";
import AppFooter from "../components/main/footer";
import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";
import PetListMineAdopts from "../components/PetListMineAdopts";
const { Header, Content } = Layout;

function MyAdopcionesPage() {
    return (
        <Layout className="mainLayout">
            <Header>

                <AppHeader/>

            </Header>
            <Content>
                <PetListMineAdopts />

            </Content>
            <Footer>

                <AppFooter/>
            </Footer>
        </Layout>
    );
}

export default MyAdopcionesPage;
