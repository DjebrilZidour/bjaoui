import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-scroll";
import "./App.css";

 const List = (props) => {
  return (
    <div style={{display:props.isOn?"block":"hidden"}}className="bg-red-100 text-white">
      <ul className="flex flex-col justify-between items-center text-black-100  max-sm:flex-col max-sm:hidden indie-flower-regular gap-8">
        <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-xl capitalize">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
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
    </div>
  );
};
function App() {
  const [isListOn, setListOn] = useState(false);

  return (
    <>
      <nav
        style={{ backgroundColor: "#FFFDCB" }}
        className="shadow-lg px-16  rounded-bl-3xl flex justify-center lg:justify-between items-center"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full p-1 h-24 w-24"
            src="https://yt3.googleusercontent.com/GDpaxeA5Pzjb25OFU2yG1OZAfAgzKMzSVpqBAsU7SzZmMkDU2XvBGtIytkmLvLcGVfSPGGoJqg=s176-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <h1>Bjaoui</h1>
          <button onClick={()=>{
            if (isListOn) {
              setListOn(false)
            }else{
              setListOn(true)
            }
          }}>see more</button>
        </div>

        <ul className="flex justify-between items-center text-black-100  max-sm:flex-col max-sm:hidden indie-flower-regular gap-8">
          <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-xl capitalize">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
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
      <List isOn = {isListOn}/>

      <section id="home">
        <div>
          <h1>
            {" "}
            welcome to <br /> mohamed lbjaoui school
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, suscipit, accusantium iste minus veniam esse quisquam
            ipsum, porro incidunt blanditiis molestias beatae explicabo tenetur
            placeat at consectetur facere. Sunt ipsam delectus impedit!
            Assumenda nulla sint inventore nihil quas. Quaerat, ex?
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>

      <section id="about">
        <h1>our story</h1>
        <p></p>
      </section>
      <section id="social-media">
        <h1>social media</h1>
      </section>
      <section id="school-pics">
        <div>
          <img src="#" alt="school-pic" />
        </div>
        <div>
          <img src="#" alt="school-pic" />
        </div>
        <div>
          <img src="#" alt="school-pic" />
        </div>
      </section>

      <div className="h-screen border-2" id="about">
        <h1>about</h1>
      </div>
    </>
  );
}

export default App;