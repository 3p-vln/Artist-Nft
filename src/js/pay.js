import {BurgerMenu} from "./components/burger-menu";
import {Dropdown} from "./components/dropdown";
import {Chose} from "./pay/chose";
import {CreditPaypal} from "./pay/credit-paypal";
import {Crypto} from "./pay/crypto";
import {NftInfo} from "./pay/nft-info";

document.addEventListener('DOMContentLoaded', () => {
	new BurgerMenu();
	new Dropdown(".menu__dropdown");
	new Chose();
	
	new CreditPaypal('credit');
	new CreditPaypal('paypal');
	new Crypto();
	
	new NftInfo();
})