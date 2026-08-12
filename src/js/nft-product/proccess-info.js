import {database} from "../data/simulate-db";

export class ProccessInfo{
	constructor(){
		this.idFromUrl = new URLSearchParams(window.location.search).get('id');
		this.nftData = database.nfts.find(item => item.id === this.idFromUrl);
		
		this.loadInfo(this.nftData)
	}
	
	loadInfo(data){
		const img = document.querySelector('.video__img img')
		img.src = data.imgBig;
		
		const author = document.querySelector('.author__name');
		author.innerText = data.owner;
		
		const premium = document.querySelector('.info__premium');
		
		if(!data.premium) premium.style.display = 'none';
		
		const date = document.querySelector('.info__date');
		date.innerText = data.createDate;
	}
}