import { 
	getElement,
	getProp, 
	initTemplateElement 
} from "../utility/utils";
import header from "../templates/header";

let _template = initTemplateElement();
_template.innerHTML = header();

class Header extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(_template.content.cloneNode(true));

		//Props
		this.banner_img_src = getProp(this, 'banner');
		
		//Template elements
		this.img_banner_element = getElement(this.shadowRoot, '.banner-img');
		
		//Render props
		this.img_banner_element.src = this.banner_img_src;
	}
}

export default Header;