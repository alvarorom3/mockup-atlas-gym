import { NavLink, Outlet, } from "react-router-dom"
import { nanoid } from "nanoid"
import Header from "../../components/Header"
import NewsLetter from "../../components/NewsLetter"
import Footer from "../../components/Footer"
import { data } from "../../assets/data/actividades"




export default function Actividades() {


    return (
        <div>
            <Header />

            <main className="bg-neutro py-12 text-color-2 font-poppins">
                <section className="max-w-screen-2xl mx-auto md:grid md:grid-cols-4">

                    <div className="  text-center  flex flex-wrap md:text-xl md:flex-col">

                        {data.map((actividad) => (


                            <NavLink
                                key={nanoid()}
                                to={`actividad/${actividad.id}`}
                                className="m-4 bg-color-1 md:m-0"
                            >
                                {({ isActive, isPending }) => (
                                    <div className={` p-4  hover:bg-color-2 hover:text-neutro capitalize ${isActive ? "bg-color-2 text-neutro" : ""} `}>
                                        {actividad.titulo}
                                    </div>
                                )}
                                {/* <div className=" p-4  hover:bg-color-2 hover:text-neutro capitalize ">
                                    {actividad.titulo}
                                </div> */}
                            </NavLink>


                        ))}

                    </div>

                    <div className="col-span-3 my-8 md:m-0">
                        <Outlet />
                    </div>
                </section>


            </main>

            <NewsLetter />
            <Footer />

        </div>
    )
}