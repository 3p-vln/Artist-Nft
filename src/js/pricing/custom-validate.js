import JustValidate from "just-validate";

export class CustomValidate {
	constructor() {
		const validate = new JustValidate('.custom__form', {
			errorLabelStyle: {
				color: "#CDB1FBFF",
			}
		});
		
		validate
			.addField('#type', [
				{
					rule: 'required',
					errorMessage: 'Choose type of item',
				},
			])
			.addField('#color', [
				{
					rule: 'required',
					errorMessage: 'Choose color of item',
				},
			])
			.addField('#size', [
				{
					rule: 'required',
					errorMessage: 'Choose size of item',
				},
			])
			.addField('#question', [
				{
					rule: 'required',
					errorMessage: 'Enter your comment',
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