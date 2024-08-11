import { useEffect, useState } from "react";
import { inctance } from "../../ustils/axios";
import "./style.scss"
import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import XabarCard from "../../components/xabarCard";
import { toast } from "react-toastify";

export default function Proektlar() {
    const { t } = useTranslation();

    let [news, setNews] = useState([]);

    useEffect(() => {
        inctance.get("/universitetXabar").then((r) => setNews(r.data));
    }, []);

    const delProd = (id) => {
        inctance.delete(`/universitetXabar/${id}`)
            .then((r) => toast.success("Message deleted"))
            .catch((er) => toast.error("Something went wrong"))
    };
    return (
        <>
            <h1 className="topH12">{t("xabar2")}</h1>
            <div className="cards">
                {news.map((xabar) => (
                    <div key={xabar._id} className="car">
                        <XabarCard className="xabarCard" firstName={xabar.firstName} lastName={xabar.lastName} email={xabar.email} phone={xabar.phone} xabar2={xabar.xaba} />
                        <div className="btns2">
                            <a className="btn2" href={`https://${xabar.email2}`}>{t("seEmail")}</a>
                            <Button className="btn1" color="red" onClick={() => delProd(xabar._id)}>{t("delXabar")}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}