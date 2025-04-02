import Axios from "axios";
import { Outlet, Link } from "react-router-dom";
import image from '../assets/profile-pic.jpg'


const OwnerPage = () => {
    return (
    <div className="h-screen flex justify-center bg-[#27445D] ">
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

        <section className="flex justify-center items-center">
            <div className="justify-center text-center items-center">
                <h1 className="font-bold text-white text-5xl">Bass - Group D - 14</h1>
                <div className="flex justify-center items-center mt-10">
                    <img src={image} className="w-80"/>
                </div>
                <h2 className="text-white text-2xl font-semibold mt-10 mb-5">
                    A Little Things About Me</h2>
                <p className="w-200 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptas quis dolorem aliquid ducimus suscipit quaerat eos molestias quam? Quam maiores aliquam repudiandae ipsam quaerat vitae est ut quas temporibus eveniet aliquid similique dicta provident exercitationem saepe, pariatur modi voluptatum architecto! Praesentium quidem magni quod tempore, blanditiis ad amet officiis!</p>
            </div>
        </section>
    </div>
    )
}

export default OwnerPage;