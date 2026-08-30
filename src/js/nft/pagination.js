import {database} from "../data/simulate-db";
import {LoadCards} from "../components/load-cards";

export class Pagination {
	constructor() {
		this.nfts = database.nfts;
		this.nftsCount = 12;
		
		const pagesCount = Math.ceil(this.nfts.length / this.nftsCount);
		const pageFromUrl = Number(new URLSearchParams(window.location.search).get('page'));
		this.currentPage = Math.min(
			Math.max(pageFromUrl || 1, 1),
			pagesCount
		);
		
		this.nftsContainer = document.querySelector('.nft-grid__catalog');
		this.paginationContainer = document.querySelector('.pagination__list');
		this.pagination = document.querySelector('.pagination');
		this.paginationPrev = document.querySelector('.pagination__prev');
		this.paginationNext = document.querySelector('.pagination__next');
		
		this.renderNfts(this.nfts, this.nftsCount, this.currentPage);
		this.renderPagination(this.nfts, this.nftsCount);
		
		this.paginationItems = document.querySelectorAll('.pagination__item');
		
		this.updatePagination();
		this.prevNextBtns()
	}
	
	renderNfts(nfts, nftsCount, currentPage) {
		this.nftsContainer.innerHTML = '';
		
		const firstNftIndex = nftsCount * currentPage - nftsCount;
		const lastNftIndex = firstNftIndex + nftsCount;
		const nftsOnPage = nfts.slice(firstNftIndex, lastNftIndex);
		
		new LoadCards('.nft-grid__catalog', 'nft-grid__nft', nftsOnPage);
	}
	
	updatePagination() {
		this.pagination.addEventListener('click', (event) => {
			const paginationItem = event.target.closest('.pagination__item');
			
			if (!paginationItem) {
				return;
			}
			
			this.currentPage = Number(paginationItem.textContent);
			
			this.updateUrl();
			this.renderNfts(this.nfts, this.nftsCount, this.currentPage);
			this.renderPagination(this.nfts, this.nftsCount);
		});
	}
	
	renderPagination(nfts, nftsCount) {
		const pagesCount = Math.ceil(nfts.length / nftsCount);
		
		this.paginationContainer.innerHTML = '';
		
		if (pagesCount < 5) {
			for (let i = 1; i <= pagesCount; i++) {
				this.createPaginationItem(i);
			}
			
			return;
		}
		
		if (pagesCount === 5) {
			if (this.currentPage === 3) {
				this.createPaginationItem(1);
				this.createPaginationItem(2);
				this.createPaginationItem(3);
				
				this.createDots();
				
				this.createPaginationItem(5);
				
				return;
			}
			
			this.createPaginationItem(1);
			this.createPaginationItem(2);
			
			this.createDots();
			
			this.createPaginationItem(4);
			this.createPaginationItem(5);
			
			return;
		}
		
		if (this.currentPage <= 2) {
			this.createPaginationItem(1);
			this.createPaginationItem(2);
			
			this.createDots();
			
			this.createPaginationItem(pagesCount - 1);
			this.createPaginationItem(pagesCount);
			
			return;
		}
		
		if (this.currentPage === 3) {
			this.createPaginationItem(1);
			this.createPaginationItem(2);
			this.createPaginationItem(3);
			
			this.createDots();
			
			this.createPaginationItem(pagesCount);
			
			return;
		}

		if (this.currentPage < pagesCount - 2) {
			this.createPaginationItem(1);
			
			this.createDots();
			
			this.createPaginationItem(this.currentPage);
			
			this.createDots();
			
			this.createPaginationItem(pagesCount - 1);
			this.createPaginationItem(pagesCount);
			
			return;
		}
		
		this.createPaginationItem(1);
		
		this.createDots();
		
		this.createPaginationItem(pagesCount - 2);
		this.createPaginationItem(pagesCount - 1);
		this.createPaginationItem(pagesCount);
	}
	
	createPaginationItem(page) {
		const li = document.createElement('li');
		
		li.classList.add('pagination__item');
		li.textContent = page;
		
		if (this.currentPage === page) {
			li.classList.add('pagination__item_active');
		}
		
		this.paginationContainer.appendChild(li);
	}
	
	createDots() {
		const dots = document.createElement('li');
		
		dots.classList.add('pagination__dots');
		dots.textContent = '...';
		
		this.paginationContainer.appendChild(dots);
	}
	
	prevNextBtns() {
		this.paginationPrev.addEventListener('click', (event) => {
			this.handlePagination(event);
		});
		
		this.paginationNext.addEventListener('click', (event) => {
			this.handlePagination(event);
		});
	}
	
	handlePagination(event) {
		const pagesCount = Math.ceil(this.nfts.length / this.nftsCount);
		
		if (event.target.closest('.pagination__next')) {
			if (this.currentPage >= pagesCount) {
				return;
			}
			
			this.currentPage++;
		} else {
			if (this.currentPage <= 1) {
				return;
			}
			
			this.currentPage--;
		}
		
		this.updateUrl();
		this.renderNfts(this.nfts, this.nftsCount, this.currentPage);
		this.renderPagination(this.nfts, this.nftsCount);
	}
	
	updateUrl() {
		const url = new URL(window.location);
		
		url.searchParams.set('page', this.currentPage);
		
		window.history.pushState({}, '', url);
	}
}