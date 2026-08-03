export class BurgerMenu{
	constructor(){
		this.menu = document.querySelector('.menu');
		this.burgerBtn = document.querySelector('.burger-menu__btn');
		
		this.toggle();
		this.resizeWindow();
	}
	
	toggle(){
		if(!this.burgerBtn || !this.menu) return;
		
		this.burgerBtn.addEventListener('click', () => {
			this.menu.classList.toggle('menu_active');
			this.burgerBtn.classList.toggle('burger-menu__btn_active');
			
			this.scrollLock()
		})
	}
	
	resizeWindow(){
		if(!this.burgerBtn || !this.menu) return;
		
		window.addEventListener('resize', ()=>{
			if(window.innerWidth >= 1024){
				this.menu.classList.remove('menu_active');
				this.burgerBtn.classList.remove('burger-menu__btn_active');
			}
		})
	}
	
	scrollLock(){
		if(!this.burgerBtn || !this.menu) return;
		
		if(this.burgerBtn.classList.contains('burger-menu__btn_active') && this.menu.classList.contains('menu_active')) {
			this.disableScroll()
		} else {
			this.enableScroll();
		}
	}
	
	preventScroll(e) {
		e.preventDefault();
	}
	
	disableScroll() {
		window.addEventListener('wheel', this.preventScroll, { passive: false });
		window.addEventListener('touchmove', this.preventScroll, { passive: false });
	}
	
	enableScroll() {
		window.removeEventListener('wheel', this.preventScroll);
		window.removeEventListener('touchmove', this.preventScroll);
	}
}