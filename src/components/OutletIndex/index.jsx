import { Link } from "react-router-dom"
import icon from "../../assets/images/atlas.svg"


export default function OutletIndex() {
    return (
        <div className="text-center text-slate-50 text-xl">
            <img src={icon} className="mx-auto w-1/4" />
            <h2 className="font-bold mb-4">Elige una actividad para más información.</h2>
            <p> Consulta la <Link to="/mockup-atlas-gym/grilla" className="text-color-2 underline hover:text-color-3">Grilla de Horarios aquí</Link></p>
        </div>
    )
}
