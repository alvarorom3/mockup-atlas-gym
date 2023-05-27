import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import icon from '../../assets/images/icon.svg'
import { useModals } from "../../hooks/useModals"
import Modal from "../Modal"


export default function Header() {
    const [isOpen, openModal, closeModal] = useModals(false);
    const [sticky, setSticky] = useState({});

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            if (windowHeight > 150 && document.documentElement.scrollHeight > 1500) {
                setSticky({
                    header: "bg-transparent w-full fixed top-0 left-0 z-50 animate-navDown",
                    content: "bg-color-2 rounded-b-lg"
                })
            } else if (windowHeight > 50) {
                setSticky({ header: "relative", content: "" })
            }
        }
    };

    const modalStyle = {
        container: "pt-16 relative left-[30%] bg-color-2 h-screen w-[70%] ",
        bgColor: "bg-neutro/75 "
    }

    return (

        <header className={`bg-color-2 ${sticky.header}`}  >
            <div className={`max-w-screen-2xl mx-auto ${sticky.content} flex items-center justify-between `}>
                <div className="logo px-4 py-4 md:py-0">
                    <Link to="/">
                        <img src={icon} className="w-40" />
                    </Link>
                </div>


                <nav className="nav-link font-poppins text-color-1  tracking-wider ">
                    <div
                        className="mx-8 text-4xl hover:scale-125 duration-150 ease-in cursor-pointer md:m-0 md:hidden"
                        aria-label="Open the menu"
                        onClick={openModal}
                    >
                        <i className="fa-solid fa-bars" aria-hidden="true"></i>
                    </div>




                    <Modal
                        isOpen={isOpen}
                        closeModal={closeModal}
                        modalStyle={modalStyle}
                    >
                        <ul className="text-center lg:text-xl">
                            <li className="">
                                <Link to="/mockup-atlas-gym/actividades" className=" ">
                                    <div className=" p-2 hover:bg-color-1 hover:text-color-2">
                                        Actividades
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/mockup-atlas-gym/grilla" className=" ">
                                    <div className=" p-2 hover:bg-color-1 hover:text-color-2 ">
                                        Horarios
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="/mockup-atlas-gym/contacto" className=" ">
                                    <div className=" p-2 hover:bg-color-1 hover:text-color-2 ">
                                        Contacto
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/mockup-atlas-gym/aboutUs" className=" ">
                                    <div className=" p-2 hover:bg-color-1 hover:text-color-2 ">
                                        Sobre nosotros
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/mockup-atlas-gym/planes" className=" ">
                                    <div className="my-4 px-2">
                                        <button className="btn-cta w-full">Sumate</button>
                                    </div>
                                </Link>
                            </li>
                        </ul>


                    </Modal>



                    <ul className="hidden md:flex items-center font-bold text-sm lg:text-lg">
                        <li className="">
                            <Link to="/mockup-atlas-gym/actividades" className=" ">
                                <div className="leading-10 py-8 px-2 hover:bg-color-1 hover:text-color-2 ">
                                    Actividades
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mockup-atlas-gym/grilla" className=" ">
                                <div className="leading-10 py-8 px-2 hover:bg-color-1 hover:text-color-2 ">
                                    Horarios
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mockup-atlas-gym/contacto" className=" ">
                                <div className="leading-10 py-8 px-2 hover:bg-color-1 hover:text-color-2 ">
                                    Contacto
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mockup-atlas-gym/aboutUs" className=" ">
                                <div className="leading-10 py-8 px-2 hover:bg-color-1 hover:text-color-2 ">
                                    Sobre nosotros
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mockup-atlas-gym/planes" className=" ">
                                <div className="px-2">
                                    <button className="btn-cta">Sumate</button>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
