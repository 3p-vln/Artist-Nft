import {Swiper} from "swiper";

export class BiographySwiper {
	constructor() {
		new Swiper('.info__date-swiper.swiper', {
			slidesPerView: 'auto',
			spaceBetween: 35,
			
			breakpoints: {
				375: {
					spaceBetween: 25,
				},
				1024: {
					spaceBetween: 35,
				},
				1920: {
					spaceBetween: 35,
				}
			}
		})
	}
}
