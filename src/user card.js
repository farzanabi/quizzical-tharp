import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <Link to={`/profile/${user.id}`}>View Details</Link>
    </div>
  );
};

export default UserCard;
