import { initTemplateElement } from "../utility/utils";
import card from "../templates/card";

let _template = initTemplateElement();
_template.innerHTML = card();

class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(_template.content.cloneNode(true));
	}
}

export default Card;