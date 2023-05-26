import { useState } from "react";
import { data } from "../../assets/data/actividades.js";
import { nanoid } from "nanoid";
import TablaHorarios from "../TablaHorarios";

export default function Horarios() {

    const [actividades, setActividades] = useState(data.map((actividad, index) => {
        if (index === 0) {
            return {
                id: actividad.id,
                titulo: actividad.titulo,
                clases: actividad.clases,
                isShown: true
            }
        } else {
            return {
                id: actividad.id,
                titulo: actividad.titulo,
                clases: actividad.clases,
                isShown: false
            }
        }
    })
    );

    const botones = actividades.map(actividad => {

        return (
            <div
                key={nanoid()}
                className={`btn-actividad ${actividad.isShown && "btn-actividad__selected"}`}
                id={actividad.id}
                onClick={handleClick}
            // isShown={false}
            >
                {actividad.titulo}
            </div>
        )
    });

    const tablas = actividades.map(actividad => {
        return (
            <TablaHorarios
                clases={actividad.clases}
                titulo={actividad.titulo}
                isShown={actividad.isShown}
                key={nanoid()}
            />
        )
    })

    function handleClick(e) {
        const id = e.target.id;
        setActividades((prevActividades) => {
            const newActividades = prevActividades.map((act) => {
                if (act.id === id) {
                    return { ...act, isShown: true }
                } else {
                    return { ...act, isShown: false }
                }
            })
            return newActividades
        })
    }

    return (
        <section className="bg-neutro py-8 font-poppins text-slate-50">
            <div className="max-w-screen-2xl mx-auto  " >
                <div className="p-8 text-center lg:text-xl ">
                    <h2 className="titulo mb-6 ">GRILLA DE HORARIOS</h2>

                    <div className="my-8 text-color-2 flex  justify-center gap-8 ">
                        <i className="fa-sharp fa-regular fa-clock self-center text-5xl lg:text-7xl "></i>
                        <div className="text-left font-bold">
                            <p>Lunes a viernes: 7:30 a 22:00</p>
                            <p>Sábado: 7:30 a 17:00</p>
                        </div>
                    </div>

                    <p>Contamos con una amplia variedad de horarios ¡Encontrá el que mejor se adapte a tu rutina!</p>
                </div>
                <div className="actividades flex flex-wrap gap-3 items-center justify-center">
                    {botones}
                </div>
                <div className="mx-auto">
                    {tablas}
                </div>
            </div>
        </section>
    )
}
