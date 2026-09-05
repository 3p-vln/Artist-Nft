import JustValidate from "just-validate";
import {database} from "../data/simulate-db";

export class LogIn {
	constructor() {
		this.validate();
	}
	
	validate() {
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
				this.logIn();
			});
	}
	
	logIn(){
		const mailValue = document.querySelector('#login-email').value;
		const passwordValue = document.querySelector('#login-password').value;
		
		const userFromData = database.users.find(item => item.email === mailValue);
		
		const errorDiv = document.querySelector('#login-form .form__error');
		
		if(!userFromData){
			errorDiv.textContent = 'User does not exist';
			return;
		}
		
		if(userFromData.password !== passwordValue){
			errorDiv.textContent = 'User password does not match';
			return;
		}
		
		localStorage.setItem('currentUser', JSON.stringify(userFromData));
	}
}