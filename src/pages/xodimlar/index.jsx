import { useTranslation } from "react-i18next";
import XodimCard from "../../components/xodimCard"
import "./style.scss"

export default function Xodimlar() {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="topH1">{t("xodim")}</h1>
            <div className="xodimlar">
                <XodimCard />
            </div>
        </>
    )
}