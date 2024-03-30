import { GiSoccerKick } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Style from "../styles/tournir.module.scss";

type PropsModalWindow = {
    name: string,
    date: string,
    status: string,
    players: number,
    id: number

};

function UiTournir(props: PropsModalWindow) {
    let link = "/tournir/" + props.id;
    return (
        <Link to={link} className={Style.row}>
            <p>Турнир <br />"{props.name}"</p>
            <div className={Style.body}>
                <div className={Style.element}>
                    <BsCalendarDate />
                    <p>{props.date}</p>
                </div>
                <div className={Style.element}>
                    <GiSoccerKick />
                    <p>{props.status}</p>
                </div>
                <div className={Style.element}>
                    <FaPeopleGroup />
                    <p>{props.players}</p>
                </div>
            </div>
            <p className={Style.more}>Подробнее <FaArrowAltCircleRight /></p>
        </Link>
    );
}

export default UiTournir;