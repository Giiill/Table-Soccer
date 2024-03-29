import Modal from '@mui/material/Modal';
import Style from '../../styles/login.module.scss';

type PropsModalWindow = {
    isOpen: boolean,
    handleModal: (isOpen: boolean) => void
};

function Login(props: PropsModalWindow) {
    return (
        <Modal
            open={props.isOpen}
            onClose={() => props.handleModal(false)} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                <div className={Style.container}>
                    <h2>Авторизация</h2>
                    <form className={Style.formGroup} id="loginForm">
                        <div className={Style.formGroup}>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className={Style.formGroup}>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className={Style.formGroup}>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
        </Modal>
    );
}

export default Login;