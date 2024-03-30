import globalStyle from "../styles/global.module.scss";
import Style from "../styles/footer.module.scss";
import Logo from "../images/Logo.svg"

function UiFooter() {
    return (
        <footer id="footer">
            <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
                <div className={Style.logo}><img src={Logo} alt="" /></div>
                <p>Сайт Table-Soccer посвящен любителям и профессионалам настольного футбола. <br />
                    Мы предоставляем актуальную информацию о турнирах, соревнованиях, правилах и многое другое.
                    Присоединяйтесь к нашему сообществу!</p>
                <p> ©2024 Все права защищены</p>
            </div>
        </footer>
    );

};

export default UiFooter;