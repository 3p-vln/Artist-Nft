import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {NftInfo} from "./nft-product/nftInfo";
import {Parallax} from "./components/parallax";
import {ContactValidate} from "./components/contact-validate";
import {ProccessInfo} from "./nft-product/proccess-info";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new NftInfo();
	new ProccessInfo();
	new Parallax('.contact__bg.bg');
	new ContactValidate();
})