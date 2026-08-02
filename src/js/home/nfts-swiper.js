import Swiper from "swiper";

export class NftsSwiper{
	constructor(){
		const swiper = new Swiper('.nfts__swiper.swiper', {
			loop: true,
			slidesPerView: 'auto',
			grabCursor: true,
			
			breakpoints: {
				1024: {
					centeredSlides: true,
					spaceBetween: 30,
				},
				768: {
					centeredSlides: true,
					spaceBetween: 20,
				},
				300: {
					centeredSlides: false,
					spaceBetween: 16,
				}
			},
		});
		
		swiper.slideNext();
	}
}