import Style from './TerceiraSection.module.css'
import Estatistica from './img/estatistica.png'
import PhoneLuz from './img/phoneluz.png'

function TerceiraSection() {
    return (
        <div className={Style.terceirasection}>
            <div className={Style.tituloterceira}>
                <h1>App ITAE na palma da sua mão </h1>
            </div>
            <div className={Style.cdt}>
                <div className={Style.invista} data-aos="fade-left"
                    data-aos-offset="600">
                    <h3>Invista no app</h3>
                    <p>impulsione o crescimento dos seus investimentos e mantenha-se competitivo no mundo digital em constante evolução.</p>
                    <div className={Style.estatistica}>
                        <img src={Estatistica} alt="imagem direta do app" />
                    </div>
                </div>

                <div className={Style.celular}>
                    <img src={PhoneLuz} alt="telefone" />
                </div>

                <div className={Style.adm}  data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-offset="300"
                    data-aos-duration="500">
                    <h4>Administre seu dinheiro</h4>
                    <p>Administre suas finanças, seus bônus e o rendimento do seu dinheiro com apenas um clique. Simplifique sua vida financeira e alcance seus objetivos com facilidade.</p>
                </div>
            </div>
        </div>
    )
}
export default TerceiraSection