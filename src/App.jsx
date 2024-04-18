import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img
          src="https://yt3.googleusercontent.com/GDpaxeA5Pzjb25OFU2yG1OZAfAgzKMzSVpqBAsU7SzZmMkDU2XvBGtIytkmLvLcGVfSPGGoJqg=s176-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              about
            </Link>
          </li>
          <li>about</li>
          <li>social media</li>
          <li>pictures of school</li>
        </ul>
      </nav>

      <div className="h-scrren border-2 p-4  m-16" id="#home">
        <h1 className="mt-72 pt-72 text-3xl center text-red-500 p-4 border-4"> beaklk zouan ana machi tyara</h1>

        <p className="text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit modi autem sint voluptatum molestias excepturi consectetur, dolor libero repudiandae, animi natus, iusto illum. Et doloribus minima vitae id fuga.
        </p>
      </div>

      <div className="h-screen border-2" id="about"><h1>about</h1></div>
    </>
  );
}

export default App;
