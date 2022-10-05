import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleAccount = () => {
    navigate("/account");
  };

  return (
    <div>
      <button onClick={handleProfile}>Profile</button>
      <button onClick={handleAccount}>Account</button>
    </div>
  );
}

export default MainPage;
