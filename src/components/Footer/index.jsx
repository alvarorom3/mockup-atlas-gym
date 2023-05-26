import { Link } from "react-router-dom"
import icon from '../../assets/images/icon.svg'

export default function Footer() {
    return (
        <footer className="bg-color-2 py-16 px-4 font-poppins  tracking-wider">
            <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start justify-between">
                <div className="flex flex-col my-8 sm:m-0 ">
                    <Link to="/Planes" className="sm:mb-8">
                        <button className="btn-cta">Sumate</button>
                    </Link>
                    <div className="">
                        <h3 className="font-bold">Contacto</h3>
                        <address>
                            <p>1234 Elm Street, Cityville, ABC123</p>
                            <p>5678 Maple Avenue, Townville, XYZ789</p>
                            <p>+1 (555) 123-4567</p>
                            <p>atlasfitness@example.com</p>
                        </address>
                    </div>
                </div>
                <div className="links flex flex-col order-first sm:order-none text-color-1 font-bold lg:text-xl">
                    <ul className="">
                        <li className="">
                            <Link to="/Actividades" className=" ">
                                <div className=" p-2 hover:bg-color-1 hover:text-color-2 ">
                                    Actividades
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Grilla" className=" ">
                                <div className=" p-2 hover:bg-color-1 hover:text-color-2 ">
                                    Horarios
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contacto" className=" ">
                                <div className=" p-2 hover:bg-color-1 hover:text-color-2 ">
                                    Contacto
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/AboutUs" className=" ">
                                <div className=" p-2 hover:bg-color-1 hover:text-color-2 ">
                                    Sobre nosotros
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="logo self-center sm:self-start "><a href="/">
                    <img src={icon} className=" w-40" />
                </a></div>
            </div>
        </footer>
    )
}
