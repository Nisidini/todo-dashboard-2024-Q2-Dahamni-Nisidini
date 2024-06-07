import React, { useState } from "react";
import s from "../sideBar/sideBar.module.css";
import imagePic from "../../src/assets/image.png";
import menuIcon from "../../src/assets/burger-bar.png";
import crossIcon from "../../src/assets/cross.png";

const SideBar = () => {
    const [sideBar, setSideBar] = useState(false);
    const handleSideBar = () => {
        setSideBar(!sideBar);
    };
    return (
        <>
            <div onClick={handleSideBar} className={s.heeader}>
                {!sideBar ? (
                    <img src={menuIcon} alt="menu icon" className={s.menuImg} />
                ) : (
                    <img src={crossIcon} alt="cross icon" className={s.crossIcon} />
                )}
            </div>
            <div className={`${s.sideBarSection} ${sideBar ? s.active : ""}`}>
                <div className={s.box}>
                    <h1 className={s.heading}>Acmy Solutions</h1>
                </div>
                <div className={s.box2}>
                    <div className={s.y}>
                        <div>
                            <img src={imagePic} alt="image" />
                        </div>
                        <div>
                            <p>DashBoard</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
