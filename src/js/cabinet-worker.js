import {BurgerMenuCabinet} from "./cabinet/burger-menu-cabinet";
import {LogOut} from "./cabinet/log-out";
import {MenuChose} from "./cabinet/menu-chose";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenuCabinet();
	new LogOut();
	new MenuChose();
})