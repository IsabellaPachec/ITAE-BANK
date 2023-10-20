import Style from './SegundaSessao.module.css';
import { AiOutlinePercentage } from "react-icons/ai";
import { IoFingerPrintOutline } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { BsPersonBadgeFill } from "react-icons/bs";
import { IoLogoBitcoin } from "react-icons/io";
import { Link } from 'react-router-dom';
function SegundaSection() {
    return (
        <div className={Style.sectionone}>
            <div className={Style.textinf}>
                <p><span className={Style.destacado}>Planeje</span> e <span className={Style.destacado}>invista</span> com nossos serviços </p>
                <span className={Style.registre}>
                    <Link to="/Registro" className={Style.link}>REGISTRE-SE</Link>
                </span>
            </div>

            <div className={Style.containerServicos}data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500">
                <div class={Style.servicos}>
                    <div className={Style.item0}>&nbsp;
                        <div className={Style.icon}><BsCreditCardFill /></div>
                        <div className={Style.servicoinf}><p>Cartão de crédito sem anuidade</p></div>
                    </div>
                    <div className={Style.item1}>&nbsp;
                        <div className={Style.icon}><IoFingerPrintOutline /></div>
                        <div className={Style.servicoinf}><p>Mais segurança</p></div>
                    </div>
                    <div className={Style.item2}>&nbsp;
                        <div className={Style.icon}><BsPersonBadgeFill /></div>
                        <div className={Style.servicoinf}><p>Conta digital MEI</p></div>
                    </div>
                    <div className={Style.item3}>&nbsp;
                        <div className={Style.icon}><IoLogoBitcoin /></div>
                        <div className={Style.servicoinf}><p>Tecnologia na palma da sua mão</p></div>
                    </div>
                    <div className={Style.item4}>&nbsp;
                        <div className={Style.icon}><AiOutlinePercentage /></div>
                        <div className={Style.servicoinf}><p>Conta 100% gratuita</p></div>
                    </div>
                    <div className={Style.item5}>&nbsp;
                        <div className={Style.icon}><AiOutlineStock /></div>
                        <div className={Style.servicoinf}><p>Rendimento do seu dinheiro</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SegundaSection