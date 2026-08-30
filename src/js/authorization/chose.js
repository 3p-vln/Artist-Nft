export class Chose {
	constructor() {
		this.authItems = document.querySelectorAll('.chose__item');
		this.formItems = document.querySelectorAll('.chose__auth');
		this.idFromUrl = new URLSearchParams(window.location.search).get('form');
		this.formLink = document.querySelectorAll('.form__info span');
		
		this.initChose();
		this.changeItem();
		this.changeFromLink();
	}
	
	initChose() {
		if (!this.idFromUrl) return;
		
		const activeItem = [...this.authItems].find(
			item => item.id === this.idFromUrl
		);
		
		if (!activeItem) return;
		
		const currentItem = document.querySelector('.chose__item_active');
		
		if (currentItem) {
			currentItem.classList.remove('chose__item_active');
		}
		
		activeItem.classList.add('chose__item_active');
		
		this.changeForm(this.idFromUrl);
	}
	
	changeItem() {
		this.authItems.forEach((item) => {
			item.addEventListener('click', () => {
				const currentItem = document.querySelector('.chose__item_active');
				
				if (currentItem) {
					currentItem.classList.remove('chose__item_active');
				}
				
				item.classList.add('chose__item_active');
				
				this.updateUrl(item.id);
				this.changeForm(item.id);
			});
		});
	}
	
	updateUrl(form) {
		const url = new URL(window.location);
		
		url.searchParams.set('form', form);
		
		window.history.pushState({}, '', url);
	}
	
	changeForm(active) {
		this.formItems.forEach((form) => {
			const isActive = form.classList.contains(active);
			
			form.classList.toggle('chose__auth_active', isActive);
			form.classList.toggle('chose__auth_no-active', !isActive);
		});
	}
	
	changeFromLink(){
		this.formLink.forEach(link => {
			link.addEventListener('click', () => {
				const currentItem = document.querySelector('.chose__item_active');
				
				if (currentItem) {
					currentItem.classList.remove('chose__item_active');
				}
				
				switch (link.textContent) {
					case 'Sign up':
						document.querySelector('#signup').classList.add('chose__item_active');
						
						this.updateUrl('signup');
						this.changeForm('signup');
						break;
						
					case 'Log in':
						document.querySelector('#login').classList.add('chose__item_active');
						
						this.updateUrl('login');
						this.changeForm('login');
						break;
				}
			})
		})
	}
} 