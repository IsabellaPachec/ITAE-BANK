import SectionOne from '../componentes/SectionOne/SectionOne';
import SectionTwo from '../componentes/SegundaSessao/SegundaSessao';
import TerceiraSection from '../componentes/TerceiraSection/TerceiraSection';
import QuartSessao from '../componentes/QuartaSessao/QuartaSessao';
import Contas from '../componentes/contas/Contas';

function HomeConteudo() {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <TerceiraSection />
            <QuartSessao />
            <Contas />
        </div>
    )
}
export default HomeConteudo