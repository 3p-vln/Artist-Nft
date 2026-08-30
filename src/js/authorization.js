import {Chose} from "./authorization/chose";
import {LogInValidate} from "./authorization/log-in-validate";
import {SignUpValidate} from "./authorization/sign-up-validate";
import {SetRole} from "./authorization/set-role";

document.addEventListener('DOMContentLoaded', () => {
	new Chose();
	new SetRole();
	new LogInValidate();
	new SignUpValidate();
})