import React from "react";
import profile from "../assets/profile.jpg";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={profile} alt="Profile" className="profile-pic" />
      <h1>Paul Richard</h1>
      <p>Frontend Developer | Web3 Trader | Graphic Designer</p>
    </div>
  );
}