import Style from '../styles/standings.module.scss';
import globalStyle from "../styles/global.module.scss";
import user from '../images/user.svg';
import { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

const cards = [
    { key: 1, img: user, firstName: 'Абоба', lastName: 'Викторович' },
    { key: 2, img: user, firstName: 'Абоба', lastName: 'Викторович' },
    { key: 3, img: user, firstName: 'Абоба', lastName: 'Викторович' },
    { key: 4, img: user, firstName: 'Абоба', lastName: 'Викторович' },
    { key: 5, img: user, firstName: 'Абоба', lastName: 'Викторович' },
    { key: 6, img: user, firstName: 'Абоба', lastName: 'Викторович' },
    { key: 7, img: user, firstName: 'Абоба', lastName: 'Викторович' },
    { key: 8, img: user, firstName: 'Абоба', lastName: 'Викторович' },
]

function Standings() {
    const [sidebarActive, setSidebarActive] = useState(false);
    return (
        <div className={Style.wrapper}>

            <div className={[Style.sidebar,(sidebarActive)?Style.active: ""].join(" ")}>
                <h1 className={Style.title}>список участников</h1>
                <div className={Style.cross} onClick={() => {setSidebarActive(false)}}><MdOutlineClose /></div>
                <hr className={Style.line} />
                <div className={Style.cardList}>
                    {cards.map(item => {
                        return (
                            <div className={Style.card}>
                                <img src={item.img} alt="" />
                                <p>{item.firstName}</p>
                                <p>{item.lastName}</p>
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className={[Style.standings,(sidebarActive)?Style.active: ""].join(" ")}>
                <div className={[Style.bg,(sidebarActive)?Style.active: ""].join(" ")}>
                    <div className={globalStyle.wrapper}>
                        <div className={Style.content}>
                            <div className={Style.people} onClick={() => {setSidebarActive(!sidebarActive)}}><FaPeopleGroup /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Standings;