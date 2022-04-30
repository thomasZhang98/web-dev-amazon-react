import React, {useContext, useState} from "react";
import {ADMIN_ROLE, BUYER_ROLE} from "../components/amazon/reducers/user-reducer";
import axios from "axios";

const ProfileContext = React.createContext();
const api = axios.create({withCredentials: true})

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState()

    const register = async (email, password, adminLevel, role) => {
        try {
            if (role === BUYER_ROLE) {
                const response = await api.post('http://localhost:4000/api/register', {
                    userName: email,
                    password: password
                })
                setProfile(response.data)
            } else if (role === ADMIN_ROLE) {
                const response = api.post('http://localhost:4000/api/admins/register', {
                    userName: email,
                    password: password,
                    level: adminLevel
                })
                setProfile(response.data)
            }
        } catch (e) {
            alert('Username already taken, please choose another one!')
        }
    }

    const login = async (email, password, role) => {
        try {
            if (role === BUYER_ROLE) {
                await api.post('http://localhost:4000/api/login', {
                    userName: email,
                    password: password
                })
            } else if (role === ADMIN_ROLE) {
                await api.post('http://localhost:4000/api/admins/login', {
                    userName: email,
                    password: password
                })
            }
        } catch (e) {
            alert('Username not found or password incorrect. Please try again!')
        }
    }

    const logout = async () => {
        const response = await api.post("http://localhost:4000/api/logout")
        setProfile(null)
    }

    const checkLoggedIn = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setProfile(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }

    const value = {profile, register, checkLoggedIn, login, logout}
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}