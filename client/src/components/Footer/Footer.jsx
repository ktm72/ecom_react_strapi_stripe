import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            repellendus delectus maxime quam quasi impedit est deleniti illo a
            soluta eaque doloremque, odit quae debitis quidem, consequatur
            aliquid eius velit.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit amet
            beatae dolores earum error praesentium et quos! Exercitationem
            quaerat impedit atque, beatae dicta asperiores. Porro ipsum adipisci
            eveniet vel! In.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">StrapiStore</span>
          <span className="copyright">
            {" "}
            &#169; Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
