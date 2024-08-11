import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import useMode from "./ustils/zustand";
import Proektlar from "./pages/proektlar";
import Xodimlar from "./pages/xodimlar";
import Jamoalar from "./pages/jamoalar";
import Xabarlar from "./pages/xabarlar";
import SeeMore from "./pages/seeMore";
import { useTranslation } from "react-i18next";

export default function App() {
  const { darkMode, toggleDarkMode } = useMode();

  const { t } = useTranslation();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bigBox dark:bg-[#121212] dark:text-white duration-300 text-black">

        <div className="site flex gap-">
          <Dashboard />
          <div className="siteRight w-[100%] h-[99.5vh] flex flex-col bg-[#f3f3f3] dark:bg-[#222222]">
            <Navbar />
            <div className="scroll duration-200 pr-2 pl-3">
              <Routes>
                <Route path="/" element={<div className="w-full items-center flex justify-center h-full p-2"><h1 className="text-[25px] text-center">{t("home")}</h1></div>} />
                <Route path="/proectlar" element={<Proektlar />} />
                <Route path="/xodimlar" element={<Xodimlar />} />
                <Route path="/jamoalar" element={<Jamoalar />} />
                <Route path="/xabarlar" element={<Xabarlar />} />
                <Route path="/xodimlar/:id" element={<SeeMore />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
