import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {NftInfoAuction} from "./auction/nft-info-auction";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new NftInfoAuction();
})