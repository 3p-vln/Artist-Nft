import { Swiper } from "swiper";

export class Pricelist {
	constructor() {
		this.cards = document.querySelectorAll(".premium-card");
		this.choseItems = document.querySelectorAll(".chose__item");
		
		this.handleResize = this.handleResize.bind(this);
		
		window.addEventListener("resize", this.handleResize);
		
		this.handleResize();
		this.initSwiper();
		this.chosePremium()
	}
	
	handleResize() {
		if (window.innerWidth >= 768) {
			this.cards.forEach(card => {
				card.addEventListener("click", this.handleCardClick);
			});
		} else {
			this.cards.forEach(card => {
				card.removeEventListener("click", this.handleCardClick);
				
				if(card.classList.contains("year")){
					this.cards.forEach(item => {
						item.classList.remove("premium-card_active");
						item.classList.add("premium-card_no-active");
					});
					
					card.classList.add("premium-card_active");
				}
			});
		}
	}
	
	handleCardClick = (event) => {
		this.toggleActive(event.currentTarget);
	};
	
	toggleActive(card) {
		this.cards.forEach(item => {
			item.classList.remove("premium-card_active");
			item.classList.add("premium-card_no-active");
		});
		
		card.classList.add("premium-card_active");
		card.classList.remove("premium-card_no-active");
	}
	
	initSwiper() {
		new Swiper(".pricelist__list.swiper", {
			slidesPerView: "auto",
			spaceBetween: 30,
			
			breakpoints: {
				0: {
					enabled: false,
					spaceBetween: 'auto',
				},
				768: {
					spaceBetween: 15,
				},
				1024: {
					spaceBetween: 30,
				},
			},
		});
	}
	
	chosePremium(){
		const activeChose = document.querySelector(".chose__item_active").id;
		document.querySelector(`.${activeChose}`).classList.add("premium-card_chosed");
		
		this.choseItems.forEach(item => {
			item.addEventListener("click", () => {
				document.querySelector('.chose__item_active').classList.remove('chose__item_active');
				item.classList.add('chose__item_active');
				
				switch (item.id) {
					case 'week':
						this.changeCard('week');
						break;
					
					case 'year':
						this.changeCard('year');
						break;
					
					case 'month':
						this.changeCard('month');
						break;
				}
			});
		})
	}
	
	changeCard(active){
		this.cards.forEach((card) => {
			card.classList.remove("premium-card_chosed");
			
			if (card.classList.contains(active)) card.classList.add("premium-card_chosed");
		})
	}
}