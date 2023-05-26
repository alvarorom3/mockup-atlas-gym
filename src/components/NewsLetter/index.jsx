import { useForm } from "../../hooks/useForm"
import { useModals } from "../../hooks/useModals";
import Modal from "../Modal";

const initialForm = {
    email: "",
};

function validationsForm(form) {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto. Debe tener la estructura ejemplo@mail.com";
    }

    return errors
};

export default function NewsLetter() {
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
        <div className="bg-color-3 p-8 md:p-4 font-poppins md:text-xl">

            <div className="max-w-screen-xl mx-auto flex flex-col md:gap-16 items-center md:items-start justify-center md:flex-row">
                <div className="flex gap-2">
                    <i className="fa-solid fa-envelope fa-2x "></i>
                    <h3 className="sm:text-xl text-center md:m-0 md:text-left" >Recibi las últimas noticias de nuestro Newsletter</h3 >
                </div>
                <form
                    className="flex flex-col sm:flex-row "
                    onSubmit={handleSubmit}
                >
                    <input
                        className="p-2 rounded-md"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.email}
                        placeholder="Email"
                        required
                    />

                    <input
                        className="text-neutro bg-color-2 px-8 py-2 font-bold rounded-md hover:bg-color-1 hover:text-color-2 cursor-pointer"
                        type="submit"
                        value="Registrarse"

                    />
                    {loading && <Modal modalStyle={modalStyle} isOpen={true} closeModal={closeModal} showCloseButton={false}>
                        <div className="p-4 text-slate-50">
                            <div>Enviando... </div>
                            <div className="py-2"><i className="fa-solid fa-circle-notch text-3xl animate-spin "></i></div>
                        </div>
                    </Modal>}
                    {response && <Modal modalStyle={modalStyleSuccess} isOpen={true} closeModal={closeModalSuccess} showCloseButton={false}>
                        <div className="p-4  text-neutro font-bold">
                            <div>Gracias por registrarse</div>
                            <div className="text-green-500 my-2"><i className="fa-solid fa-circle-check text-3xl"></i></div>
                        </div>
                    </Modal>}
                </form>


            </div>
        </div>
    )
}
