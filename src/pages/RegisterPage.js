import React,{Component} from "react";
import '../assets/css/Register.css';
import '../assets/css/App.css';
import AppHeader from "../components/Header";

import AppRegister from "../components/Register";

import AppFooter from "../components/main/footer";

import {  Layout  } from 'antd';
const { Header, Content, Footer } = Layout;

class RegisterPage extends Component {

    render() {

        return (

            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppRegister />
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default RegisterPage
