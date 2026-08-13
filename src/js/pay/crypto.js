import JustValidate from "just-validate";

export class Crypto {
	constructor() {
		this.copyLink();
		this.validate();
	}
	
	copyLink(){
		const link = 'EQBSSl0Xlo3GFgfjffUYIT786HG53HGDjhfkkHTmFw5YVYOiWJ.';
		const copyBtn = document.querySelector(".form__input_copy img");
		
		copyBtn.addEventListener("click", async () => {
			try {
				await navigator.clipboard.writeText(link);
				console.log("Copied!");
			} catch (error) {
				console.error("Failed to copy:", error);
			}
		});
	}
	
	validate(){
		const validate = new JustValidate('.form#crypto', {
			errorLabelStyle: {
				color: "#CDB1FBFF",
			}
		});
		
		validate
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
			.addField('#check', [
				{
					rule: 'required',
					errorMessage: 'You must accept the terms',
				},
			])
			.onSuccess((event) => {
				event.preventDefault();
				console.log('Form crypto is valid');
			});
	}
}