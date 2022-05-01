import React from "react";
import "./home.css";
import OrderList from "./orders";
import ProductList from "./products";
import { useProfile } from "../../../contexts/profile-context";
import { BUYER_ROLE } from "../reducers/user-reducer";

const Home = () => {
  const { profile } = useProfile();

  return (
    <div className="mt-2">
      {profile && profile.role === BUYER_ROLE && (
        <OrderList buyerId={profile._id} />
      )}
      {!profile && <ProductList />}
    </div>
  );
};
export default Home;
