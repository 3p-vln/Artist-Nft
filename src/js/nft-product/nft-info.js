import {database} from "../data/simulate-db";

export class NftInfo {
	constructor() {
		this.idFromUrl = new URLSearchParams(window.location.search).get('id');
		this.nftData = database.nfts.find(item => item.id === this.idFromUrl);
		this.nftInfoContainer = document.querySelector('.nft-info__content');
		
		this.loadInfo(this.nftData);
	}
	
	loadInfo(data){
		const imgBgColor = this.nftInfoContainer.querySelector('.picture');
		imgBgColor.classList.add(`picture_${data.bgColor}`);
		
		const img = this.nftInfoContainer.querySelector('.picture__img img')
		img.src = data.img;
		
		const type = this.nftInfoContainer.querySelector('.info__type');
		type.textContent = data.type;
		
		const breadCrumb = document.querySelector('.breadcrumbs__page_current');
		breadCrumb.textContent = data.title;
		
		const title = this.nftInfoContainer.querySelector('.info__title');
		title.textContent = data.title;
		
		const text = this.nftInfoContainer.querySelector('.info__text');
		text.innerHTML = data.info;
		
		const price = this.nftInfoContainer.querySelector('.info__price');
		price.textContent = '$' + data.price.toLocaleString('ru-RU');
		
		const buy = document.querySelector('.info__btn');
		const currenUser = JSON.parse(localStorage.getItem("currentUser"));
		
		if (!currenUser){
			buy.href = 'authorization.html?form=login';
		} else if(currenUser && !currenUser.premium && data.premium){
			buy.href = 'premium.html';
		} else {
			buy.href = `pay.html?id=${data.id}`;
		}
	}
}