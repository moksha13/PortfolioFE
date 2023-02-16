import React from "react";
import HeaderScreen from '../components/HeaderScreen'
import BannerComponent from "../components/BannerComponent";
import '../App.css'
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import Services from '../components/Services';
import Contact from "../components/ContactForm";
const Router = ()=>{
    return(
        <div>
            <HeaderScreen/>
            <BannerComponent/>
            <Skills/>
            <Projects/>
            <Services/>
            <Contact/>
        </div>
    )
}

export default Router