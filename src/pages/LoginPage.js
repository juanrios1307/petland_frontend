import React from "react";
import '../assets/css/App.css';
import AppLogin from "../components/Login";
import AppHeader from "../components/Header";

function LoginPage() {
    return (
        <div>

            <AppHeader/>

            <AppLogin/>
        </div>
    );
}

export default LoginPage;
