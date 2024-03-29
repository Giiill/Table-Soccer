import Style from "../styles/header.module.scss";
import globalStyle from "../styles/global.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../images/Logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { selectLoginStatus } from "../store/user/userSelectors";
import { userSliceActions } from "../store/user/userSlice";

const { setLoginStatus } = userSliceActions;

function UiHeader() {
  const dispatch = useDispatch();
  const status = useSelector(selectLoginStatus);

  const handleSendAutorizate = () => {
    dispatch(setLoginStatus())
  };

  return (
    <header>
      <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
        <div className={Style.logo}><img src={Logo} alt="" /></div>
        
        <nav className={Style.nav}>
        {(status)? 
          <button onClick={handleSendAutorizate}>Войти</button>:
          <button onClick={handleSendAutorizate}>Создать матч</button>
        }
          <ul>
              <li>О нас</li>
              <li>Турниры</li>
          </ul>
        </nav>
        
        <button className={Style.burger}>
            <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default UiHeader;
