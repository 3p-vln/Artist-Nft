import {BurgerMenuCabinet} from "./cabinet/burger-menu-cabinet";
import {Orders} from "./cabinet/orders";
import {LogOut} from "./cabinet/log-out";
import {MenuChose} from "./cabinet/menu-chose";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenuCabinet();
	new LogOut();
	new MenuChose();
	new Orders();
})