import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from '../utils/UserContext'
import { useSelector } from "react-redux";

const Header = ()=>{
    const [btnName, setBtnName] = useState("Login")

    useEffect(()=>{
        
    },[]);

    const {loggedInUser} = useContext(UserContext);
    // console.log("Logged User",loggedInUser);


    // Selector
    // We are Subscibing (Linking) to our Store using useSelector a custom hook we get in react-redux
    const cartItems = useSelector((store)=> store.cart.items);

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between sm:bg-yellow-300 lg:bg-blue-200 shadow-lg m-4 px-2 rounded-lg">
            <div className="logo-container">
                <img className="w-20"src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Status: {onlineStatus ? "🟢": "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/" >Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about" >About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact" >Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery" >Grocery</Link>
                </li>
                <li className="px-4 font-bold text-orange-700">
                <Link to="/cart" >
                    Cart🛒({cartItems.length})</Link>
                </li>
                <button 
                    className="login" 
                    onClick={()=>{
                        btnName == "Login" ?
                        setBtnName ("Logout"):
                        setBtnName ("Login")
                    }}>
                        {btnName}
                </button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
            </div>
        </div>
    );
}

export default Header;