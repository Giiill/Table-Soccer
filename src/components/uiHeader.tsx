import Style from "../styles/header.module.scss";
import globalStyle from "../styles/global.module.scss";

function UiHeader() {
  return (
    <header>
      <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
        <div className={Style.logo}>Kicker Out</div>
        <nav className={Style.nav}>
            <button>Войти</button>
            <ul>
                <li>О нас</li>
                <li>Турниры</li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default UiHeader;
