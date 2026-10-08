import {database} from "../data/simulate-db";
import {FilterTable} from "./filter-table";

export class Workers {
	constructor() {
		this.workers = database.users.filter(
			user => user.role === 'admin' || user.role === 'artist'
		);
		this.workersContainer = document.querySelector('.workers__table');
		
		new FilterTable('workers', this.workers, () => {
			this.init();
		});
		
		this.init();
	}
	
	init(){
		this.clearOrders();
		
		this.workers.forEach(worker => {
			this.renderUser(worker);
		})
		
		this.showMore()
	}
	
	clearOrders() {
		this.workersContainer
			.querySelectorAll('.worker')
			.forEach(worker => worker.remove());
	}
	
	renderUser(user){
		const workerCard = document.createElement('li');
		workerCard.classList.add('table__row', 'worker', `worker_${user.id}`);
		
		const workerName = document.createElement('p');
		workerName.classList.add('worker__name');
		workerName.innerText = user.username;
		
		const workerMail = document.createElement('p');
		workerMail.classList.add('worker__mail');
		workerMail.innerText = user.email;
		
		const workerComment = document.createElement('p');
		workerComment.classList.add('worker__comment');
		workerComment.innerHTML = `
				<span class="worker__text">
          ${user.comment}
        </span>

        <span class="worker__show-more">
          Show more
        </span>
		`;
		
		const workerPlan = document.createElement('p');
		workerPlan.classList.add('worker__plan');
		workerPlan.innerHTML = `
				<span>Plan : </span>
				
        ${user.plan === 'week' ? 'One week' : (user.plan === 'month' ? 'One month' : (user.plan === 'year' ? 'One year' : 'No'))}
		`;
		
		workerCard.appendChild(workerName);
		workerCard.appendChild(workerMail);
		workerCard.appendChild(workerComment);
		workerCard.appendChild(workerPlan);
		
		this.workersContainer.appendChild(workerCard);
	}
	
	showMore(){
		const clickedComment = document.querySelectorAll('.worker__comment');
		
		clickedComment.forEach(comment => {
			comment.addEventListener('click', (event) => {
				this.showMoreEvent(event, comment);
			})
		})
	}
	
	showMoreEvent(event, el){
		const showMore = event.target.closest('.worker__show-more');
		
		if (!showMore) return;
		
		const info = el.querySelector('.worker__text');
		
		showMore.style.display = 'none';
		info.style.height = 'fit-content';
		info.style['max-height'] = '100%';
	}
}