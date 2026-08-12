import {database} from "../data/simulate-db";

export class LoadCards{
	constructor(container, bigLeft, bigRight){
		this.bigLeft = bigLeft;
		this.bigRight = bigRight;
		this.nftsData = database.nfts.slice(0, 10);
		this.nftsContent = document.querySelector(container);
		
		this.nftsData.forEach(card => {
			this.renderCards(card);
		})
		
	}
	
	renderCards(cards){
		const allCards = document.querySelectorAll(".item");
		
		const nft = document.createElement("div");
		nft.classList.add("pictures-grid__item", "item", cards.id);
		if(!allCards.length){
			if(this.bigRight == 2) nft.classList.add("item__big", "item__big_adapt");
			if(this.bigLeft == 1) nft.classList.add("item__big", "item__big_left");
		} else if(allCards.length == this.bigRight - 1){
			nft.classList.add("item__big", "item__big_right");
		} else if(allCards.length == this.bigRight && this.bigRight != 2){
			nft.classList.add("item__big", "item__big_adapt");
		} else if(allCards.length == this.bigLeft - 1){
			nft.classList.add("item__big", "item__big_left");
		}
		
		const nftImg = document.createElement("div");
		nftImg.classList.add("item__img");
		
		const img = document.createElement("img");
		img.src = cards.imgBig;
		img.alt = 'card';
		
		let lockCard;
		let hoverCard;
		
		if(cards.premium){
			lockCard = document.createElement("div");
			lockCard.classList.add("item__lock", "lock");
			
			const lockAvalable = document.createElement("p");
			lockAvalable.classList.add("lock__avalaible");
			lockAvalable.textContent = 'avalaible for premium';
			
			const lockText = document.createElement("div");
			lockText.classList.add("lock__text");
			lockText.innerHTML = `
			 <img src="img/svg/lock-white.svg" alt="lock">
			 
			 <p>CONTENT LOCKED</p>
			`;
			
			const lockBtn = document.createElement("div");
			lockBtn.classList.add("lock__btn");
			
			const btn = document.createElement("a");
			btn.classList.add("item__unlock", "btn", "btn_black");
			btn.innerHTML = `
			<span>Unlock</span>
			
			<img src="img/svg/left-arr.svg" alt="left-arr">
			`;
			
			lockBtn.appendChild(btn);
			
			lockCard.appendChild(lockAvalable);
			lockCard.appendChild(lockText);
			lockCard.appendChild(lockBtn);
		} else {
			hoverCard = document.createElement("div");
			hoverCard.classList.add("item__hover");
			
			const title = document.createElement("h3");
			title.classList.add("item__title");
			title.innerText = cards.title;
			
			const info = document.createElement("p");
			info.classList.add("item__info");
			info.innerText = cards.infoShort;
			
			const price = document.createElement("p");
			price.classList.add("item__price");
			price.innerText = '$' + cards.price;
			
			const hoverBtns = document.createElement("div");
			hoverBtns.classList.add("item__btns");
			
			const btnBuy = document.createElement("a");
			btnBuy.classList.add("item__buy", "btn", "btn_black");
			btnBuy.innerHTML = `
			<span>
				Buy
			</span>
			`;
			
			const btnView = document.createElement("a");
			btnView.classList.add("item__viev", "btn", "btn_black");
			btnView.innerHTML = `
			<span>
				View
			</span>
			
			<img src="img/svg/left-arr.svg" alt="left-arr">
			`;
			
			hoverBtns.appendChild(btnBuy);
			hoverBtns.appendChild(btnView);
			
			hoverCard.appendChild(title);
			hoverCard.appendChild(info);
			hoverCard.appendChild(price);
			hoverCard.appendChild(hoverBtns);
		}
		
		nftImg.appendChild(img);
		
		nft.appendChild(nftImg);
		if(lockCard) nft.appendChild(lockCard);
		if(hoverCard) nft.appendChild(hoverCard);
		
		this.nftsContent.appendChild(nft);
	}
}