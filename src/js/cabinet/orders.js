import {database} from "../data/simulate-db";

export class Orders {
	constructor() {
		this.currentUserEmail = JSON.parse(localStorage.getItem('currentUser')).email;
		this.currentUserRole = JSON.parse(localStorage.getItem('currentUser')).role;
		this.orders = null;
		
		switch (this.currentUserRole) {
			case "admin":
				this.orders = database.orders;
				break;
			default:
				this.orders = database.orders.filter(
					order => order.mail === this.currentUserEmail
				);
		}
		
		this.ordersWithDate().forEach((order) => {
			this.renderOrder(order)
		})
		
		this.showMore()
	}
	
	ordersWithDate() {
		return this.orders.map(order => ({
			...order,
			date: this.randomDate(),
		}))
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	}
	
	randomDate (){
		const start = new Date('2025-01-01');
		const end = new Date('2026-09-22');
		
		const timestamp =
			start.getTime() +
			Math.random() * (end.getTime() - start.getTime());
		
		return new Date(timestamp).toISOString().split('T')[0];
	};
	
	renderOrder(order){
		const ordersContainer = document.querySelector('.table');
		
		const orderCard = document.createElement('li');
		orderCard.classList.add('table__row', 'order', `order_${order.id}`);
		
		const orderMainInfo = document.createElement('div');
		orderMainInfo.classList.add('order__main-info');
		
		const orderType = document.createElement('p');
		orderType.classList.add('order__type');
		orderType.textContent = order.type.toUpperCase();
		
		const orderColor = document.createElement('p');
		orderColor.classList.add('order__color', `order__color_${order.color}`);
		orderColor.innerHTML = '<span></span>';
		
		const orderMail = document.createElement('p');
		orderMail.classList.add('order__mail');
		orderMail.textContent = order.mail;
		
		const orderSize = document.createElement('p');
		orderSize.classList.add('order__size');
		orderSize.innerHTML = `
			<span class="order__label">Size</span>
			
			${order.size}
		`;
		
		const orderSubInfo = document.createElement('div');
		orderSubInfo.classList.add('order__sub-info');
		
		const orderComment = document.createElement('p');
		orderComment.classList.add('order__comment');
		orderComment.innerHTML = `
			<span class="order__label">Comment</span>
			
			<span class="order__info">
				${order.comment}
			</span>
			
			<span class="order__show-more">Show more</span>
		`;
		
		const orderAddress = document.createElement('p');
		orderAddress.classList.add('order__address');
		orderAddress.innerHTML = `
			<span class="order__label">Delivery address</span>
			
			<span class="order__info">
				${order.address}
			</span>
			
			<span class="order__show-more">Show more</span>
		`;
		
		const orderAction = document.createElement('p');
		orderAction.classList.add('order__action');
		orderAction.innerHTML = `
			<button class="order__btn btn btn_light" data-email="${order.mail}">
      	Message
      </button>
		`;
		
		orderMainInfo.appendChild(orderType);
		orderMainInfo.appendChild(orderColor);
		orderMainInfo.appendChild(orderMail);
		
		orderSubInfo.appendChild(orderComment);
		orderSubInfo.appendChild(orderAddress);
		
		orderCard.appendChild(orderMainInfo);
		orderCard.appendChild(orderSize);
		orderCard.appendChild(orderSubInfo);
		orderCard.appendChild(orderAction);
		
		ordersContainer.appendChild(orderCard);
	}
	
	showMore(){
		const clickedComment = document.querySelectorAll('.order__comment');
		const clickedAddress = document.querySelectorAll('.order__address');
		
		clickedComment.forEach(comment => {
			comment.addEventListener('click', (event) => {
				this.showMoreEvent(event, comment);
			})
		})
		
		clickedAddress.forEach(address => {
			address.addEventListener('click', (event) => {
				this.showMoreEvent(event, address);
			})
		})
	}
	
	showMoreEvent(event, el){
		const showMore = event.target.closest('.order__show-more');
		
		if (!showMore) return;
		
		const info = el.querySelector('.order__info');
		
		showMore.style.display = 'none';
		info.style.height = 'fit-content';
	}
}