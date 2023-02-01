import React from "react";
import HeaderScreen from "../screens/HeaderScreen";
import BannerComponent from "../components/BannerComponent";
import '../App.css'

const Router = ()=>{
    return(
        <div>
            <HeaderScreen/>
            <BannerComponent/>
        </div>
    )
}

export default Router