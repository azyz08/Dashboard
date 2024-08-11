import "./style.scss"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom"

export default function Dashboard() {
    const { t } = useTranslation();

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const Confirm = () => {
        confirm("Log out")
    };

    return (
        <>
            {/* duration-200 bg-[#2196F3] dark:bg-[#2D53DA] */}
            {/* border-r-[1px] border-[grey] */}
            <div className="bigDashboard">
                <label htmlFor="m">
                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bars duration-200 bg-[#2196F3] dark:bg-[#2D53DA]">
                            <div className="bar1 bg-black duration-200 dark:bg-white"></div>
                            <div className="bar2 bg-black duration-200 dark:bg-white"></div>
                            <div className="bar3 bg-black duration-200 dark:bg-white"></div>
                        </div>
                    </div>
                </label>
                <input type="checkbox" id="m" />
                <div className="dashboard duration-200 bg-white dark:bg-[#121212]">
                    <ul>
                        <h2>{t("tools")}</h2>
                        <Link to={"/proectlar"} className={location.pathname === '/proectlar' ? 'active' : 'transition-[0.4s] text-[black] hover:text-[#32CD32] dark:text-[white]'}><i class="fa-regular fa-file-code i "></i><p>{t("loyiha")}</p></Link>
                        <Link to={"/xabarlar"} className={location.pathname === '/xabarlar' ? 'active' : 'transition-[0.4s] text-[black] hover:text-[#32CD32] dark:text-[white]'}><i class="fa-regular fa-comments"></i><p>{t("xabar")}</p></Link>
                        <Link to={"/xodimlar"} className={location.pathname === '/xodimlar' ? 'active' : 'transition-[0.4s] text-[black] hover:text-[#32CD32] dark:text-[white]'}><i class="fa-solid fa-users-between-lines "></i> <p>{t("xodim")}</p></Link>
                        <Link to={"/jamoalar"} className={location.pathname === '/jamoalar' ? 'active' : 'transition-[0.4s] text-[black] hover:text-[#32CD32] dark:text-[white]'}><i class="fa-solid fa-people-group "></i><p>{t("jamoa")}</p></Link>
                        <Link onClick={a => Confirm()} to={"/log-out"} className="logout text-[black] dark:text-[white] hover:text-[#B71C1C] ml-[2px]"><i class="fa-solid fa-arrow-right-from-bracket "></i><p className="mr-[4px]">{t("out")}</p></Link>
                    </ul>
                </div>
            </div >
        </>
    )
}