import Style from './Contas.module.css'
import PJ from './img/pj.png'
import Digital from './img/digital.png'

function Contas(){
    return(
        <div className={Style.contas}>
            <div className={Style.pj}>
                <img src={PJ} alt="conta pj" />
            </div>

            <div className={Style.digital}>
                <img src={Digital} alt="digital" />
            </div>
        </div>
    )
}

export default Contas