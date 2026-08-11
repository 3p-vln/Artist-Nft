export class LoadCards {
	constructor(cardContainer, nftContainer, data, type = null) {
		this.cardsData = data;
		this.cardsContainer = document.querySelector(cardContainer);
		this.nftContainer = nftContainer;
		this.type = type;
		
		this.cardsData.forEach(card => {
			this.render(card);
		})
	}
	
	render(card) {
		const nftCardContainer = document.createElement('div');
		nftCardContainer.classList.add(this.nftContainer);
		
		const nftCard = document.createElement('div');
		nftCard.classList.add('nft-card');
		nftCard.classList.add(card.id);
		
		const typeCard = document.createElement('p');
		typeCard.classList.add('nft-card__title');
		typeCard.textContent = card.type;
		
		const nftPicture = document.createElement('div');
		nftPicture.classList.add('nft-card__picture');
		nftPicture.classList.add('picture');
		nftPicture.classList.add(`picture_${card.bgColor}`);
		
		const nftPictureBg = document.createElement('div');
		nftPictureBg.classList.add('picture__ellipses-bg');
		
		nftPictureBg.innerHTML = `
		 <img src="img/svg/ellipses-bg.svg" alt="ellipses-bg">
		`;
		
		const nftPictureImg = document.createElement('div');
		nftPictureImg.classList.add('picture__img');
		
		nftPictureImg.innerHTML = `
		<img src="${card.img}" alt="nft-art">
		`;
		
		const nftInfo = document.createElement('div');
		nftInfo.classList.add('nft-card__info');
		nftInfo.classList.add('info');
		
		const nftInfoTitle = document.createElement('p');
		nftInfoTitle.classList.add('info__title');
		nftInfoTitle.textContent = card.title;
		
		const nftInfoText = document.createElement('p');
		nftInfoText.classList.add('info__text');
		nftInfoText.textContent = card.infoShort;
		
		const nftPriceAndBtn = document.createElement('div');
		nftPriceAndBtn.classList.add('nft-card__price');
		nftPriceAndBtn.classList.add('price');
		
		const nftPrice = document.createElement('p');
		nftPrice.classList.add('price__coast');
		nftPrice.textContent = '$' + card.price;
		
		const nftBtn = document.createElement('a');
		nftBtn.classList.add('price__btn');
		nftBtn.classList.add('btn');
		nftBtn.classList.add('btn_light');
		
		nftBtn.textContent = 'Buy now';
		nftBtn.href = `nft-product.html?id=${card.id}`;
		
		nftPriceAndBtn.appendChild(nftPrice);
		nftPriceAndBtn.appendChild(nftBtn);
		
		nftPicture.appendChild(nftPictureBg);
		nftPicture.appendChild(nftPictureImg);
		
		nftInfo.appendChild(nftInfoTitle);
		nftInfo.appendChild(nftInfoText);
		
		nftCard.appendChild(typeCard);
		nftCard.appendChild(nftPicture);
		nftCard.appendChild(nftInfo);
		nftCard.appendChild(nftPriceAndBtn);
		
		nftCard.addEventListener('click', (e) => {
			window.location.href = `nft-product.html?id=${card.id}`;
		})
		
		if(this.type === 'slide'){
			nftCardContainer.classList.add('swiper-slide');
		}
		
		nftCardContainer.appendChild(nftCard);
		
		this.cardsContainer.appendChild(nftCardContainer);
	}
}