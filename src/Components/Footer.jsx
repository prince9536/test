import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logo}
          alt="Founder"
        />

        <h2>Prince Bhardwaj</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="/youtube" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/__princesharma?igsh=MWl6ZWNseGoydTNzaw==" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/prince9536" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
