import { Button } from "@material-tailwind/react";
import "./style.scss"
import React from 'react';
import { useTranslation } from "react-i18next";
import { inctance } from "../../ustils/axios";

export default function LoyihaCard({ nomi, fullStack, narxi, deadline, phone, email }) {
    const { t } = useTranslation();
    const delProd = (id) => {
        inctance.delete(`/loyiha/${id}`)
    }
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="back">
                        <div className="back-content duration-200  bg-white dark:bg-[#121212]">
                            <div className="ps">
                                <p>{t("nomi")}: <span>{nomi}</span></p>
                                <p>Full-stack: <span>{fullStack}</span></p>
                                <p>{t("narx")}: <span>{narxi}</span></p>
                                <p>{t("deadline")}: <span>{deadline}</span></p>
                                <p>{t("phone")}: <span>{phone}</span></p>
                                <a href={""}><p>Email: <span>{email}</span></p></a>
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
                                    <Button type="reset" className="bg-[#B71C1C]">Reset</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}