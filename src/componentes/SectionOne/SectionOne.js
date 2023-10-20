import Style from './SectionOne.module.css'
import Phone from './img/phoneInicio.png'

function SectionOne() {
    return (
        <section className={Style.SectionOne}>
            <div className={Style.elementosheader}>
                <div className={Style.tituloHeader}>
                    <p>O banco que <span className={Style.destacado}>entende</span> e <span className={Style.destacado}>apoia</span> seus objetivos.</p>
                    <span className={Style.subtitulo}> venha fazer parte você também!</span>
                        <span className={Style.registre}>REGISTRE-SE</span>
    
                </div>

                <div className={Style.imgHeader}>
                    <img src={Phone} alt="telefone celular com cartões saindo da tela" />
                </div>

            </div>
        </section>
    );
}

export default SectionOne