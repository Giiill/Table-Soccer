import Style from "../styles/header.module.scss";
import globalStyle from "../styles/global.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../images/Logo.svg"
import { useDispatch, useSelector } from "react-redux";
import Login from "./modal/Login";
import { selectModalStatus } from "../store/modal/modalSelectors";
import { modalSliceActions } from "../store/modal/modalSlice";
import Registration from "./modal/Registration";


function UiHeader() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalStatus);

  const handleModalReg = () => {
    dispatch(modalSliceActions.toggleRegisterModal());
  }

  const handleModalLog = () => {
    dispatch(modalSliceActions.toggleAuthModal());
  }

  // const status = useSelector(selectLoginStatus);

  // const handleSendAutorizate = () => {
  //   dispatch(setLoginStatus())
  // };

  return (
    <header>
      <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
        <div className={Style.logo}><img src={Logo} alt="" /></div>

        <nav className={Style.nav}>

          <button onClick={handleModalReg}>Регистрация</button>
          <button onClick={handleModalLog}>Войти</button>
          {/* <button onClick={handleSendAutorizate}>Создать матч</button> */}

          <ul>
            <li>О нас</li>
            <li>Турниры</li>
          </ul>
        </nav>

        <button className={Style.burger}>
          <RxHamburgerMenu />
        </button>
      </div>
      <Login isOpen={isOpen.isAuthModalOpen} handleModal={handleModalLog} />
      <Registration isOpen={isOpen.isRegisterModalOpen} handleModal={handleModalReg} />
    </header>
  );
}

export default UiHeader;
