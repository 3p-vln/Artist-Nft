export class Dropdown {
	constructor(dropdownContainer) {
		this.dropdownContainer = dropdownContainer;
		
		if (typeof dropdownContainer === 'string') {
			this.dropdownContainer = document.querySelector(dropdownContainer);
		}
		
		if (!this.dropdownContainer) return;
		
		this.dropdownBtn = this.dropdownContainer.querySelector('.dropdown__btn');
		this.dropdownSelected = this.dropdownBtn.querySelector('.dropdown__selected');
		this.dropdownArr = this.dropdownBtn.querySelector('img');
		this.dropdownList = this.dropdownContainer.querySelector('.dropdown__list');
		this.dropdownListItem = this.dropdownList.querySelectorAll('.dropdown__list-item');
		this.dropdownInput = this.dropdownContainer.querySelector('.dropdown__input_hidden');
		
		this.toggle()
		this.selectItem();
		this.outsideClick();
		this.checkPosition();
	}
	
	toggle() {
		if (!this.dropdownBtn || !this.dropdownList) return;
		
		this.dropdownBtn.addEventListener('click', () => {
			this.changePosition();
			
			this.dropdownBtn.classList.toggle('dropdown__btn_active');
			this.dropdownList.classList.toggle('dropdown__list_active');
		});
	}
	
	selectItem(){
		if (!this.dropdownSelected || !this.dropdownListItem || !this.dropdownInput) return;
		
		this.dropdownListItem.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				
				this.dropdownSelected.innerText = item.textContent;
				this.dropdownInput.value = item.dataset.value;
				
				this.remove();
			});
		})
	}
	
	remove(){
		if (!this.dropdownBtn || !this.dropdownList) return;
		
		this.dropdownBtn.classList.remove('dropdown__btn_active');
		this.dropdownList.classList.remove('dropdown__list_active');
	}
	
	outsideClick(){
		document.addEventListener('click', (e) => {
			if(e.target !== this.dropdownBtn && e.target !== this.dropdownSelected && e.target !== this.dropdownArr) {
				this.remove()
			}
		});
	}
	
	changePosition() {
		if (!this.dropdownBtn || !this.dropdownList) return;
		
		const btnRect = this.dropdownBtn.getBoundingClientRect();
		const listHeight = this.dropdownList.scrollHeight;
		const spaceBottom = window.innerHeight - btnRect.bottom;
		const spaceTop = btnRect.top;

		if (spaceBottom < listHeight && spaceTop > listHeight) {
			this.dropdownList.style.top = 'auto';
			this.dropdownList.style.bottom = '34px';
		} else {
			this.dropdownList.style.bottom = 'auto';
			this.dropdownList.style.top = '34px';
		}
	}
	
	checkPosition(){
		window.addEventListener('resize', () => {
			this.changePosition();
		})
	}
}