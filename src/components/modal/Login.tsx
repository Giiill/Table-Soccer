import Modal from '@mui/material/Modal';
import Style from '../../styles/login.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { FormEvent } from 'react';
import { MD5 } from 'crypto-js';
import { userSliceActions } from '../../store/user/userSlice';
import { useDispatch } from "react-redux";
import { modalSliceActions } from '../../store/modal/modalSlice';

type PropsModalWindow = {
    isOpen: boolean,
    handleModal: (isOpen: boolean) => void
};

function Login(props: PropsModalWindow) {
    const dispatch = useDispatch();

    const handleSendAutorizate = () => {
      dispatch(userSliceActions.setLoginStatus())
    };

    const handleModalLog = () => {
        dispatch(modalSliceActions.toggleAuthModal())
    };

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,isError] = useState(false);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postData()
    };

    const postData = async () => {
        let pass = MD5(password).toString();
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post('http://188.225.34.199:8000/auth', {
                username: {username},
                password: {pass}
            });
            if (response.status === 200) {
                handleSendAutorizate();
                handleModalLog()
                isError(false)
            }
        } catch (error) {
            console.log(error)
            isError(true)
        }
    };


    return (
        <Modal
            open={props.isOpen}
            onClose={() => props.handleModal(false)} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                <div className={Style.container}>
                    <h2>Авторизация</h2>
                    {(error) && <h3 className={Style.error}>Неправильный логин или пароль</h3>}
                    <form className={Style.formGroup} id="loginForm" onSubmit={handleSubmit}>
                        <div className={Style.formChild}>
                            <input 
                                type="text" 
                                id="username" 
                                name="username"
                                placeholder='Имя пользователя'
                                onChange={(e) => {setUsername(e.target.value.replace(/[^\w\s]/g,''))}} 
                                value={username}
                                required 
                            />
                        </div>
                        <div className={Style.formChild}>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder='Пароль' 
                                onChange={(e) => {setPassword(e.target.value.replace(/[^\w\s]/g,''))}} 
                                value={password}
                                required 
                            />
                        </div>
                        <div className={Style.formChild}>
                            <button type="submit">Войти</button>
                        </div>
                    </form>
                </div>
        </Modal>
    );
}

export default Login;