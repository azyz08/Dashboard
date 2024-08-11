import "./style.scss"
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useMode from "../../ustils/zustand"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import '../../ustils/i18n';
import { Link } from "react-router-dom";


export default function Navbar() {
    const { darkMode, toggleDarkMode } = useMode();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);
    const handleChange = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    return (
        <>
            <nav className="nav duration-200 bg-white dark:bg-[#121212]">
                <div className="logo flex items-center gap-2">
                    <Link to={"/"}><img src="/vite.svg" alt="" /></Link>
                    <Link to={"/"}><h1>Dashboard</h1></Link>
                </div>
                <div className="end flex items-center gap-4">
                    <select className="border-[1px] rounded-[5px] pt-[2px] pb-[2px] bg-white cursor-pointer border-[blue] text-[#121212] focus:outline-none" value={i18n.language} onChange={handleChange}>
                        <option value="uz">O'z</option>
                        <option value="ru">Рус</option>
                        <option value="en">Eng</option>
                    </select>
                    <DarkModeSwitch
                        className="text-[#FFA500] dark:text-white"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        size={25} />
                </div>
            </nav>
        </>
    )
}