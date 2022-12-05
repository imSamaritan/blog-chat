export default class Utils {
	
	static getProps(element) {
		const props = {};
		const props_names = element.getAttributeNames();
		for (const prop_name of props_names) 
			props[prop_name] = element.getAttribute(prop_name);
		
		return props;
	}

}