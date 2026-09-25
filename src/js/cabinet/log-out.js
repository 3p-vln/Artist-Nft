export class LogOut{
	constructor(){
		this.topLogOut = document.querySelector('.menu__log-out');
		this.bottomLogOut = document.querySelector('.menu__list-item.logout');
		
		this.logOut(this.topLogOut);
		this.logOut(this.bottomLogOut);
	}
	
	logOut(btn){
		if(!btn) return;
		
		btn.addEventListener('click', ()=>{
			localStorage.removeItem('currentUser');
		})
	}
}