import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/header.css"
import "../css/footer.css"


function LandingPage() {
    return(
        <body>
            <header>
                <Header/>
                <nav>
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/contacto"> Contact </NavLink>
                    <NavLink to="/newsletter"> Newsletter </NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            
            <Footer/>
        </body>
    )
};

export default LandingPage;