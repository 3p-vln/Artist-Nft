import { database } from "../data/simulate-db";
import { Orders } from "./orders";

export class Statistics extends Orders {
	constructor() {
		const currentUserId = JSON.parse(
			localStorage.getItem('currentUser')
		).id;
		
		const orders = database.orders.filter(
			order => order.idOwner === currentUserId
		);
		
		super(orders);
		
		this.ordersContainer = document.querySelector('.statistics__table');
		
		this.init();
	}
	
	init() {
		this.ordersWithDate().forEach(order => {
			this.renderOrder(order);
		});
		
		this.showMore();
	}
	
	ordersWithDate() {
		return this.orders.map(order => ({
			...order,
			date: this.randomDate(),
		}))
			.sort((a, b) =>
				new Date(b.date).getTime() - new Date(a.date).getTime()
			);
	}
	
	randomDate() {
		const start = new Date('2025-01-01');
		const end = new Date('2026-09-22');
		
		const timestamp =
			start.getTime() +
			Math.random() * (end.getTime() - start.getTime());
		
		return new Date(timestamp).toISOString().split('T')[0];
	}
}