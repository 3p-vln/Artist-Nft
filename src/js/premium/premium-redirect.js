export class PremiumRedirect{
	constructor(){
		this.currentUser = localStorage.getItem("currentUser");
		this.buyBtns = document.querySelectorAll(".buy__btn");
		
		if(!this.currentUser){
			this.buyBtns.forEach(btn => {
				btn.href = 'authorization.html?form=login'
			})
		}
	}
}