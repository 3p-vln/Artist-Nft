import JustValidate from "just-validate";

export class PayPopUp {
	constructor() {
		this.payPopUp = document.querySelector('.pay-pop-up');
		
		this.activatePopUp();
		this.validatePopUp();
	}
	
	activatePopUp(){
		setTimeout(()=>{
			this.payPopUp.classList.add('pay-pop-up_active');
		}, 1500)
	}
	
	validatePopUp(){
		const validate = new JustValidate('.form#pop-up', {
			errorLabelStyle: {
				color: "#CDB1FBFF",
			}
		});
		
		validate
			.addField('#country', [
				{
					rule: 'required',
					errorMessage: 'Enter your country',
				},
			])
			.addField('#city', [
				{
					rule: 'required',
					errorMessage: 'Enter your city',
				},
				{
					rule: 'customRegexp',
					value: /^[\p{L}\p{M}\d\s.'’()-]+$/u,
					errorMessage: 'Enter a valid city',
				},
			])
			.addField('#adress', [
				{
					rule: 'required',
					errorMessage: 'Enter your adress',
				},
				{
					rule: 'customRegexp',
					value: /^[\p{L}\p{M}\d\s.,'’/#()-]+$/u,
					errorMessage: 'Enter a valid address',
				},
			])
			.addField('#zip', [
				{
					rule: 'required',
					errorMessage: 'Enter your zip code',
				},
				{
					rule: 'customRegexp',
					value: /^[\p{L}\p{N}\s-]{2,12}$/u,
					errorMessage: 'Enter a valid postal code',
				},
			])
			.addField('#mail', [
				{
					rule: 'required',
					errorMessage: 'Enter your mail',
				},
				{
					rule: 'customRegexp',
					value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/,
					errorMessage: 'Invalid email',
				},
			])
			.onSuccess((event) => {
				event.preventDefault();
				document.querySelector('.pay-pop-up__success').classList.add('pay-pop-up__success_active');
				
				setTimeout(()=>{
					this.payPopUp.classList.remove('pay-pop-up_active');
				}, 2500)
			});
	}
}