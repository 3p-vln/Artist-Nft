import { NftInfo } from "../nft-product/nft-info";
import JustValidate from "just-validate";

export class NftInfoAuction extends NftInfo {
	constructor() {
		super();
		
		this.bidValidate();
		this.timer();
	}
	
	loadInfo(data) {
		const imgBgColor = this.nftInfoContainer.querySelector('.picture');
		imgBgColor.classList.add(`picture_${data.bgColor}`);
		
		const img = this.nftInfoContainer.querySelector('.picture__img img');
		img.src = data.img;
		
		const type = this.nftInfoContainer.querySelector('.info__type');
		type.textContent = data.type;
		
		const title = this.nftInfoContainer.querySelector('.info__title');
		title.textContent = data.title;
		
		const estimate = this.nftInfoContainer.querySelector('.estimate span');
		estimate.textContent = '$' + Number(data.price).toLocaleString('en-US');
		
		const higestPrice = this.nftInfoContainer.querySelector('.bid__higest-price');
		const bidInput = this.nftInfoContainer.querySelector('.form__input#bid');
		
		const savedPrice = Number(localStorage.getItem('bidedPrice')) || 0;
		
		const formattedPrice = savedPrice
			.toLocaleString('ru-RU')
			.replace(/\u00A0/g, ' ');
		
		higestPrice.textContent = '$' + formattedPrice;
		bidInput.placeholder = '$' + formattedPrice;
	}
	
	bidNewPrice() {
		const bidInput = this.nftInfoContainer.querySelector('.form__input#bid');
		const higestPrice = this.nftInfoContainer.querySelector('.bid__higest-price');
		
		const bidedPrice = Number(bidInput.value);
		
		localStorage.setItem('bidedPrice', bidedPrice);
		
		const formattedPrice = bidedPrice
			.toLocaleString('ru-RU')
			.replace(/\u00A0/g, ' ');
		
		higestPrice.textContent = '$' + formattedPrice;
		bidInput.placeholder = '$' + formattedPrice;
	}
	
	bidValidate() {
		const validate = new JustValidate('.bid__form', {
			errorLabelStyle: {
				color: '#CDB1FBFF',
			}
		});
		
		validate
			.addField('#bid', [
				{
					rule: 'required',
					errorMessage: 'Enter your bid',
				},
				{
					validator: (value) => {
						const newPrice = Number(value);
						const previousPrice =
							Number(localStorage.getItem('bidedPrice')) || 0;
						
						return newPrice > previousPrice;
					},
					errorMessage: 'Your bid must be higher',
				},
			])
			.onSuccess((event) => {
				event.preventDefault();
				
				this.bidNewPrice();
			});
	}
	
	timer() {
		const daysElement = this.nftInfoContainer.querySelector('.countdown__day');
		const hoursElement = this.nftInfoContainer.querySelector('.countdown__hours');
		const minutesElement = this.nftInfoContainer.querySelector('.countdown__minutes');
		const secondsElement = this.nftInfoContainer.querySelector('.countdown__seconds');
		const finalDateElement = this.nftInfoContainer.querySelector('.timer__final-date');
		
		const targetDate = new Date('2026-09-08T08:00:00');
		
		const updateTimer = () => {
			const difference = targetDate - new Date();
			
			if (difference <= 0) {
				daysElement.textContent = '00';
				hoursElement.textContent = '00';
				minutesElement.textContent = '00';
				secondsElement.textContent = '00';
				
				finalDateElement.textContent = 'Auction ended';
				
				clearInterval(interval);
				return;
			}
			
			const days = Math.floor(
				difference / (1000 * 60 * 60 * 24)
			);
			
			const hours = Math.floor(
				(difference / (1000 * 60 * 60)) % 24
			);
			
			const minutes = Math.floor(
				(difference / (1000 * 60)) % 60
			);
			
			const seconds = Math.floor(
				(difference / 1000) % 60
			);
			
			daysElement.textContent = String(days).padStart(2, '0') + 'd';
			hoursElement.textContent = String(hours).padStart(2, '0') + 'h';
			minutesElement.textContent = String(minutes).padStart(2, '0') + 'm';
			secondsElement.textContent = String(seconds).padStart(2, '0') + 's';
		};
		
		updateTimer();
		
		const interval = setInterval(updateTimer, 1000);
	}
}