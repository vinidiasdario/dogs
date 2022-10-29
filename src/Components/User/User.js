import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";

const User = () => {
  const { login, data } = React.useContext(UserContext);
  if (!login) return <Navigate to="/login" />;

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
