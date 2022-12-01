//Create template element
export const initTemplateElement = () => {
	return document.createElement('template');
};

//Get props
export const getProp = (element, attr_name) => {
	return element.getAttribute(attr_name);
}

//Get template child element
export const getElement = (custom_elementDOM, element) => {
	return custom_elementDOM.querySelector(element);
}

//Get forward even element from the CustomElement
export const getForwardingEventElement = (parent, _event) => {
	return parent.shadowRoot.querySelector(`[event="${_event}"]`);
}
