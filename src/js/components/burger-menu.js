export class BurgerMenu{
	constructor(){
		this.menu = document.querySelector('.menu');
		this.burgerBtn = document.querySelector('.burger-menu__btn');
		
		this.toggle();
		this.resizeWindow();
		this.authChange();
	}
	
	toggle(){
		if(!this.burgerBtn || !this.menu) return;
		
		this.burgerBtn.addEventListener('click', () => {
			this.menu.classList.toggle('menu_active');
			this.burgerBtn.classList.toggle('burger-menu__btn_active');
			
			if(this.menu.classList.contains('menu_active')){
				this.menu.style.right = 0;
			} else {
				this.menu.style.right = '100%';
			}
			
			this.scrollLock()
		})
	}
	
	resizeWindow(){
		if(!this.burgerBtn || !this.menu) return;
		
		window.addEventListener('resize', ()=>{
			if(window.innerWidth >= 1024){
				this.menu.classList.remove('menu_active');
				this.menu.style.right = '100%';
				
				this.burgerBtn.classList.remove('burger-menu__btn_active');
			}
		})
	}
	
	scrollLock(){
		if(!this.burgerBtn || !this.menu) return;
		
		if(this.burgerBtn.classList.contains('burger-menu__btn_active') && this.menu.classList.contains('menu_active')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}
	
	authChange(){
		const currentUser = JSON.parse(localStorage.getItem('currentUser'));
		
		if(!currentUser) return;

		const authBtn = document.querySelector('.menu__auth .btn');
		authBtn.innerHTML = `
			<span>Cabinet</span>
		`;
		
		switch(currentUser.role){
			case 'admin':
				authBtn.href = 'cabinet-admin.html?page=messages';
				break;
			case 'artist':
				authBtn.href = 'cabinet-worker.html?page=messages';
				break;
			case 'customer':
				authBtn.href = 'cabinet-client.html?page=messages';
				break;
		}
	}
}