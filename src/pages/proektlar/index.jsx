import { useEffect, useState } from "react";
import LoyihaCard from "../../components/loyihaCard"
import { inctance } from "../../ustils/axios";
import "./style.scss"
import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export default function Proektlar() {
    const { t } = useTranslation();

    let [news, setNews] = useState([]);

    useEffect(() => {
        inctance.get("/loyiha").then((r) => setNews(r.data));
    }, []);

    const delProd = (id) => {
        inctance.delete(`/loyiha/${id}`)
    }
    return (
        <>
            <h1 className="topH1">{t("loyiha")}</h1>
            <div className="cards">
                {news.map((loyiha) => (
                    <div key={loyiha._id} className="car">
                        <LoyihaCard className="loyihaCard" nomi={loyiha.nomi} fullStack={loyiha.fullStack} narxi={loyiha.narxi} deadline={loyiha.deadline} phone={loyiha.phone} email={loyiha.email} />
                        <div className="btn">
                            <a className="btn2" href={`https://${loyiha.email}`}>{t("seEmail")}</a>
                            <Button className="btn1" color="red" onClick={() => delProd(loyiha._id)}>{t("delete")}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}