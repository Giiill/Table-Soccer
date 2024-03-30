import Modal from '@mui/material/Modal';
import Style from '../../styles/menu.module.scss';
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../store/modal/modalSlice";

type PropsModalWindow = {
    isOpen: boolean,
    handleModal: (isOpen: boolean) => void
};

function Menu(props: PropsModalWindow) {
    const dispatch = useDispatch();

    const handleModalReg = () => {
        dispatch(modalSliceActions.toggleRegisterModal());
        dispatch(modalSliceActions.toggleMenuModal());
    }

    const handleModalLog = () => {
        dispatch(modalSliceActions.toggleAuthModal());
        dispatch(modalSliceActions.toggleMenuModal());
    }
    return (
        <Modal
            open={props.isOpen}
            onClose={() => props.handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={Style.container}>
                <nav className={Style.nav}>

                    <button onClick={handleModalReg}>Регистрация</button>
                    <button onClick={handleModalLog}>Войти</button>
                    {/* <button onClick={handleSendAutorizate}>Создать матч</button> */}

                    <ul>
                        <li>О нас</li>
                        <li>Турниры</li>
                    </ul>
                </nav>
            </div>
        </Modal>
    )
}

export default Menu;