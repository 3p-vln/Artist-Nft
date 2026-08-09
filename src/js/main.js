import {BurgerMenu} from "./components/burger-menu";
import {BiographySwiper} from "./home/biography-swiper";
import {Dropdown} from "./components/dropdown";
import {NftsSwiper} from "./home/nfts-swiper";
import {Parallax} from "./components/parallax";
import {ContactValidate} from "./components/contact-validate";
import {LoadCards} from "./components/load-cards";
import {database} from "./data/simulate-db";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new BiographySwiper();
	new LoadCards('.nfts__swiper .swiper-wrapper', 'nfts_nft',  database.nfts, 'slide');
	new NftsSwiper();
	new Parallax('.contact__bg.bg');
	new ContactValidate();
})