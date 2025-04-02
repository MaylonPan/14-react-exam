import Axios from "axios";
import { Outlet, Link } from "react-router-dom";
import UserHomeSession from "./UserHomeSession";
import { useState } from "react";
import AdminHomeSession from "./AdminHomeSession";



const Home = () => {

  const [ click, setClick ] = useState("");


  const handleUser = () => {
    setClick("user");
  };
  const handleAdmin = () => {
    setClick("admin")
  };

    return (
    <div className="min-h-screen flex justify-center bg-[#27445D] ">
        <section className="relative">
          <nav className="flex flex-row justify-end p-5 pr-30 border-b-1 fixed top-0 right-0 left-0">
            <ul className="flex gap-15 font-bold text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Owner">Owner</Link>
                </li>
            </ul>
          </nav>
        </section>


      <main className="flex w-full justify-center pt-[80px]">
        <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%]">
          <h1 className="w-full p-6 text-5xl text-white font-extrabold text-center">
            Generation Thailand React - Assessment
          </h1>
          <section className="w-full p-2 px-20 flex justify-center gap-50">
            <button
            onClick={handleUser}
            className="bg-white shadow-2xl p-4 font-bold rounded-xl hover:bg-[#008170] hover:scale-105 duration-300 hover:text-white">User Home Sector
            </button>

            <button
            onClick={handleAdmin}
            className="bg-white shadow-2xl p-4 font-bold rounded-xl hover:bg-[#008170] hover:scale-105 duration-300 hover:text-white">Admin Home Sector</button>
          </section>
          <section >
              {click === "user" ? <UserHomeSession /> : null}
              {click === "admin" ? <AdminHomeSession /> : null}
          </section>
        </div>
      </main>

    </div>
    )
}

export default Home;