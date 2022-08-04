import './Header.scss';
import logo from '../../img/http.png';
import Button from '../Button/Button';

function Header() {
    function handleClickReload() {
        window.location.reload();
    }
    return(
        <header className="header">
            <div className="header-content wrapper">
                <div onClick={handleClickReload} className="header-primary-wrap">
                    <img src={logo} alt="logo" className="header-logo"/>
                </div>
                <div className="header-secondary-wrap">
                    <a href="#users">
                        <Button txt={"Users"} />
                    </a>
                    <a href="#sing-up">
                        <Button txt={"Sing up"} />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;