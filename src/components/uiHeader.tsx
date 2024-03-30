import Style from "../styles/header.module.scss";
import globalStyle from "../styles/global.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../images/Logo.svg"
import { useDispatch, useSelector } from "react-redux";
import Login from "./modal/Login";
import { selectModalStatus } from "../store/modal/modalSelectors";
import { modalSliceActions } from "../store/modal/modalSlice";
import Registration from "./modal/Registration";
import { Link } from "react-router-dom";
import  Menu  from '../components/modal/Menu';
import { selectLoginStatus } from "../store/user/userSelectors";
import { userSliceActions } from "../store/user/userSlice";
import { useRef } from "react";

function UiHeader() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalStatus);
  const ref = useRef<HTMLDivElement>(null);


  const scrollAboutUs = () => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
  } 

  const handleModalReg = () => {
    dispatch(modalSliceActions.toggleRegisterModal());
  }

  const handleModalLog = () => {
    dispatch(modalSliceActions.toggleAuthModal());
  }

  const handleModalMenu = () => {
    dispatch(modalSliceActions.toggleMenuModal());
  }

  const status = useSelector(selectLoginStatus);

  const handleSendAutorizate = () => {
    dispatch(userSliceActions.setLoginStatus())
  };

  return (
    <header>
      <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
        <Link to="/" className={Style.logo}>
          <img src={Logo} alt="" />
        </Link>

        <nav className={Style.nav}>
          {(status)?
          <>
          <button onClick={handleSendAutorizate}>Выход</button>
          <button>Создать матч</button>
            </>
          :   <>        
            <button onClick={handleModalReg}>Регистрация</button>
            <button onClick={handleModalLog}>Войти</button>
            </>
          }
          <ul>
            <li onClick={() => {scrollAboutUs()}}>О нас</li>
           <li> <Link to="/tournirs" className={Style.logo}>Турниры</Link></li>
            
          </ul>
        </nav>

        <button className={Style.burger} onClick={handleModalMenu}>
          <RxHamburgerMenu />
        </button>
      </div>
      <Menu isOpen={isOpen.isMenuModalOpen} handleModal={handleModalMenu}/>
      <Login isOpen={isOpen.isAuthModalOpen} handleModal={handleModalLog} />
      <Registration isOpen={isOpen.isRegisterModalOpen} handleModal={handleModalReg} />
    </header>
  );
}

export default UiHeader;
