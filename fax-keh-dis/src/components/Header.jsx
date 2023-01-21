import "../App.css";
import React from "react";
import Idea from "../images/idea.gif";

const openButton = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

openButton.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
});

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={Idea} height="6px" width="60px" alt="something" />
          <h1>Faxx Keh Dis</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <form className="fact-form">
        <input type="text" name="" id="" placeholder="SHare a fact" />
        <input type="text" placeholder="Source" />
        <select name="" id="category-select">
          <option value="">Select Category</option>
          <option value="tech">tech</option>
          <option value="science">science</option>
          <option value="lifestyel">Lifestyle</option>
        </select>
        <button className="btn post-btn">Post</button>
      </form>
    </>
  );
};

export default Header;
