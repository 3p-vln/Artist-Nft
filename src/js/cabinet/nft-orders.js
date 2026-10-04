import {database} from "../data/simulate-db";

export class NftOrders {
	constructor() {
		this.nftOrders = database["nft-orders"].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		
		this.nftOrders.forEach(nft => {
			this.renderOrder(nft)
		})
		
		this.copyContents = document.querySelectorAll('.nft-order__adress');
		
		this.copyContents.forEach(copy => {
			this.copyAddress(copy);
		})
	}
	
	renderOrder(nftOrder) {
		const nft = database.nfts.find(nft => nft.id === nftOrder['nft-id']);
		
		const ordersContainer = document.querySelector('.nft-orders__table');
		
		const orderCard = document.createElement('li');
		orderCard.classList.add('table__row', 'nft-order', `nft-order_${nftOrder.id}`);
		
		const mainInfo = document.createElement('div');
		mainInfo.classList.add('nft-order__main-info');
		
		const nftOrderProd = document.createElement('div');
		nftOrderProd.classList.add('nft-order__prod');
		
		const nftPicture = document.createElement('div');
		nftPicture.classList.add('nft-order__picture', 'picture', `picture_${nft.bgColor}`);
		nftPicture.innerHTML = `
			<div class="picture__ellipses-bg">
      	<img src="img/svg/ellipses-bg.svg" alt="ellipses-bg">
      </div>
      
      <div class="picture__img">
      	<img src="${nft.img}" alt="nft-art">
      </div>
		`;
		
		const nftName = document.createElement('p');
		nftName.classList.add('nft-order__name');
		nftName.innerText = nft.title;
		
		const crypto = document.createElement('div');
		crypto.classList.add('nft-order__crypto');
		
		const cryptoLabel = document.createElement('p');
		cryptoLabel.classList.add('nft-order__label');
		cryptoLabel.innerText = 'Adress';
		
		const cryptoAddress = document.createElement('div');
		cryptoAddress.classList.add('nft-order__adress');
		cryptoAddress.innerHTML = `
			<p>${nftOrder.crypto}</p>
			
			<div class="copy">
        <img src="img/svg/copy-gradient.svg" alt="copy">
      </div>
		`;
		
		const status = document.createElement('p');
		status.classList.add('nft-order__status');
		switch (nftOrder.status) {
			case 'Success':
				status.classList.add('nft-order__status_green');
				break;
			case 'Processing':
			case 'Refund':
				status.classList.add('nft-order__status_yellow');
				break;
			case 'Pending':
			case 'Hold':
				status.classList.add('nft-order__status_orange');
				break;
			case 'Fail' :
			case 'Cancel':
				status.classList.add('nft-order__status_red');
				break;
		}
		status.innerText = nftOrder.status;
		
		const price = document.createElement('p');
		price.classList.add('nft-order__price');
		price.innerHTML = `
		 <span class="nft-order__label">
       Price
     </span>

     $${nft.price.toLocaleString('ru-RU')}
		`;
		
		const date = document.createElement('p');
		date.classList.add('nft-order__date');
		
		const orderDate = new Date(nftOrder.date);
		const day = orderDate.getDate();
		const month = orderDate.toLocaleString('en-US', {
			month: 'short',
		});
		const time = orderDate.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});
		
		date.innerText = `${day}, ${month} ${time}`;
		
		mainInfo.appendChild(nftPicture);
		mainInfo.appendChild(nftName);
		mainInfo.appendChild(date);
		
		nftOrderProd.appendChild(nftPicture.cloneNode(true));
		nftOrderProd.appendChild(nftName.cloneNode(true));
		
		crypto.appendChild(cryptoLabel);
		crypto.appendChild(cryptoAddress);
		
		orderCard.appendChild(mainInfo);
		orderCard.appendChild(nftOrderProd);
		orderCard.appendChild(crypto);
		orderCard.appendChild(status);
		orderCard.appendChild(price);
		orderCard.appendChild(date.cloneNode(true));
		
		ordersContainer.appendChild(orderCard);
	}
	
	copyAddress(copy){
		const copyText = copy.querySelector('p').innerText;
		const copyBtn = copy.querySelector('.copy');
		
		copyBtn.addEventListener("click", async () => {
			try {
				await navigator.clipboard.writeText(copyText);
				console.log("Copied!");
			} catch (error) {
				console.error("Failed to copy:", error);
			}
		});
	}
}