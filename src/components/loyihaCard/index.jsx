import "./style.scss"
import React from 'react';
import { useTranslation } from "react-i18next";

export default function LoyihaCard({ murojaat, telefon, rasm, lokatsiya, xabar }) {
    const { t } = useTranslation();
    return (
        <>
            <div className="cardd">
                <div className="content">
                    <div className="back">
                        <div className="back-content duration-200  bg-white dark:bg-[#121212]">
                            <div className="ps">
                                <p>{t("muro")}: <span>{murojaat}</span></p>
                                <p>{t("phone")}: <span>{telefon}</span></p>
                                <p>{t("rasm")}: <span className="text-[blue] flex items-center"><a href={rasm}>{t("korish")}</a></span></p>
                                <p>{t("lokatsiya")}: <span>{lokatsiya}</span></p>
                                <p>{t("xabar")}: <span>{xabar}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}