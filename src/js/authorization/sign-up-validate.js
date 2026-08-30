import JustValidate from "just-validate";

export class SignUpValidate {
	constructor() {
		const validate = new JustValidate('#signup-form', {
			errorLabelStyle: {
				color: "#CDB1FBFF",
			}
		});
		
		validate
			.addField('#role', [
				{
					rule: 'required',
					errorMessage: 'Chose your role',
				},
			])
			.addField('#signup-email', [
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
			.addField('#signup-password', [
				{
					rule: 'required',
					errorMessage: 'Enter your password',
				},
				{
					rule: 'minLength',
					value: 8,
					errorMessage: 'Must be at least 8 characters',
				},
				{
					rule: 'maxLength',
					value: 50,
					errorMessage: 'Must be less than 50 characters',
				},
				{
					rule: 'customRegexp',
					value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
					errorMessage: 'Use uppercase, lowercase and a number',
				},
			])
			.onSuccess((event) => {
				event.preventDefault();
				console.log('Form sign up is valid');
			});
	}
}