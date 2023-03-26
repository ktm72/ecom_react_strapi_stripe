import React from "react";
import { WestOutlined, EastOutlined } from "@mui/icons-material";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/10543821/pexels-photo-10543821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14437079/pexels-photo-14437079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4126285/pexels-photo-4126285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <WestOutlined />
        </div>
        <div className="icon">
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
