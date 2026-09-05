import {Chose} from "./authorization/chose";
import {LogIn} from "./authorization/log-in";
import {SignUp} from "./authorization/sign-up";
import {SetRole} from "./authorization/set-role";

document.addEventListener('DOMContentLoaded', () => {
	new Chose();
	new SetRole();
	new LogIn();
	new SignUp();
})