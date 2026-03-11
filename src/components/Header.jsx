import React from "react";
import profile from "../assets/profile.webp";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={profile} alt="Profile" className="profile-pic" />
      <h1>Tobi .O. Alex</h1>
      
      <ul class="list" >
        <li><p>Frontend Developer  | </p></li>
        <li>Graphic Designer  |</li>
        <li>Web3 Trader</li>
      </ul>
      
    </div>
  );
}