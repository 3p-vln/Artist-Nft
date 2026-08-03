import JustValidate from "just-validate";

export class ContactValidate {
	constructor() {
		const validate = new JustValidate('.contact__form', {
			errorLabelStyle: {
				color: "#CDB1FBFF",
			}
		});
		
		validate
			.addField('#name', [
				{
					rule: 'required',
					errorMessage: 'Enter your name',
				},
				{
					rule: 'minLength',
					value: 2,
					errorMessage: 'Minimum 2 characters',
				},
				{
					rule: 'maxLength',
					value: 50,
					errorMessage: 'Maximum 50 characters',
				},
				{
					rule: 'customRegexp',
					value: /^[\p{L}’'\-]+$/u,
					errorMessage: 'Only letters, apostrophes, and hyphens',
				},
			])
			.addField('#mail', [
				{
					rule: 'required',
					errorMessage: 'Enter your email',
				},
				{
					rule: 'customRegexp',
					value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/,
					errorMessage: 'Invalid email',
				},
			])
			.addField('#question', [
				{
					rule: 'required',
					errorMessage: 'Enter your question',
				},
				{
					rule: 'minLength',
					value: 10,
					errorMessage: 'Minimum 10 characters',
				},
			])
			.addField('#check', [
				{
					rule: 'required',
					errorMessage: 'You must accept the terms',
				},
			])
			.onSuccess((event) => {
					event.preventDefault();
					console.log('Form is valid');
				});
	}
}