import React from "react";
import 'antd/dist/antd.css';
import '../assets/css/App.css';
import AppHeader from "../components/Header";
import AppFooter from "../components/main/footer";
import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";
import PetListMine from "../components/PetListMine";
const { Header, Content } = Layout;

function PetListPage() {
    return (
        <Layout className="mainLayout">
            <Header>

                <AppHeader/>

            </Header>
            <Content>
                <PetListMine />

            </Content>
            <Footer>

                <AppFooter/>
            </Footer>
        </Layout>
    );
}

export default PetListPage;
