import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Planes from "../../components/Planes";
import Horarios from "../../components/Horarios";
import Galeria from "../../components/Galeria";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import hero from "../../assets/images/hero.jpg"
import hero800 from "../../assets/images/hero-800.jpg"

export default function Home() {

    return (
        <div>
            <Header />

            <main>
                <section className="bg-neutro text-color-2 font-poppins">
                    <div className="max-w-screen-2xl mx-auto relative">
                        <picture>
                            <source media="(max-width: 767px)" srcSet="https://ik.imagekit.io/rld8rfell/atlas-actividades/hero-800.jpg?updatedAt=1685403034567" />
                            <source media="(min-width: 768px)" srcSet="https://ik.imagekit.io/rld8rfell/atlas-actividades/hero.jpg?updatedAt=1685403034929" />
                            <img src="https://ik.imagekit.io/rld8rfell/atlas-actividades/hero.jpg?updatedAt=1685403034929" className="relative object-cover object-botom mx-auto" />
                        </picture>
                        <div className="w-full h-full absolute opacity-90 bg-gradient-to-t from-neutro via-neutro  top-0 left-0">

                        </div>
                        <div className="w-1/2 absolute top-1/2 left-[15%] text-sm sm:text-xl ">
                            <h1 className='titulo font-bold mb-4'>Gimnasio Atlas</h1>
                            <p>Su viaje comienza aquí: experimente salud, fuerza y diversidad en Atlas</p>
                            <Link to="/mockup-atlas-gym/planes">
                                <button className="btn-cta hover:scale-none  hover:bg-color-1 w-full mt-8">
                                    Asociate
                                </button>
                            </Link>
                        </div>

                    </div>
                </section>
                <section className="bg-neutro font-poppins font-light">
                    <div className="max-w-screen-2xl mx-auto p-16 text-center">
                        <h2 className="titulo my-8">Instalaciones</h2>
                        <div className="text-center text-color-2 md:text-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="p-8">
                                <i className="fa-solid fa-wifi text-5xl lg:text-7xl mb-4"></i>
                                <p>Wifi</p>
                            </div>
                            <div className="p-8">
                                <i className="fa-solid fa-shower text-5xl lg:text-7xl mb-4"></i>
                                <p>Vestuarios</p>
                            </div>
                            <div className="p-8">
                                <i className="fa-solid fa-people-group text-5xl lg:text-7xl mb-4"></i>
                                <p>Profes siempre disponibles</p>
                            </div>
                            <div className="p-8">
                                <i className="fa-solid fa-pump-medical text-5xl lg:text-7xl mb-4"></i>
                                <p>Puntos de desinfeccion</p>
                            </div>
                            <div className="p-8">
                                <i className="fa-sharp fa-regular fa-clock text-5xl lg:text-7xl mb-4"></i>
                                <p>Amplio horario</p>
                            </div>
                            <div className="p-8">
                                <i className="fa-solid fa-hand-holding-heart text-5xl lg:text-7xl mb-4"></i>
                                <p>Beneficios</p>
                            </div>
                            <div className="p-8">
                                <i className="fa-solid fa-person-running text-5xl lg:text-7xl mb-4"></i>
                                <p>Diversidad de actividades</p>
                            </div>
                            <div className="p-8">
                                <i className="fa-solid fa-cloud-sun text-5xl lg:text-7xl mb-4"></i>
                                <p>Espacios a cielo abierto</p>
                            </div>
                        </div>
                    </div>
                </section >
                <Planes />
                <Horarios />
                <Galeria />
            </main>

            <NewsLetter />
            <Footer />

        </div>
    )
}
