import Style from "../styles/tournir.module.scss";
import globalStyle from "../styles/global.module.scss";
import UiTournir from "./uiTournir";
import { Link } from "react-router-dom";

type Tournir = {
    name: string,
    date: string,
    status: string,
    number: number,
    id: number
}

type PropsModalWindow = {
    data: Array<Tournir>, //[{},{},{}]
    more: boolean

};

function UiTournirTable(props: PropsModalWindow) {
  return (
    <main className={Style.content}>
        <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
            <h1>cписок последних турниров</h1>
            <hr />
            {props.data.map(tournir => (
                <UiTournir 
                    name = {tournir.name}
                    date = {tournir.date}
                    status= {tournir.status}
                    players= {tournir.number}
                    key= {tournir.id}
                    id= {tournir.id}
       />
            ))}
            {(props.more)?
            <Link to="/tournirs" className={Style.link}>Посмотреть все</Link>:
            <></>
            }
            
        </div>
    </main>
  );
}

export default UiTournirTable;
