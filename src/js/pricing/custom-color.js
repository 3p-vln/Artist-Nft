export class CustomColor{
	constructor(){
		this.colorsRadio = document.querySelectorAll('.radio__real');
		this.colorInput = document.querySelector('.form__input_hidden');
		
		this.colorsRadio.forEach(color => {
			color.addEventListener('change', () => {
				if (color.checked) {
					this.colorInput.value = color.value;
				}
			})
		})
	}
}