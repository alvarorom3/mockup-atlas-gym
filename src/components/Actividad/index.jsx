import { Link, useLoaderData } from "react-router-dom"
import { data } from "../../assets/data/actividades";

export async function loader({ params }) {
    const actividad = await data.find((act) => act.id === params.actividadId)
    if (!actividad) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { actividad };
}


export default function Actividad() {
    const { actividad } = useLoaderData()

    return (
        <div className=" mx-8 md:text-xl">
            <h2 className="titulo text-center">{actividad.titulo}</h2>
            <img src={actividad.img} className="my-8 object-cover md:w-[70%] md:mx-auto " />
            <p className="mb-8">
                {actividad.descripcion}
            </p>
            <p className="text-center font-bold"> Consulta la <Link to="/mockup-atlas-gym/grilla" className="text-color-2 underline hover:text-color-3">Grilla de Horarios aquí</Link></p>

        </div>
    )
}
