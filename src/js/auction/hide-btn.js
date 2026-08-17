export class HideBtn {
	constructor() {
		this.hideBtn = document.querySelector('.info__hide-btn');
		this.hideInfo = document.querySelector('.info__text');
		
		this.toggle();
	}
	
	toggle() {
		this.hideBtn.addEventListener('click', () => {
			this.hideInfo.classList.toggle('info__text_hidden');
			
			if(this.hideInfo.classList.contains('info__text_hidden'))
				this.hideBtn.querySelector('span').innerText = 'Show info'
			else
				this.hideBtn.querySelector('span').innerText = 'Hide info';
		})
	}
	
}