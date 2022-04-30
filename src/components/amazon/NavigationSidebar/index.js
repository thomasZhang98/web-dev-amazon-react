import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
import {useProfile} from "../../../contexts/profile-context";

const NavigationSidebar = ({active = 'home'}) => {
    const {pathname} = useLocation();
    const {profile, logout} = useProfile();
    const navigate = useNavigate();

    const logoutClick = async () => {
        await logout();
        navigate('/login')
    }

    return (
        <>
            <div className="wd-list-group-mine list-group mb-2 mt-2">
                <i className="list-group-item"><i className="fab fa-amazon"/></i>
                <Link to="/" className={`list-group-item.active list-group-item list-group-item-action d-flex align-items-center ${pathname === '/'?'active':''}`} >
                  <i className="fa-solid fa-house"/> <span className="d-none d-xl-block ms-1"> Home</span></Link>
                <Link to="/search" className={`list-group-item.active list-group-item list-group-item-action d-flex align-items-center ${pathname.startsWith('/search') ?'active':''}`}>
                  <i className="fa-solid fa-magnifying-glass"/><span className="d-none d-xl-block ms-1"> Search</span></Link>
                <Link to="/profile" className={`list-group-item.active list-group-item list-group-item-action d-flex align-items-center ${pathname === '/profile'?'active':''}`}>
                    <i className="fa-solid fa-user"/><span className="d-none d-xl-block ms-1"> Profile</span></Link>
                {!profile && <Link to="/login" className={`list-group-item.active list-group-item list-group-item-action d-flex align-items-center ${pathname === '/login' || pathname === '/register' ?'active':''}`}>
                    <i className="fa-solid fa-arrow-right-to-bracket"/><span className="d-none d-xl-block ms-1"> Log in</span></Link>}
                {profile && <button className="btn btn-danger w-50" onClick={logoutClick}>Log out</button>}
            </div>
        </>
    )
}

export default NavigationSidebar;