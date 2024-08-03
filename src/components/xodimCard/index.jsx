import './style.scss';
import React, { useEffect, useMemo, useState } from 'react';
import { Tooltip } from 'antd';
import { inctance } from '../../ustils/axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const text = <span>Read more</span>;
const buttonWidth = 80;
const XodimCard = () => {
    const [arrow, setArrow] = useState('Show');
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

    const { t } = useTranslation();
    return (

        <div className="table-container">
            <table>
                <thead>
                    <tr className='bg-[lightgrey] dark:bg-[#3c3c3c] trFixed'>
                        <th>{t("user")}</th>
                        <th className='age'>{t("age")}</th>
                        <th className='port'>Portfolio</th>
                        <th className='phone'>{t("phone")}</th>
                        <th className='td3'></th>
                    </tr>
                    <div className='none w-[100%] h-[45px]'></div>
                </thead>
                <tbody>
                    {xodi.map((xodim) => (
                        <tr className='tr2'>
                            <td className='td2'><img src={xodim.src} alt="User" />{xodim.name}</td>
                            <td className='age'>{xodim.age}</td>
                            <td className='port'><a href={xodim.portfolio} className='transition-all text-[blue] hover:text-[#3737e2]' target="_blank" rel="noopener noreferrer">{xodim.portfolio}</a></td>
                            <td className='phone'>{xodim.phone2}</td>
                            <td className='td3'>
                                <a className='aa text-[25p]' href="" target="_blank" rel="noopener noreferrer"><Tooltip placement="top" title={t("more")} arrow={mergedArrow}>
                                    <Link to={`/xodimlar/${xodim._id}`}>
                                        <i class="fa-solid fa-circle-right text-[25px]"></i></Link>
                                </Tooltip></a>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default XodimCard;
