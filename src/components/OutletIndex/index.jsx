import { Link } from "react-router-dom"


export default function OutletIndex() {
    return (
        <div className="text-center text-slate-50 text-xl">
            <img src="src/assets/images/atlas.svg" className="mx-auto w-1/4" />
            <h2 className="font-bold mb-4">Elige una actividad para más información.</h2>
            <p> Consulta la <Link to="/Grilla" className="text-color-2 underline hover:text-color-3">Grilla de Horarios aquí</Link></p>
        </div>
    )
}
