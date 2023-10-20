import Style from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={Style.Navgation}>
            <div className={Style.logo}>
                <h1>ITAE</h1>
            </div>
            <ul className={Style.linksbar}>
                <li>Home</li>
                <li>Sobre nós</li>
                <li>Serviçõs</li>
                <li>Fale Conosco</li>
            </ul>

            <div className={Style.login}>
                <span>LOGIN</span>
            </div>
        </nav>
    )
}

export default NavBar