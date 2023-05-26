import { Link } from "react-router-dom"

import Header from "../../components/Header"
import NewsLetter from "../../components/NewsLetter"
import Footer from "../../components/Footer"
import Galeria from "../../components/Galeria"

export default function AboutUs() {
    return (
        <div>
            <Header />

            <main className="bg-neutro pt-16 text-slate-50 text-lg md:text-2xl font-poppins ">
                <article className="max-w-screen-xl mx-auto space-y-8 px-8 mb-24 2xl:px-0">

                    <h1 className="titulo text-center my-8 ">Gimnasio Atlas</h1>

                    <p>Bienvenido a <span className="text-color-2 font-bold">Gimnasio Atlas</span>, su lugar para la salud, el estado físico y la inclusión. Ofrecemos una  amplia variedad de actividades para todos los niveles de condición física.</p>

                    <p>En <span className="text-color-2 font-bold">Atlas</span>, priorizamos tu bienestar. Nuestro dedicado equipo de profesores está para guiarlo y apoyarlo en su viaje a una <span className="font-bold">mejor calidad de vida</span>. Ya sea que sea un principiante o un atleta experimentado, le brindamos un buen ambiente donde puede prosperar.</p>

                    <div className="">
                        <img src="src/assets/images/galery/trainner-thumb.jpg" alt="" className="md:w-1/3 md:float-right clear-left md:ml-8" />
                    </div>

                    <p>Nuestro gimnasio ofrece una <Link to="/Actividades" className="text-color-2 underline font-bold hover:text-color-3">amplia variedad de actividades</Link> para mantenerte motivado y comprometido. Desde entrenamientos de alta intensidad hasta yoga y entrenamiento de fuerza, hay algo para todos. </p>

                    <p>No importa dónde se encuentre en su viaje de acondicionamiento físico, tenemos las herramientas y la experiencia para ayudarlo. Nuestros <span className="font-bold">entrenadores experimentados</span> crearán planes personalizados adaptados a sus objetivos. Estamos comprometidos con su bienestar general, proporcionando un <span className="font-bold">enfoque holístico</span> de la aptitud física que se extiende más allá del ejercicio.</p>

                    <div className="">
                        <img src="src/assets/images/galery/room_maquinas-thumb.jpg" alt="" className=" md:w-1/3 md:float-left clear-right md:mr-8 " />
                    </div>

                    <p className="">Sumate a nuestra comunidad de entusiastas de la salud. Conéctese con personas de ideas afines, celebre los logros y encuentre apoyo en cada paso del camino. Experimente las instalaciones de <span className="text-color-2 font-bold">Gimnasio Atlas</span> y descubra el poder transformador del ejercicio.</p>

                    <p>Visítenos en nuestra sede o <Link to="/Contacto" className="text-color-2 underline font-bold hover:text-color-3">contáctenos</Link> para comenzar su viaje de acondicionamiento físico. Juntos, logremos una salud y bienestar óptimos en <span className="text-color-2 font-bold">Atlas</span>.</p>
                </article>



                <Galeria />

            </main>

            <NewsLetter />
            <Footer />

        </div>
    )
}