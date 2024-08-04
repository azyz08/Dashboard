import { useTranslation } from "react-i18next";
import "./style.scss"

export default function Jamoalar() {
    const { t } = useTranslation();
    return (
        <>
            <h1 className="topH1">{t("jamoa")}</h1>
        </>
    )
}