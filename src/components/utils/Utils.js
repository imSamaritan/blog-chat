import App from "../app/App";

export default class Utils {
	
	static getProps(element) {
		const props = {};
		const props_names = element.getAttributeNames();
		for (const prop_name of props_names) 
			props[prop_name] = element.getAttribute(prop_name);
		
		return props;
	}

	static get parentState() {
		const _parent = new App();
		const state = Utils.getProps(_parent.getCustomElement);

		return state;
	}

	static updateElement(new_element, old_element) {
		const parent_element = old_element.parentElement;
		parent_element.replaceChild(new_element, old_element);
		console.log(parent_element, old_element, new_element);
	}
}