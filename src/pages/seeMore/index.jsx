import { useEffect, useState } from "react"
import "./style.scss"
import { useParams } from "react-router-dom"
import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { inctance } from "../../ustils/axios";
import { useTranslation } from "react-i18next";
export default function SeeMore() {
    const { t } = useTranslation();

    let [src, setSrc] = useState("")
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [portfolio, setPortfolio] = useState("")
    let [phone2, setPhone2] = useState("")
    let [fullStack2, setfullStack2] = useState("")
    let [about, setAbout] = useState("")
    let [location, setLocation] = useState("")
    let [language, setLanguage] = useState("")

    const { id } = useParams()
    useEffect(() => {
        inctance.get(`/xodim/${id}`).then((res) => {
            setSrc(res.data.src)
            setName(res.data.name)
            setAge(res.data.age)
            setPortfolio(res.data.portfolio)
            setPhone2(res.data.phone2)
            setfullStack2(res.data.fullStack2)
            setAbout(res.data.about)
            setLocation(res.data.location)
            setLanguage(res.data.language)
        });
    }, [])
    return (
        <>
            <div className="seeMore">
                <div className="zoom h-full">
                    <Zoom className="zoom">
                        <img
                            alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                            src={src}
                            width="100"
                        />
                    </Zoom>
                </div>
                <div className="about">
                    <h1><p>{t("nomi")}:</p> <span className="ml-[37px]">{name}</span></h1>
                    <h1><p>{t("age")}:</p> <span className="ml-[54px]">{age} {t("age")}</span></h1>
                    <h1><p>{t("portfolio")}:</p><span className="ml-[20px]"><a href={portfolio} className="text-[blue]">{portfolio}</a></span></h1>
                    <h1><p>{t("phone")}:</p> <span className="ml-[33px]">{phone2}</span></h1>
                    <h1><p>{t("stack")}:</p> <span className="ml-[5px]">{fullStack2}</span></h1>
                    <h1><p>{t("about")}:</p> <span className="ml-[39px]">{about}</span></h1>
                    <h1><p>{t("manzil")}:</p> <span className="ml-[19px]">{location}</span></h1>
                    <h1><p>{t("til")}:</p> <span className="ml-[7px]">{language}</span></h1>
                </div>
            </div>
        </>
    )
}