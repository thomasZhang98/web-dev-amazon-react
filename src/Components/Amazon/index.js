import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";

const Amazon = () => {
    return(
        <div className="container mt-2">
            <div className="col-2">
                <NavigationSidebar active={"home"}/>
            </div>
            <div className="col-10">
                <Outlet/>
            </div>
        </div>
    )
}

export default Amazon;