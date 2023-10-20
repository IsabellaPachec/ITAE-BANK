import Style from './NavBar.module.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={Style.Navgation}>
            <div className={Style.logo}>
                <h1>ITAE</h1>
            </div>
            <ul className={Style.linksbar}>
                <li><Link to="/" className={Style.link}>Home</Link></li>
                <li>APP</li>
                <li>Contas</li>
                <li>Fale Conosco</li>
            </ul>

            <div className={Style.login}>
            <span><Link to="/login" className={Style.link}>LOGIN</Link></span>
            </div>
        </nav>
    )
}

export default NavBar