import React from "react";
import 'antd/dist/antd.css';
import '../assets/css/App.css';
import AppHeader from "../components/Header";
import AppFooter from "../components/main/footer";
import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";
import PetList from "../components/PetList";
const { Header, Content } = Layout;

function PetListPage() {
    return (
        <Layout className="mainLayout">
            <Header>

                <AppHeader/>

            </Header>
            <Content>
                <PetList />

            </Content>
            <Footer>

                <AppFooter/>
            </Footer>
        </Layout>
    );
}

export default PetListPage;
