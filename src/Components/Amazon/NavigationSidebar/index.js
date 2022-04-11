import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = 'home'}) => {
    return (
        <>
            <div className="list-group mb-2 mt-2">
                <i className="list-group-item"><i className="fab fa-amazon"></i></i>
                <Link to="/" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'home'?'active':''}`}><i className="fa-solid fa-house"></i> <span className="d-none d-xl-block ms-1"> Home</span></Link>
                <Link to="/profile" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'profile'?'active':''}`}><i className="fa-solid fa-user"></i><span className="d-none d-xl-block ms-1"> Profile</span></Link>
                <Link to="/search" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'search'?'active':''}`}><i className="fa-solid fa-magnifying-glass"></i><span className="d-none d-xl-block ms-1"> Search</span></Link>
            </div>
        </>
    )
}

export default NavigationSidebar;