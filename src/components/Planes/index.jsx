import React from 'react'

export default function Planes() {
    return (
        <section className="bg-neutro font-poppins">
            <div className="max-w-screen-2xl mx-auto p-8 flex flex-col lg:flex-row justify-between items-center ">
                <div className="mb-12 text-center text-slate-50 lg:text-xl lg:mr-4 lg:text-left lg:self-start">
                    <h2 className="titulo mb-4">ELEGÍ TU PLAN </h2>
                    <p>Todo lo que buscás en un solo lugar.</p>
                    <p>Estás a un click de distancia de asociarte.</p>
                </div>
                <div className="flex flex-col justify-between gap-8 md:flex-row">
                    <div className="plan1 mx-auto bg-color-2 rounded-md p-4 border-4 border-color-1 text-gray-950 text-xl">
                        <p className="font-light">Mensual</p>
                        <h3 className="text-center text-2xl font-bold uppercase tracking-wide">Plan Plus</h3>
                        <div className="py-8 my-4 border-y-4 border-color-1">
                            <p className="text-center text-xl m-4">$ <span className="font-bold text-4xl">5300</span> /mes</p>
                            <button className="w-full my-4 btn-cta" >Asociate</button>
                        </div>
                        <div>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1 "></i> Acceso a todas las sedes
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1"></i> Todas las ctividades
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1"></i> App Oficial
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-xmark text-color-3"></i> 5 clases gratis para tus amigos
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-xmark text-color-3"></i> Sillones de masaje
                            </p>
                        </div>
                    </div>
                    <div className="plan1 mx-auto bg-color-2 rounded-md p-4 border-4 border-color-1 text-gray-950 text-xl">
                        <p className="font-light">Mensual</p>
                        <h3 className="text-center text-2xl font-bold uppercase tracking-wide">Plan Total</h3>
                        <div className="py-8 my-4 border-y-4 border-color-1">
                            <p className="text-center text-xl m-4">$ <span className="font-bold text-4xl">5900</span> /mes</p>
                            <button className="w-full my-4 btn-cta" >Asociate</button>
                        </div>
                        <div>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1"></i> Acceso a todas las sedes
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1"></i> Todas las ctividades
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1"></i> App Oficial
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1"></i> 5 clases gratis para tus amigos
                            </p>
                            <p>
                                <i className="fa-regular fa-circle-check text-color-1"></i> Sillones de masaje
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
