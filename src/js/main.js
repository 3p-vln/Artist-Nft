import {BurgerMenu} from "./components/burger-menu";
import {BiographySwiper} from "./home/biography-swiper";
import {Dropdown} from "./components/dropdown";
import {NftsSwiper} from "./home/nfts-swiper";
import {Parallax} from "./components/parallax";
import {ContactValidate} from "./components/contact-validate";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new BiographySwiper()
	new NftsSwiper()
	new Parallax('.contact__bg.bg');
	new ContactValidate();
})