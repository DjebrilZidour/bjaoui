import { useState } from "react";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  const [isListOn, setListOn] = useState(false);
  const List = (props) => {
    let info = props.isOn;
    return (
      <div
        style={{ display: info ? "block" : "none" }}
        className="bg-red-100 text-white rounded-tl-3xl rounded-tr-3xl animate__animated animate__fadeInDown "
      >
        <ul className="flex flex-col justify-between items-center text-black-100  max-sm:flex-col indie-flower-regular gap-8 p-4">
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
  return (
    <>
      <nav
        style={{ backgroundColor: "#FFFDCB" }}
        className="shadow-lg  px-16 py-1 rounded-bl-3xl flex justify-center lg:justify-between items-center w-full"
      >
        <div className="flex items-center justify-between w-full">
          <div className="">
            <img
              className="rounded-full h-24 w-full "
              src="https://yt3.googleusercontent.com/GDpaxeA5Pzjb25OFU2yG1OZAfAgzKMzSVpqBAsU7SzZmMkDU2XvBGtIytkmLvLcGVfSPGGoJqg=s176-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() => {
                if (isListOn) {
                  setListOn(false);
                } else {
                  setListOn(true);
                }
              }}
              className="w-8 h-8 lg:hidden"
              h
              src={
                isListOn
                  ? "https://cdn-icons-png.flaticon.com/128/3917/3917759.png"
                  : "https://cdn-icons-png.flaticon.com/128/3917/3917762.png"
              }
              alt=""
            />
          </div>
        </div>

        <ul className="flex justify-between items-center text-black-100 hidden lg:flex indie-flower-regular gap-16">
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

          <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-xl capitalize w-max">
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
      <List isOn={isListOn} />

      <section className="flex flex-col items-center justify-center lg:justify-between lg:flex-row mt-24 lg:mt-0 px-16 lg:py-12 gap-12 bg-cover bg-center h-screen home indie-flower-regular capitalize" id="home" src="">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-12 lg:mb-64">
          <h1 className="text-4xl capitalize">
            welcome to  Mohamed Lbjaoui <br /> High School
          </h1>
          <p className="text-xl">
            Mohamed Lbjaoui High School is a beacon of educational excellence
            nestled in the heart of Algiers, specifically in the bustling
            neighborhood of Bab Ezzouar. Established with a vision to nurture
            young minds and empower them for a bright future, our school stands
            as a testament to academic rigor, holistic development, and
            community engagement.
          </p>
        </div>
        <div className="lg:w-1/2 mb-64">
          <img className="rounded-3xl" src="https://scontent.falg6-2.fna.fbcdn.net/v/t39.30808-6/210372420_4086465968115815_7468991513453658856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEDlMLwxlHK02SKrBjOVVaXMGQgbaQisWswZCBtpCKxawU-oxxSRm7OuonzSl9nx3N4HCHgGLg72NrF1qcsKeVt&_nc_ohc=lQfTCQpiZBwAb4u3Okv&_nc_ht=scontent.falg6-2.fna&oh=00_AfB0u540Fl0jTUtXrO92p0YVJ7PDKKMqufI4bHRjZTv0ug&oe=662874E9" alt="" />
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
