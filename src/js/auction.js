import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {NftInfoAuction} from "./auction/nft-info-auction";
import {HideBtn} from "./auction/hide-btn";
import {ProgressBar} from "./auction/progress-bar";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new NftInfoAuction();
	new HideBtn();
	new ProgressBar();
})