
/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from "react";

function Navegation() {
    const [activeItem, setActiveItem] = useState("");
    const unreadMessages = 8;
    const frendesrequestes = 3;
    const navigationItems = [
        {
            name: "News feed",
            icon: "../src/SVGs/Compass.svg",
            activeIcon: "../src/SVGs/Compasswhite-explore.svg",
        },
        {
            name: "Message",
            icon: "../src/SVGs/Emailmessages.svg",
            activeIcon: "../src/SVGs/Email.svg",
            badge: (
                <div className="absolute top-3 right-1 bg-black rounded-full px-1 text-xs text-white">
                    {unreadMessages}
                </div>
            ),
        },
        {
            name: "Friends",
            icon: "../src/SVGs/User Accountfriends.svg",
            activeIcon: "../src/SVGs/User Account.svg",
            badge: unreadMessages > 0 && (
                <div className="absolute top-3 right-1 bg-black rounded-full px-1 text-xs text-white">
                    {frendesrequestes}
                </div>),
        },
        {
            name: "Profile",
            icon: "../src/SVGs/Accountprofile.svg",
            activeIcon: "../src/SVGs/Account.svg",
        },
        {
            name: "Setting",
            icon: "../src/SVGs/Settingssettings.svg",
            activeIcon: "../src/SVGs/Settings.svg",
        },
    ];

    const handleItemClick = (item) => {
        setActiveItem(item.name);
    };

    return (
        <div className=" w-1/6 grid auto-cols-fr  bg-[#d9d9d9] pt-5 ">
            <div className=" relative m-10 flex justify-center mb-4 mx-0 pr-12">
                <img
                    src="../src/IMG20240210163908.jpg"
                    alt=""
                    className=" w-16 h-16 rounded-full absolute  right-14"
                />
                <div className=" bg-[#DFEBFF] w-16 h-16 rounded-full   "></div>
            </div>
            <div className="mx-4 ">
                <h3 className=" flex justify-center font-semibold">Mahmoud Badawy</h3>
                <p className=" text-xs  flex justify-center opacity-60">
                    @mahmoudbadawy
                </p>
            </div>
            <div className=" ml-6 py-2 my-10 mr-0 pr-5 w-full">
                <div className=" ml-6 py-2 my-10 mr-0 pr-5 w-full">
                    {navigationItems.map((item) => (
                        <div
                            key={item.name}
                            className={`pl-4 mr-6 flex mt-5  relative ${activeItem === item.name ? "bg-black text-white rounded-full" : ""
                                }`}
                            onClick={() => handleItemClick(item)}
                        >
                            <img
                                className={`w-7 h-7 mt-1 ${activeItem === item.name ? "hidden" : ""
                                    }`}
                                src={item.icon}
                                alt=""
                            />
                            <img
                                className={`w-7 h-7 mt-1 ${activeItem === item.name ? "" : "hidden"
                                    }`}
                                src={item.activeIcon}
                                alt=""
                            />
                            <a className=" py-2 text-sm pl-2">{item.name}</a>
                            <div >{item.badge} </div>
                        </div>
                    ))}
                </div>
                {/* <div
                    className={`pl-4 py-3 mr-6 flex mt-5 ${isActive === 'message' ? "bg-black text-white rounded-full" : ""}`}
                    onClick={() => setIsActive('message')}
                >
                    <img className="w-5 h-5 " src="../src/SVGs/Email.svg" alt="" />
                    <a className="text-sm pl-2">Message</a>
                    <div className="ml-auto bg-black rounded-full text-white mr-1 mt-1 px-1 text-xs font-bold">
                            8
                        </div>
                    {isActive === 'message' }
                </div> */}
                {/* <div className={`pl-4 py-1  mr-6 flex mt-5 ${isActive === 'Frends' ? "bg-black text-white rounded-full" : ""}`}
                onClick={() => setIsActive('Frends')}
                >
                    <img className=" w-5  h-5 mt-2 " src="../src/SVGs/User Accountfriends.svg" alt="" />
                    <a className="  py-2 text-sm pl-2"> Frends</a>
                    <div className=" w-4 h-4 rounded-full  bg-black ml-20 mt-3 text-white text-xs text-center ">3</div>
                    
                    {isActive === 'Frends' }
                    
                </div> */}
                {/* <div className={` pl-4  py-1 mr-6 flex mt-5 ${isActive === 'Profile' ? "bg-black text-white rounded-full" : ""}`}
                onClick={()=> setIsActive ('Profile')}
                >
                    <img className="w-7  h-7 mt-1 " src="../src/SVGs/Accountprofile.svg" alt="" />
                    <a className=" py-2 text-sm pl-2">Profile</a>
                    {isActive === 'Profile' }
                </div> */}
                {/* <div className={` pl-4 py-1 mr-6 flex mt-5 ${isActive === 'Setting' ? "bg-black text-white rounded-full" : ""}`}
                onClick={()=> setIsActive ('Setting')}
                >
                    <img className="w-7  h-7 mt-1 " src="../src/SVGs/Settings.svg" alt="" />
                    <a className=" py-2 text-sm pl-2">Setting</a>
                    {isActive === 'Setting' }
                </div> */}
            </div>

        </div>
    );
}

export default Navegation;



