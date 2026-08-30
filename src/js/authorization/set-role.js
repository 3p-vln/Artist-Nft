export class SetRole {
	constructor(){
		this.roleRadio = document.querySelectorAll('.radio__real');
		this.roleInput = document.querySelector('.form__input_hidden');
		
		this.roleRadio.forEach(role => {
			role.addEventListener('change', () => {
				if (role.checked) {
					this.roleInput.value = role.value;
				}
			})
		})
	}
}