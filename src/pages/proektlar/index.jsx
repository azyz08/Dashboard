import { useEffect, useState } from "react";
import LoyihaCard from "../../components/loyihaCard"
import { inctance } from "../../ustils/axios";
import "./style.scss"
import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import EcoSwapXabar from "../../components/ecoSwapXabar";

export default function Proektlar() {
    const { t } = useTranslation();

    let [news, setNews] = useState([]);
    let [xabar, setXabar] = useState([]);

    useEffect(() => {
        inctance.get("/murojaat").then((r) => setNews(r.data));
    }, []);

    useEffect(() => {
        inctance.get("/ecoSwapXabar").then((r) => setXabar(r.data));
    }, []);

    const delProd = (id) => {
        inctance.delete(`/murojaat/${id}`)
            .then((r) => toast.success("Message deleted"))
            .catch((er) => toast.error("Something went wrong"))
    }

    const delProd2 = (id) => {
        inctance.delete(`/ecoSwapXabar/${id}`)
            .then((r) => toast.success("Message deleted"))
            .catch((er) => toast.error("Something went wrong"))
    }
    return (
        <>
            <h1 className="topH12">{t("murojaat")}</h1>
            <div className="cards">
                {news.map((murojaat) => (
                    <div key={murojaat._id} className="car">
                        <LoyihaCard className="LoyihaCard" murojaat={murojaat.muroj} telefon={murojaat.telefon} rasm={murojaat.rasm} lokatsiya={murojaat.lokatsiya} xabar={murojaat.xabar} />
                        <div className="btns2">
                            <Button className="btn1" color="red" onClick={() => delProd(murojaat._id)}>{t("delXabar")}</Button>
                        </div>
                    </div>
                ))}
            </div >
            <br /><br />

            <h1 className="topH12">{t("murojaat2")}</h1>
            <div className="cards">
                {xabar.map((message) => (
                    <div key={message._id} className="car">
                        <EcoSwapXabar className="LoyihaCard" ism={message.ism} phone={message.phone} email={message.email} massage={message.messag} />
                        <div className="btns2">
                            <Button className="btn1" color="red" onClick={() => delProd2(message._id)}>{t("delXabar")}</Button>
                        </div>
                    </div>
                ))}
            </div >

        </>
    )
}