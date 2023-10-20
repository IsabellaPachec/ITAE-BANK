import Style from './QuartaSessao.module.css'
import Card from './img/totem card.png'

function QuartSessao(){
    return(
        <div className={Style.quartasessao}>
            <div className={Style.textquarta}>
                <p>Transforme as suas compras em experiências ainda mais gratificantes com nossas vantagens exlusivas</p>
            </div>

            <div className={Style.imagemcard}>
                <img src={Card} alt="totem card" />
            </div>
        </div>
    )
}

export default QuartSessao