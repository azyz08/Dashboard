import './style.scss';
import React, { useEffect, useMemo, useState } from 'react';
import { Tooltip } from 'antd';
import { inctance } from '../../ustils/axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const text = <span>Read more</span>;
const buttonWidth = 80;
const XabarCard = () => {
    const [arrow] = useState('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }
        if (arrow === 'Show') {
            return true;
        }
        return {
            pointAtCenter: true,
        };
    }, [arrow]);

    let [xodi, setXodi] = useState([]);

    useEffect(() => {
        inctance.get("/xodim").then((r) => setXodi(r.data));
    }, []);

    const delProd = (id) => {
        inctance.delete(`/xodim/${id}`)
    }

    const { t } = useTranslation();
    return (

        <div className="table-container">
            <table>
                <thead>
                    <tr className='bg-[lightgrey] dark:bg-[#3c3c3c] trFixed'>
                        <th className='td2'>{t("user")}</th>
                        <th className='age'><span><h5>{t("age")}</h5></span></th>
                        <th className='port'>{t("portfolio")}</th>
                        <th className='phone'>{t("phone")}</th>
                        <th className='td3'></th>
                    </tr>
                    <div className='none w-[100%] h-[45px]'></div>
                </thead>
                <tbody>
                    {xodi.map((xodim) => (
                        <tr className='tr2'>
                            <td className='td2'><img src={xodim.src} alt="User" />{xodim.name}</td>
                            <td className='age'><span><h5>{xodim.age}</h5> <p className='yosh'>yosh</p></span></td>
                            <td className='port'><a href={xodim.portfolio} className='transition-all text-[blue] hover:text-[#3737e2]' target="_blank" rel="noopener noreferrer">{xodim.portfolio}</a></td>
                            <td className='phone'>{xodim.phone2}</td>
                            <td className='td3'>
                                <h6 className='aa text-[25p]' href="" target="_blank" rel="noopener noreferrer">
                                    <button onClick={() => delProd(xodim._id)}>DEL</button>
                                    <Tooltip placement="top" title={t("more")} arrow={mergedArrow}>
                                        <Link to={`/xodimlar/${xodim._id}`}>
                                            <i class="fa-solid fa-circle-right text-[25px]"></i>
                                        </Link>
                                    </Tooltip>
                                </h6>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default XabarCard;
