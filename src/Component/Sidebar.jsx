import React from 'react';
import { CiHome } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({bgColor, color}) => {
  return (
    <>
      <div className="side_bar_content" style={{ backgroundColor: bgColor, color: color }}>
        <div className="items"><CiHome className='icons' /> Home</div>
        <div className="items"><IoIosNotifications className='icons'/> Notification</div>
        <div className="items"><CiShop className='icons'/> Shop</div>
        <div className="items"><CiChat1 className='icons'/> Converstaion</div>
        <div className="items"><CiWallet className='icons'/> Wallet</div>
        <div className="items"><CiYoutube className='icons'/> Subscription</div>
        <div className="items"><RiAdminFill className='icons'/> My Profile  </div>
      </div>

      <div className="bottom_content items">
      <CiLogout />  Logout
      </div>
    </>
  )
}

export default Sidebar;