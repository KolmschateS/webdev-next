"use client"

import { useState, useEffect} from "react";
import Cookies from "js-cookie";


export default function GDPR( {fullScreen} ) {
    const [showGDPRWindow, setShowGDPRWindow] = useState(false);
    const [gdpr, setGDPR] = useState("")

    const fullScreenClassName = "fixed top-0 left-0 w-screen h-screen flex justify-center items-center gdpr-fullscreen"
    const fullScreenClassName2 = "absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
    const normalClassName = "m-3"

    const activeButton = "text-md font-semibold text-white bg-black p-1 m-2"
    const inactiveButton = "text-md font-semibold text-black p-1 m-2"

    const handleAccept = () => {
        Cookies.set('gdpr', 'accepted');
        setGDPR("accepted");
        setShowGDPRWindow(false);
    }

    const handleBasic = () => {
        Cookies.set('gdpr', 'basic');
        setGDPR("basic");
        setShowGDPRWindow(false);
    }

    useEffect(() => {
        const gdprCookie = Cookies.get('gdpr');
        if (gdprCookie == undefined) {
            setShowGDPRWindow(true);
        } else {
            if (fullScreen) {
                setShowGDPRWindow(false);
            }
            else
            {
                setShowGDPRWindow(true);
                setGDPR(gdprCookie);
            }
        }
    }, []);

    if (!showGDPRWindow) {
        if (fullScreen) {
            return null;
        }
    }

  return (
    <div className={`${fullScreen ? fullScreenClassName : normalClassName}`}>
        <div className={`${fullScreen ? fullScreenClassName2 : normalClassName}`}>
        </div>
        <div className="relative bg-white text-black text-center p-3">
            <h1 className="text-2xl font-bold">GDPR</h1>
            <p>All the GDPR stuff goes here</p>

            {/* GDPR stuff */}
            <div>
                <button className={gdpr == "accepted" ? activeButton : inactiveButton} onClick={handleAccept}>Accept</button>
            </div>
            <div>
                <button className={gdpr == "basic" ? activeButton : inactiveButton} onClick={handleBasic}>Basic</button>
            </div>
        </div>
  </div>
  );
  }