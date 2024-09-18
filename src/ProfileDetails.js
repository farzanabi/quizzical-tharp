// src/components/ProfileDetails.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
    };

    fetchUser();
  }, [id]);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    setUser({ ...user, name, email, phone });
    setEditing(false);
    alert("Profile updated successfully!");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile Details</h2>
      {editing ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>
            Address: {user.address.street}, {user.address.suite},{" "}
            {user.address.city}, {user.address.zipcode}
          </p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
