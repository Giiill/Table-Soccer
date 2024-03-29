import Style from "../styles/tournir.module.scss";
import globalStyle from "../styles/global.module.scss";
import { GiBlackFlag } from "react-icons/gi";
import UiTournir from "./uiTournir";

function UiTournirTable() {
  return (
    <main className={Style.content}>
        <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
            <h1>cписок последних турниров</h1>
            <hr />
            <UiTournir 
                name = "Белые медведи"
                date = "12 февраля 2024"
                state="В игре"
                players= {32}
            />
            <UiTournir 
                name = "Белые медведи"
                date = "12 февраля 2024"
                state="В игре"
                players= {32}
            />
            <UiTournir 
                name = "Белые медведи"
                date = "12 февраля 2024"
                state="В игре"
                players= {32}
            />
        </div>
    </main>
  );
}

export default UiTournirTable;
