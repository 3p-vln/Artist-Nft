import {database} from "../data/simulate-db";

export class NftInfo{
	constructor(idFromUrl){
		this.nftData = database.nfts.find(item => item.id === idFromUrl);
		
		this.loadInfo(this.nftData)
	}
	
	loadInfo(data){
		const titlePage = document.querySelector('.title__main span');
		titlePage.textContent = data.title;
		
		const name = document.querySelector('.nft-info__name');
		name.textContent = data.title;
		
		const price = document.querySelector('.price__coast');
		price.innerHTML = `
			<span>
        PRICE
      </span>

      $${data.price.toLocaleString('ru-RU')}
		`;
		
		const info = document.querySelector('.info__text');
		info.innerHTML = data.info;
	}
}