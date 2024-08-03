import { useEffect, useState } from "react";
import LoyihaCard from "../../components/loyihaCard"
import { inctance } from "../../ustils/axios";
import "./style.scss"

export default function Proektlar() {
    let [news, setNews] = useState([]);

    useEffect(() => {
        inctance.get("/loyiha").then((r) => setNews(r.data));
    }, []);
    return (
        <>
            <div className="cards">
                {news.map((loyiha) => (
                    <LoyihaCard key={loyiha._id} nomi={loyiha.nomi} fullStack={loyiha.fullStack} narxi={loyiha.narxi} deadline={loyiha.deadline} phone={loyiha.phone} email={loyiha.email} />
                ))}
            </div>
        </>
    )
}