import {database} from "../data/simulate-db";

export class FilterTable {
	constructor(table, list, onSort) {
		this.table = document.querySelector(`.${table} .table__head`);
		this.filterItems = this.table.querySelectorAll('p');
		this.list = list;
		this.onSort = onSort;
		this.sortDirection = {};
		
		this.filterItems.forEach(filter => {
			const excludedFilters = [
				'Crypto',
				'Comment',
				'Delivery address',
				'Action',
			];
			
			if (!excludedFilters.includes(filter.innerText.trim())) {
				filter.addEventListener('click', () => {
					this.filterCategory(filter);
				});
			}
		});
		
	}
	
	filterCategory(filter) {
		const category = filter.innerText;
		
		this.sortDirection[category] = !this.sortDirection[category];
		
		const ascending = this.sortDirection[category];
		
		switch (category) {
			case 'Type of item':
				this.list.sort((a, b) => {
					return ascending
						? a.type.localeCompare(b.type)
						: b.type.localeCompare(a.type);
				});
				
				break;
			
			case 'Color':
				this.list.sort((a, b) => {
					return ascending
						? a.color.localeCompare(b.color)
						: b.color.localeCompare(a.color);
				});
				
				break;
			
			case 'E-mail':
				this.list.sort((a, b) => {
					return ascending
						? a.mail.localeCompare(b.mail)
						: b.mail.localeCompare(a.mail);
				});
				
				break;
			
			case 'Size':
				const sizeOrder = {
					XS: 1,
					S: 2,
					M: 3,
					L: 4,
					XL: 5
				};
				
				this.list.sort((a, b) => {
					return ascending
						? sizeOrder[a.size.split(' ')[0]] - sizeOrder[b.size.split(' ')[0]]
						: sizeOrder[b.size.split(' ')[0]] - sizeOrder[a.size.split(' ')[0]];
				});
				
				break;
				
			case 'Name of product':
				this.list.sort((a, b) => {
					const nftA = database.nfts.find(
						nft => nft.id === a['nft-id']
					);
					
					const nftB = database.nfts.find(
						nft => nft.id === b['nft-id']
					);
					
					const titleA = nftA?.title ?? '';
					const titleB = nftB?.title ?? '';
					
					const titleCompare = titleA.localeCompare(titleB);

					if (titleCompare !== 0) {
						return ascending
							? titleCompare
							: -titleCompare;
					}

					return ascending
						? a['nft-id'].localeCompare(b['nft-id'])
						: b['nft-id'].localeCompare(a['nft-id']);
				});
				
				break;
			
			case 'Status': {
				const statusOrder = {
					Success: 1,
					Processing: 2,
					Refund: 3,
					Pending: 4,
					Hold: 5,
					Fail: 6,
					Cancel: 7
				};
				
				this.list.sort((a, b) => {
					return ascending
						? statusOrder[a.status] - statusOrder[b.status]
						: statusOrder[b.status] - statusOrder[a.status];
				});
				
				break;
			}
			
			case 'Price':
				this.list.sort((a, b) => {
					const nftA = database.nfts.find(
						nft => nft.id === a['nft-id']
					);
					
					const nftB = database.nfts.find(
						nft => nft.id === b['nft-id']
					);
					
					const priceA = nftA?.price ?? 0;
					const priceB = nftB?.price ?? 0;
					
					return ascending
						? priceA - priceB
						: priceB - priceA;
				});
				
				break;
			
			case 'Date':
				this.list.sort((a, b) => {
					const dateA = new Date(a.date).getTime();
					const dateB = new Date(b.date).getTime();
					
					return ascending
						? dateA - dateB
						: dateB - dateA;
				});
				
				break;
		}
		
		this.onSort();
		console.log(this.list, this.sortDirection)
	}
}