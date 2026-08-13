import JustValidate from "just-validate";
import IMask from "imask";

export class CreditPaypal {
	constructor(paymentForm) {
		this.initMasks(paymentForm);
		
		const validate = new JustValidate(`.form#${paymentForm}`, {
			errorLabelStyle: {
				color: "#CDB1FBFF",
			}
		});
		
		validate
			.addField(`#${paymentForm}-card`, [
				{
					rule: 'required',
					errorMessage: 'Enter your card',
				},
			])
			.addField(`#${paymentForm}-date`, [
				{
					rule: 'required',
					errorMessage: 'Enter date',
				},
			])
			.addField(`#${paymentForm}-ccv`, [
				{
					rule: 'required',
					errorMessage: 'Enter cvv',
				},
			])
			.addField(`#${paymentForm}-name`, [
				{
					rule: 'required',
					errorMessage: 'Enter your name',
				},
				{
					rule: 'customRegexp',
					value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
					errorMessage: 'Enter correct name',
				},
				{
					rule: 'minLength',
					value: 3,
					errorMessage: 'Minimum 3 characters',
				},
			])
			.addField(`#${paymentForm}-check`, [
				{
					rule: 'required',
					errorMessage: 'You must accept the terms',
				},
			])
			.onSuccess((event) => {
				event.preventDefault();
				console.log('Form ' + paymentForm + ' is valid');
			});
	}
	
	initMasks(paymentForm) {
		const card = document.querySelector(`#${paymentForm}-card`);
		const date = document.querySelector(`#${paymentForm}-date`);
		const ccv = document.querySelector(`#${paymentForm}-ccv`);
		
		if (card) {
			IMask(card, {
				mask: '0000 0000 0000 0000'
			});
		}
		
		if (date) {
			IMask(date, {
				mask: '00/00'
			});
		}
		
		if (ccv) {
			IMask(ccv, {
				mask: '000'
			});
		}
	}
}