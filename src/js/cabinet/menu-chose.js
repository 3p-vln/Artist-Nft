export class MenuChose {
	constructor() {
		this.menuItems = document.querySelectorAll('.menu__list-item_available');
		this.menuItemsId = [...this.menuItems].map(item => item.id);
		this.pageItems = document.querySelectorAll('.main__items');
		this.idFromUrl = new URLSearchParams(window.location.search).get('page');
		
		this.initChose();
		this.changeItem();
	}
	
	initChose() {
		if (!this.idFromUrl) return;

		const activeItem = [...this.menuItems].find(
			item => item.id === this.idFromUrl
		);

		if (!activeItem) return;

		const currentItem = document.querySelector('.menu__list-item_active');

		if (currentItem) {
			currentItem.classList.remove('menu__list-item_active');
		}

		activeItem.classList.add('menu__list-item_active');

		this.changeForm(this.idFromUrl);
		this.changeMenuIcons(this.idFromUrl)
	}

	changeItem() {
		this.menuItems.forEach((item) => {
			item.addEventListener('click', () => {
				const currentItem = document.querySelector('.menu__list-item_active');

				if (currentItem) {
					currentItem.classList.remove('menu__list-item_active');
				}

				item.classList.add('menu__list-item_active');

				this.updateUrl(item.id);
				this.changeForm(item.id);
				this.changeMenuIcons(item.id)
			});
		});
	}

	updateUrl(page) {
		const url = new URL(window.location);

		url.searchParams.set('page', page);

		window.history.pushState({}, '', url);
	}

	changeForm(active) {
		this.pageItems.forEach((page) => {
			const isActive = page.classList.contains(active);

			page.classList.toggle('main__items_active', isActive);
			page.classList.toggle('main__items_no-active', !isActive);
		});
	}

	changeMenuIcons(active) {
		this.menuItemsId.forEach(id => {
			const currentItemIcon = document.querySelector(`#${id} img`);
			
			currentItemIcon.src = `img/svg/${id}${id === active ? '-gradient' : ''}.svg`;
		});
	}
} 