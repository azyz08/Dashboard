import { Button } from "@material-tailwind/react";
import "./style2.scss"
import React from 'react';
import { useTranslation } from "react-i18next";

export default function XabarCard({ firstName, lastName, phone, email, xabar2 }) {
    const { t } = useTranslation();
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="back">
                        <div className="back-content duration-200  bg-white dark:bg-[#121212]">
                            <div className="ps">
                                <p>{t("nomi")}: <span>{firstName}</span></p>
                                <p>{t("nomi")}2: <span>{lastName}</span></p>
                                <p>{t("phone")}: <span>{phone}</span></p>
                                <a href={""}><p>{t("email2")}: <span>{email}</span></p></a>
                                <p className="endP"><h3>{t("xabar")}:<i class="fa-solid fa-arrow-down"></i></h3> <span>{xabar2}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="front">
                        <div className="img">
                            <div className="circle left-[70px]">
                            </div>
                            <div className="circle" id="right">
                            </div>
                            <div className="circle" id="bottom">
                            </div>
                        </div>
                        <div className="backText">
                            <form>
                                <input type="email" placeholder={t("email")} required />
                                <textarea className="textArea" required placeholder={t("xabar")} name="" id=""></textarea>
                                <div className="btns">
                                    <Button type="submit" className="bg-[#2D53DA]">{t("send")}</Button>
                                    <Button type="reset" className="bg-[#B71C1C]">{t("reset")}</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}