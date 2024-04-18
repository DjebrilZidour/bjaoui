import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  return (
    <>
       <nav
        style={{ backgroundColor: "#FFFDCB" }}
        className="shadow-lg px-16  rounded-bl-3xl flex justify-between items-center"
      >
        <img
        className="rounded-full p-1 h-24 w-24"
          src="https://yt3.googleusercontent.com/GDpaxeA5Pzjb25OFU2yG1OZAfAgzKMzSVpqBAsU7SzZmMkDU2XvBGtIytkmLvLcGVfSPGGoJqg=s176-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <ul className="flex justify-between items-center text-black-100  max-sm:flex-col max-sm:hidden indie-flower-regular gap-8">
          <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-xl capitalize">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
             home
            </Link>
          </li>

          <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-xl capitalize">
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

          <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-xl capitalize">
            <Link
              to="scocial-media"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              social media
            </Link>
          </li>

          <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-xl capitalize">
            <Link
              to="school-pics"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              school pics
            </Link>
          </li>

         

         
        </ul>
      </nav>

      <div className="h-scrren border-2 p-4  m-16" id="#home">
        <h1 className="mt-72 pt-72 text-3xl center text-red-500 p-4 border-4"></h1>

        <p className="text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit modi autem sint voluptatum molestias excepturi consectetur, dolor libero repudiandae, animi natus, iusto illum. Et doloribus minima vitae id fuga.
        </p>
      </div>

      <div className="h-screen border-2" id="about"><h1>about</h1></div>
    </>
  );
}

export default App;
