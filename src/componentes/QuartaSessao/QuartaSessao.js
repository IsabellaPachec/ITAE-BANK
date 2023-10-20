import Style from './QuartaSessao.module.css'
import Card from './img/totem card.png'

function QuartSessao(){
    return(
        <div className={Style.quartasessao}>
            <div className={Style.textquarta}>
                <p>Com nossa conta PJ você possui a facilidade de administrar sua conta em qualquer lugar. Além de vantagens exclusivas!</p>
            </div>

            <div className={Style.imagemcard}>
                <img src={Card} alt="totem card" />
            </div>
        </div>
    )
}

export default QuartSessao