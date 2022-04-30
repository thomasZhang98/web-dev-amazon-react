import React, {useState} from "react";
import {useParams} from "react-router-dom";
import "../index.css";
import {useProfile} from "../../../contexts/profile-context";

const Profile = () => {
  const {profile} = useProfile();
  const currentUid = profile._id; // TODO: This should be updated to be dynamic!!!
  const { id } = useParams();
  const targetUid = typeof id === "undefined" ? currentUid : id;
  const user = profile; // TODO: change
  const [username, setUsername] = useState(user.userName);
  const [password, setPassword] = useState(user.password);
  const [first_name, setFirstName] = useState(user.firstName);
  const [last_name, setLastName] = useState(user.lastName);
  const [phone_number, setPhoneNumber] = useState(user.phoneNumber);

  if (profile.role === "BUYER" && user.role === "ADMIN") {
    return <h1 className="mt-2">No access to admin profile</h1>;
  }
  return (
    <div className="mt-2">
      <div className="d-flex">
        <div className="float-start w-100 list-group">
          <h3>Profile</h3>
          {JSON.stringify(profile)}
          <h5>Public Information</h5>
          <div className="list-group-item top-border-rounded">
            <div className="fw-bold">Role: </div>
            <div>{user.role}</div>
          </div>
          <div className="list-group-item">
            <label className="fw-bold" htmlFor="username">
              Username:{" "}
            </label>
            {currentUid === targetUid ? (
              <div>
                <input
                  type="text"
                  value={username}
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <button className="btn btn-primary ms-2">Update</button>
              </div>
            ) : (
              <div>{user.username}</div>
            )}
          </div>
        </div>
      </div>
      <br />

      {currentUid === targetUid ? (
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
                <input
                  type="text"
                  value={password}
                  id="pw"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button className="btn btn-primary ms-2">Update</button>
              </div>
            </div>
            <div className="list-group-item">
              <label className="fw-bold" for="fn">
                First Name:
              </label>
              <div>
                <input
                  type="text"
                  value={first_name}
                  id="fn"
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <button className="btn btn-primary ms-2">Update</button>
              </div>
            </div>
            <div className="list-group-item">
              <label className="fw-bold" for="ln">
                Last Name:
              </label>
              <div>
                <input
                  type="text"
                  value={last_name}
                  id="ln"
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                <button className="btn btn-primary ms-2">Update</button>
              </div>
            </div>
            <div className="list-group-item">
              <label className="fw-bold" for="pn">
                Phone Number:
              </label>
              <div>
                <input
                  type="text"
                  value={phone_number}
                  id="pn"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                <button className="btn btn-primary ms-2">Update</button>
              </div>
            </div>
          </div>
          <br />

          {user.role === "Buyer" && (
            <div className="list-group mt-2 mb-4">
              <h5>Orders</h5>
              {user.orders.map((o) => (
                <div className="list-group-item top-border-rounded">
                  <div className="fw-bold">Order ID: </div>
                  <div>{o.oid}</div>
                  {o.products.map((p) => (
                    <div>
                      <div className="fw-bold">Product ID: </div>
                      <div>{p}</div>
                    </div>
                  ))}{" "}
                  //TODO: Should dynamically retrieve product from database and display relevant info.
                </div>
              ))}
            </div>
          )}

          {user.role === "Buyer" && (
            <div className="list-group mt-2">
              <h5>Bookmarks</h5>
              {user.bookmarks.map((b) => (
                <div className="list-group-item top-border-rounded">
                  <div className="fw-bold">ProductID: </div>
                  <div>{b}</div> //TODO: Should dynamically retrieve product
                  from database and display relevant info.
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
