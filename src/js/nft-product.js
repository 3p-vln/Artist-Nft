import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {NftInfo} from "./nft-product/nftInfo";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new NftInfo();
})