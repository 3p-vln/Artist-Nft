import { database } from "../data/simulate-db";
import { FilterTable } from "./filter-table";

export class Orders {
	constructor(orders = null) {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		
		this.currentUserEmail = this.currentUser.email;
		this.currentUserRole = this.currentUser.role;
		
		this.ordersContainer = document.querySelector('.orders__table');
		
		if (orders) {
			this.orders = orders;
		} else {
			switch (this.currentUserRole) {
				case "admin":
					this.orders = database.orders;
					this.init()
					break;
				
				case "customer":
					this.orders = database.orders.filter(
						order => order.mail === this.currentUserEmail
					);
					this.init()
			}
		}
		
		if (!orders) {
			new FilterTable('orders', this.orders, () => {
				this.init();
			});
		}
	}
	
	init() {
		this.clearOrders();
		
		this.orders.forEach(order => {
			this.renderOrder(order);
		});
		
		this.showMore();
	}
	
	clearOrders() {
		this.ordersContainer
			.querySelectorAll('.order')
			.forEach(order => order.remove());
	}
	
	renderOrder(order) {
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
      <span class="order__info">${order.comment}</span>
      <span class="order__show-more">Show more</span>
    `;
		
		const orderAddress = document.createElement('p');
		orderAddress.classList.add('order__address');
		orderAddress.innerHTML = `
      <span class="order__label">Delivery address</span>
      <span class="order__info">${order.address}</span>
      <span class="order__show-more">Show more</span>
    `;
		
		const orderAction = document.createElement('p');
		orderAction.classList.add('order__action');
		orderAction.innerHTML = `
      <button class="order__btn btn btn_light" data-email="${order.mail}">
        Message
      </button>
    `;
		
		orderMainInfo.append(orderType, orderColor, orderMail);
		
		orderSubInfo.append(orderComment, orderAddress);
		
		orderCard.append(
			orderMainInfo,
			orderSize,
			orderSubInfo,
			orderAction
		);
		
		this.ordersContainer.appendChild(orderCard);
	}
	
	showMore() {
		const clickedComment = document.querySelectorAll('.order__comment');
		const clickedAddress = document.querySelectorAll('.order__address');
		
		clickedComment.forEach(comment => {
			comment.addEventListener('click', event => {
				this.showMoreEvent(event, comment);
			});
		});
		
		clickedAddress.forEach(address => {
			address.addEventListener('click', event => {
				this.showMoreEvent(event, address);
			});
		});
	}
	
	showMoreEvent(event, el) {
		const showMore = event.target.closest('.order__show-more');
		
		if (!showMore) return;
		
		const info = el.querySelector('.order__info');
		
		showMore.style.display = 'none';
		info.style.height = 'fit-content';
	}
}