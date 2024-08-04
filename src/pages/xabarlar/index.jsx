import { useEffect, useState } from "react";
import { inctance } from "../../ustils/axios";
import "./style.scss"
import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import XabarCard from "../../components/xabarCard";

export default function Proektlar() {
    const { t } = useTranslation();

    let [news, setNews] = useState([]);

    useEffect(() => {
        inctance.get("/xabar").then((r) => setNews(r.data));
    }, []);

    const delProd = (id) => {
        inctance.delete(`/xabar/${id}`);
    };
    return (
        <>
            <h1 className="topH1">{t("xabar")}</h1>
            <div className="cards">
                {news.map((xabar) => (
                    <div key={xabar._id} className="car">
                        <XabarCard className="xabarCard" ismi={xabar.ismi} phone={xabar.phone3} email={xabar.email2} xabar={xabar.xabar} />
                        <div className="btn">
                            <a className="btn2" href={`https://${xabar.email2}`}>{t("seEmail")}</a>
                            <Button className="btn1" color="red" onClick={() => delProd(xabar._id)}>{t("delXabar")}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}