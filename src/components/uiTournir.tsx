import { GiSoccerKick } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import Style from "../styles/tournir.module.scss";
import globalStyle from "../styles/global.module.scss";

type PropsModalWindow = {
    name: string,
    date: string,
    state: string,
    players: number

};

function UiTournir(props: PropsModalWindow) {
    return (
        <div className={Style.row}>
            <p>Турнир <br />"{props.name}"</p>
            <div className={Style.body}>
                <div className={Style.element}>
                    <BsCalendarDate />
                    <p>{props.date}</p>
                </div>
                <div className={Style.element}>
                    <GiSoccerKick />
                    <p>{props.state}</p>
                </div>
                <div className={Style.element}>
                    <FaPeopleGroup />
                    <p>{props.players} игрока</p>
                </div>
            </div>
            <p className={Style.more}>Подробнее</p>
        </div>
    );
}

export default UiTournir;