import {NftInfo} from "./nft-info";
import {PremiumInfo} from "./premium-info";

export class InfoBuy {
	constructor(){
		this.idFromUrl = new URLSearchParams(window.location.search).get('id');
		
		if(this.idFromUrl == 'premium-week' || this.idFromUrl == 'premium-month' || this.idFromUrl == 'premium-year')
			new PremiumInfo(this.idFromUrl);
		else
			new NftInfo(this.idFromUrl);
	}
}