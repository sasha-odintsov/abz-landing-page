import './Header.scss';
import logo from '../../img/Logo.svg';
import Button from '../Button/Button';

function Header() {
    return(
        <header className="header">
            <div className="header-content wrapper">
                <div className="header-primary-wrap">
                    <img src={logo} alt="logo" className="header-logo"/>
                </div>
                <div className="header-secondary-wrap">
                    <Button type="yellow" txt="Users" clss="button"/>
                    <Button type="yellow" txt="Sing up" clss="button"/>
                </div>
            </div>
        </header>
    )
}

export default Header;