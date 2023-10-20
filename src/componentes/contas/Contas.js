import Style from './Contas.module.css'
import PJ from './img/pj.png'
import Digital from './img/digital.png'

function Contas() {
    return (
        <div className={Style.contas}>
            <div className={Style.pj} data-aos="fade-up"
                data-aos-offset="600"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                data-aos-anchor-placement="top-bottom">
                <img src={PJ} alt="conta pj" />
            </div>

            <div className={Style.digital} data-aos="fade-down"
                data-aos-offset="200"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                data-aos-anchor-placement="top-bottom">
                <img src={Digital} alt="digital" />
            </div>
        </div>
    )
}

export default Contas