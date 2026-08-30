import JustValidate from "just-validate";

export class LogInValidate {
	constructor() {
		const validate = new JustValidate('#login-form', {
			errorLabelStyle: {
				color: "#CDB1FBFF",
			}
		});
		
		validate
			.addField('#login-email', [
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
			.addField('#login-password', [
				{
					rule: 'required',
					errorMessage: 'Enter your password',
				},
			])
			.onSuccess((event) => {
				event.preventDefault();
				console.log('Form log in is valid');
			});
	}
}