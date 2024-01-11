import { useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function useForm(initialForm, validateForm) {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	function handleChange(e) {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function handleBlur(e) {
		handleChange(e);
		setErrors(validateForm(form));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setErrors(validateForm(form));

		if (Object.keys(errors).length === 0) {
			setLoading(true);

			emailjs.send(serviceId, templateId, form, publicKey).then(
				result => {
					setLoading(false);
					setResponse(true);
					console.log(result.text);
					console.log('Enviado ✔');
					setForm(initialForm);
					setTimeout(() => {
						setResponse(false);
					}, 3000);
				},
				error => {
					console.log(error.text);
				}
			);
		} else {
			alert('Su mensaje no puede enviarse si aún contiene errores.');
			return;
		}
	}

	return {
		form,
		errors,
		loading,
		response,
		handleBlur,
		handleChange,
		handleSubmit,
	};
}
