import Style from "../styles/header.module.scss";
import globalStyle from "../styles/global.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../images/Logo.svg"
import { useDispatch, useSelector } from "react-redux";
import Login from "./modal/Login";
import { selectModalStatus } from "../store/modal/modalSelectors";
import { modalSliceActions } from "../store/modal/modalSlice";


function UiHeader() {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectModalStatus);

    const handleModal = () => {
        dispatch(modalSliceActions.toggleModal()); 
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
        
            <button onClick={handleModal}>Войти</button>
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
      <Login isOpen={isOpen} handleModal={handleModal} />
    </header>
  );
}

export default UiHeader;
