import { nanoid } from "nanoid";


function compararNum(a, b) {
    return a - b
}

export default function TablaHorarios({ clases, titulo, isShown }) {

    function horas() {
        let horaSet = new Set();
        let horaArr = []
        clases.map(clase => {
            clase.horas.map(hora => {
                horaSet.add(hora);
            })
        })
        horaArr = [...horaSet]
        horaArr.sort(compararNum)

        return horaArr
    };

    let horarios = horas();

    function getProfe(classes, hora, dia, nombreClase) {
        const clase = classes.find((clase) => clase.dia[dia] && clase.horas.includes(hora));
        if (clase) {
            return (
                <>
                    <p>Profe {clase.profe}</p>
                    <p><strong className="capitalize">{nombreClase}</strong></p>
                </>
            )
        }
        return '-'
    }

    return (
        <div className={`${isShown ? "animate-tableShow flex flex-col gap-3 flex-wrap" : "hidden"} my-4`} >

            <table className="overflow-x-auto">
                <caption className="mb-4 mt-8 font-alfa text-color-2 text-xl tracking-wide uppercase">{titulo}</caption>
                <thead>
                    <tr className="bg-color-3 ">
                        <th className=" border px-4 py-2 hidden md:table-cell">Hora</th>
                        <th className=" border px-4 py-2 hidden md:table-cell">Lunes</th>
                        <th className=" border px-4 py-2 hidden md:table-cell">Martes</th>
                        <th className=" border px-4 py-2 hidden md:table-cell">Miércoles</th>
                        <th className=" border px-4 py-2 hidden md:table-cell">Jueves</th>
                        <th className=" border px-4 py-2 hidden md:table-cell">Viernes</th>
                        <th className=" border px-4 py-2 hidden md:table-cell">Sábado</th>
                    </tr>
                </thead>
                <tbody>
                    {horarios.map(hora => {

                        return (
                            <tr key={nanoid()} className="bg-color-1">
                                <th className="border bg-color-3 px-4 py-2" data-cell="hora">
                                    {hora}:00
                                </th>
                                <td className="celda-info" data-cell="lunes">
                                    {getProfe(clases, hora, 'lunes', titulo)}
                                </td>
                                <td className="celda-info" data-cell="martes">
                                    {getProfe(clases, hora, 'martes', titulo)}
                                </td>
                                <td className="celda-info" data-cell="miercoles">
                                    {getProfe(clases, hora, 'miercoles', titulo)}
                                </td>
                                <td className="celda-info" data-cell="jueves">
                                    {getProfe(clases, hora, 'jueves', titulo)}
                                </td>
                                <td className="celda-info" data-cell="viernes">
                                    {getProfe(clases, hora, 'viernes', titulo)}
                                </td>
                                <td className="celda-info" data-cell="sabado">
                                    {getProfe(clases, hora, 'sabado', titulo)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


        </div>
    )
}
