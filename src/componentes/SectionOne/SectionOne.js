import Style from './SectionOne.module.css'
import Phone from './img/phoneInicio.png'
import { Link } from 'react-router-dom';

function SectionOne() {
    return (
        <section className={Style.SectionOne}>
            <div className={Style.elementosheader}>
                <div className={Style.tituloHeader}>
                    <p>O banco que <span className={Style.destacado}>entende</span> e <span className={Style.destacado}>apoia</span> seus objetivos.</p>
                    <span className={Style.subtitulo}> venha fazer parte você também!</span>
                    <span className={Style.registre}>
                        <Link to="/Registro" className={Style.link}>REGISTRE-SE</Link>
                    </span>

                </div>

                <div className={Style.imgHeader}>
                    <img src={Phone} alt="telefone celular com cartões saindo da tela" />
                </div>

            </div>
        </section>
    );
}

export default SectionOne