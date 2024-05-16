import React, { useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

const Navbar = ({ bgColor, color, ToggleButton, toggle }) => {

    return (
        <>
            <div className="nav_bar" >
                <div className="logo" style={{ backgroundColor: bgColor, color: color }}>WDM
                    <div onClick={ToggleButton}>

                        {
                            toggle ? (<BsToggle2On />) : (< BsToggle2Off />)
                        }

                        {''}
                    </div>
                </div>
                <div className="search" style={{ backgroundColor: bgColor, color: color }}>
                    <div className="left"><FcSearch /> Search here...</div>
                    <div className="right"><IoFilter /> Filter</div>
                </div>
                <div className="seller" style={{ backgroundColor: bgColor, color: color }}>
                    Become a seller
                </div>
            </div>
        </>
    )
}

export default Navbar;