export class PremiumInfo{
	constructor(idFromUrl){
		this.loadInfo(idFromUrl)
	}
	
	loadInfo(idFromUrl){
		const titlePage = document.querySelector('.title__main span');
		const name = document.querySelector('.nft-info__name');
		
		switch (idFromUrl){
			case 'premium-week':
				titlePage.textContent = 'Premium for One Week';
				name.textContent = 'Premium for One Week';
				break;
			
			case 'premium-month':
				titlePage.textContent = 'Premium for One Month';
				name.textContent = 'Premium for One Month';
				break;
			
			case 'premium-year':
				titlePage.textContent = 'Premium for One Year';
				name.textContent = 'Premium for One Year';
				break;
		}
		
		const price = document.querySelector('.price__coast');
		price.innerHTML = `
			<span>
        PRICE
      </span>

      $200.99
		`;
		
		const size = document.querySelector('.size');
		size.style.display = 'none';
		
		const info = document.querySelector('.info__text');
		info.textContent = 'To purchase item by crypto you have to send money to this wallet. After 5 minute result will sent in your mail';
	}
}