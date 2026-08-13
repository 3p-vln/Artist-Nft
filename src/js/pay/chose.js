export class Chose {
	constructor(){
		this.payItems = document.querySelectorAll('.chose__item');
		this.formItems = document.querySelectorAll('.chose__payment');
		
		this.changeItem()
	}
	
	changeItem(){
		this.payItems.forEach((item) => {
			item.addEventListener('click', () => {
				document.querySelector('.chose__item_active').classList.remove('chose__item_active');
				item.classList.add('chose__item_active');
				
				switch (item.id) {
					case 'credit':
						this.changeForm('credit');
						break;
						
					case 'paypal':
						this.changeForm('paypal');
						break;
						
					case 'crypto':
						this.changeForm('crypto');
						break;
				}
			})
		})
	}
	
	changeForm(active){
		this.formItems.forEach((form) => {
			form.classList.remove('chose__payment_active');
			form.classList.add('chose__payment_no-active');
			if (form.classList.contains(active)) {
				form.classList.add('chose__payment_active');
				form.classList.remove('chose__payment_no-active');
			}
		})
	}
}