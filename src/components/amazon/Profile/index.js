import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "../index.css";
import {useProfile} from "../../../contexts/profile-context";
import axios from "axios";
import {useSelector} from "react-redux";
import OrderList from "../Home/orders";

const api = axios.create({withCredentials: true});

const Profile = () => {
  const {profile, logout} = useProfile();
  const { id } = useParams();
  const isSelfProfile = !id;
  const [user, setUser] = useState(profile);
  const orders = useSelector(state => state.orders)
  useEffect(() => {
    async function getOtherUser() {
      if (!isSelfProfile) {
        try {
          const response = await api.get(`http://localhost:4000/api/buyers/${id}`)
          if (!response.data) {
            alert("Can't find the other buyer")
          } else {
            setUser(response.data)
          }
        } catch (e) {
          alert("Can't find the other buyer")
        }
      }
    } getOtherUser();
  }, [])
  const [phone_number, setPhoneNumber] = useState(user.phoneNumber);
  const navigate = useNavigate();
  const logoutClick = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div className="mt-2">
      <div className="d-flex">
        <div className="float-start w-100 list-group">
          <h3>Profile</h3>
          <h5>Public Information</h5>
          <div className="list-group-item top-border-rounded">
            <div className="fw-bold">Role: </div>
            <div>{user.role}</div>
          </div>
          <div className="list-group-item">
            <label className="fw-bold" htmlFor="username">
              Username:{" "}
            </label>
            <div>{user.userName}</div>
          </div>
        </div>
      </div>
      <br />

      {isSelfProfile ? (
        <div>
          <div className="list-group">
            <h5>Personal Information</h5>
            <div className="list-group-item top-border-rounded">
              <label className="fw-bold">uid: </label>
              <div>{user._id}</div>
            </div>
            <div className="list-group-item">
              <label className="fw-bold" for="pw">
                Password:
              </label>
              <div>
                <div>{user.password}</div>
              </div>
            </div>
            <div className="list-group-item">
              <label className="fw-bold" for="fn">
                First Name:
              </label>
              <div>
                <div>{user.first_name}</div>
              </div>
            </div>
            <div className="list-group-item">
              <label className="fw-bold" for="ln">
                Last Name:
              </label>
              <div>
                <div>{user.last_name}</div>
              </div>
            </div>
            <div className="list-group-item">
              <label className="fw-bold" for="pn">
                Phone Number:
              </label>
              <div>
                <div>{user.phone_number}</div>
              </div>
            </div>
          </div>
          <br />

          {user.role === "BUYER" && (
            <div className="list-group mt-2 mb-4">
              <h5>Orders</h5>
              {console.log(orders)}
              {user.orders.map((oid) => (
                <div className="list-group-item top-border-rounded">
                  <div>
                    <span className="fw-bold">Order ID: </span>
                    <span>{oid}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
      <button className="btn btn-danger" onClick={logoutClick}>Log out</button>
    </div>
  );
};

export default Profile;
