import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import Heropic from "../assets/King.jpg";

const hero = () => {
  return (
    <section
      className="flex justify-between items-center px-10 py-5 space-x-10
     lg:flex-row ssm:flex-col ssm:space-y-10 text-white"
    >
      <div className="lg:w-1/2 ssm:w-fit">
        <p className="text-5xl mb-5 text-slate-300 lg:ml-0 ssm:ml-10">
          I'm
          <h1 className="text-6xl cursor-default ">JOSHUA OLUWASEUN ODUSANYA</h1>
          <hr className="bg-[#36454F]"/>
          <p className="mt-4 text-xl text-slate-300 font-sans">
            I’m a frontend developer who loves turning clean UI ideas into
            crisp, interactive experiences. I build fast, responsive, and modern
            websites using HTML, CSS, JavaScript, and React. If it’s sleek,
            smooth, and user-friendly — I’m on it.
          </p>
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center  items-center ssm:w-fit">
        <img
          src={Heropic}
          alt="Heropic"
          width={550}
          className="rounded-full border-8 border-[#7A6A1F]"
        />
      </div>
    </section>
  );
};

export default hero;
