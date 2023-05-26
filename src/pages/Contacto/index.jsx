import { useForm } from "../../hooks/useForm"
import { useModals } from "../../hooks/useModals"
import Modal from "../../components/Modal"
import Header from "../../components/Header"
import NewsLetter from "../../components/NewsLetter"
import Footer from "../../components/Footer"

const initialForm = {
    nombre: "",
    email: "",
    mensaje: ""
};

function validationsForm(form) {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
        errors.nombre = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.nombre.trim())) {
        errors.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto. Debe tener la estructura ejemplo@mail.com";
    }

    if (!form.mensaje.trim()) {
        errors.mensaje = "El campo 'Mensaje es requerido";
    } else if (!regexComments.test(form.mensaje.trim())) {
        errors.mensaje = "El campo 'Mensaje' no debe exceder 255 caracteres";
    }

    return errors
};

export default function Contacto() {

    const {
        form,
        loading,
        errors,
        response,
        handleBlur,
        handleChange,
        handleSubmit
    } = useForm(initialForm, validationsForm)

    const [isOpen, openModal, closeModal] = useModals(false);
    const [isOpenSucces, openModalSucces, closeModalSuccess] = useModals(false);


    const modalStyle = {
        bgColor: "",
        container: "absolute left-[66%] top-[60%]  text-center bg-color-1 shadow-sm shadow-neutro w-1/3 rounded-md"
    }
    const modalStyleSuccess = {
        bgColor: "",
        container: "absolute left-[66%] top-[60%]  text-center bg-color-2 shadow-sm shadow-neutro w-1/3 rounded-md"
    }

    return (
        <div>
            <Header />

            <main className="bg-neutro font-poppins text-slate-50 py-8">
                <section className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="contacto md:text-lg">
                        <h2 className="titulo my-4">Contacto</h2>
                        <p className="text-xl">Disfrutá de múltiples actividades deportivas para todas las edades.</p>
                        <div className="flex gap-4 mt-8 mb-4 font-light">
                            <i className="fa-solid fa-location-dot fa-2x self-center"></i>
                            <div>
                                <h3 className="font-bold text-2xl">Dirección</h3>
                                <address>
                                    <p>1234 Elm Street, Cityville, ABC123</p>
                                    <p>5678 Maple Avenue, Townville, XYZ789</p>
                                </address>
                            </div>
                        </div>
                        <div className="flex gap-4 my-4 font-light">
                            <i className="fa-solid fa-phone fa-2x self-center"></i>
                            <div>
                                <h3 className="font-bold text-2xl">Telefónos</h3>
                                <address>
                                    <p>+1 (555) 123-4567</p>
                                    <p>+1 (555) 987-6543</p>
                                </address>
                            </div>
                        </div>
                        <div className="flex gap-4 my-4 font-light">
                            <i className="fa-solid fa-envelope fa-2x self-center"></i>
                            <div>
                                <h3 className="font-bold text-2xl">Email</h3>
                                <address>
                                    <p>atlasfitness@example.com</p>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="titulo">Envianos un mensaje</h2>
                        <form
                            className=" flex flex-col text-neutro "
                            onSubmit={handleSubmit}
                        >

                            <input
                                className="my-4 p-2 rounded-md "
                                name="nombre"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.nombre}
                                placeholder="Nombre"
                                required
                            />
                            <input
                                className="my-4 p-2 rounded-md "
                                name="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.email}
                                placeholder="Email"
                                required
                            />
                            <textarea
                                className="my-4 p-2 rounded-md h-32"
                                name="mensaje"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.mensaje}
                                placeholder="Tu mensaje"
                                maxLength="400"
                                required
                            />
                            <input
                                className="mx-auto  text-neutro bg-color-2 px-8 py-2 font-bold rounded-md hover:bg-color-1 hover:text-color-2 "
                                type="submit"
                                value="Enviar Mensaje"

                            />
                            {loading && <Modal modalStyle={modalStyle} isOpen={true} closeModal={closeModal} showCloseButton={false}>
                                <div className="p-4 text-slate-50">
                                    <div>Enviando... </div>
                                    <div className="py-2"><i className="fa-solid fa-circle-notch text-3xl animate-spin "></i></div>
                                </div>
                            </Modal>}
                            {response && <Modal modalStyle={modalStyleSuccess} isOpen={true} closeModal={closeModalSuccess} showCloseButton={false}>
                                <div className="p-4  text-neutro font-bold">
                                    <div>Enviado con éxito</div>
                                    <div className="text-green-500 my-2"><i className="fa-solid fa-circle-check text-3xl"></i></div>
                                </div>
                            </Modal>}
                        </form>
                    </div>

                </section>

            </main>

            <NewsLetter />
            <Footer />

        </div>
    )
}