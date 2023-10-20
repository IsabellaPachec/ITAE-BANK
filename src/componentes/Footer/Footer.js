import Style from './Footer.module.css'
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

function Footer(){
    return(
        <footer>
            <div className={Style.posic}>
                <div className={Style.div1}>
                    <h1>ITAE</h1>
                    
                </div>

                <div className={Style.div2}>
                    <ul>
                        <li><h4>Contato</h4></li>
                        <li>suportItae@gmail.com</li>
                        <li>(11) 99999-9999</li>
                        <li>Rua Tito 54, Lapa-SP</li>
                    </ul>
                </div>

                <div className={Style.div3}>
                    <ul>
                        <li><h4>Outras Informações</h4></li>
                        <li>Politica de privasidade</li>
                        <li>Segurança</li>
                        <li>Rua Tito 54, Lapa-SP</li>
                    </ul>
                </div>

                <div className={Style.social}>
                        <AiFillGithub/>
                        <AiFillLinkedin/>
                        <AiFillInstagram/>
                    </div>

                <hr />
            </div>

            <h5>Desenvolvido por IsabelaPachec</h5>
        </footer>
    )
};

export default Footer