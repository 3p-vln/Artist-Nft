import {Dropdown} from "../components/dropdown";

export class FormDropdowns{
	constructor() {
		this.dropdowns = document.querySelectorAll(".dropdown_form");
		
		this.dropdowns.forEach(element => {
			new Dropdown(element);
		})
	}
}