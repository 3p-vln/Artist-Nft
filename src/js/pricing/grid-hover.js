export class GridHover {
	constructor(element) {
		this.gridContent = document.querySelector(element);
		
		if (!this.gridContent) return;
		
		this.gridElement = this.gridContent.querySelectorAll('.item');
		
		this.gridElement.forEach((item) => {
			this.hover(item);
		})
	}
	
	hover(item) {
		const itemHover = item.querySelector('.item__hover');
		
		if (!itemHover) return;
		
		let timer;
		
		item.addEventListener('click', () => {
			clearTimeout(timer);
			itemHover.classList.add('item__hover_active');
		});
		
		item.addEventListener('mouseleave', () => {
			timer = setTimeout(() => {
				itemHover.classList.remove('item__hover_active');
			}, 1000);
		});
		
		item.addEventListener('mouseenter', () => {
			clearTimeout(timer);
		});
	}
}