import JustValidate from "just-validate";
import {database} from "../data/simulate-db";

export class SignUp {
	constructor() {
		this.validate();
	}
	
	validate() {
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
				this.signUp();
			});
	}
	
	signUp(){
		const mailValue = document.querySelector('#signup-email').value;
		const passwordValue = document.querySelector('#signup-password').value;
		const roleValue = document.querySelector('#role').value;
		const userFromData = database.users.find(item => item.email === mailValue);
		
		const errorDiv = document.querySelector('#signup-form .form__error');
		
		if(userFromData){
			errorDiv.textContent = 'This email is already registered';
			return;
		}
		
		let userId;
		
		do {
			userId = Array.from({ length: 11 }, () => {
				const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				return chars[Math.floor(Math.random() * chars.length)];
			}).join('');
		} while (database.users.some(item => item.id === userId));
		
		const newUser = {
			id: userId,
			email: mailValue,
			username: mailValue.split('@')[0],
			password: passwordValue,
			role: roleValue,
			premium: false,
		};
		
		localStorage.setItem('currentUser', JSON.stringify(newUser));
	}
}