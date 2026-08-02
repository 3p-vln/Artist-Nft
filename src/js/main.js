import {BurgerMenu} from "./components/burger-menu";
import {BiographySwiper} from "./home/biography-swiper";
import {Dropdown} from "./components/dropdown";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new BiographySwiper()
})