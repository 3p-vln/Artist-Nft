import Swiper from "swiper";

export class ForumSwiper {
	constructor() {
		const swiper = new Swiper('.forum__swiper.swiper', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			
			breakpoints: {
				375: {
					spaceBetween: 15,
				},
				1024: {
					spaceBetween: 30,
				},
				1920: {
					spaceBetween: 30,
				}
			}
		});
	}
}