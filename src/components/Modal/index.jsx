import "./index.css"

export default function Modal({ children, modalStyle, isOpen, closeModal, showCloseButton = true }) {
    function handleContainerClick(e) {
        e.stopPropagation()
    }

    return (
        <article className={`modal ${modalStyle.bgColor} ${isOpen && "animate-tableShow duration-150 ease-in flex"}`} onClick={closeModal}>
            <div className={modalStyle.container} onClick={handleContainerClick}>
                <button
                    type="button"
                    className={showCloseButton ? 'absolute top-8 right-4 font-poppins font-bold text-xl hover:scale-150 duration-150' : 'hidden'}
                    onClick={closeModal}
                >
                    X
                </button>
                {children}
            </div>
        </article>
    )
}