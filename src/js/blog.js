import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {ForumSwiper} from "./blog/forum-swiper";


document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new ForumSwiper();
})