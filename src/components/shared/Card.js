import App from "../app/App";
import Utils from "../utils/Utils";

export default class Card extends App {
	constructor() {
		super();
		this.state = Utils.getProps(this);
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.render(this.state);
	}

	render(state) {
		return `
			<style>
				article {
					width: 100%;
					height: 100%;
					padding: 10px 10px;
					box-sizing: border-box;
					border: none;
					border-radius: 10px;
					box-shadow: -1px -1px 1px rgba(0,0,0,.2), 2px 2px 2px rgba(0,0,0,.2);
					margin-bottom: 50px;
				}
			</style>
		
			<article class="card">
				<slot/>
			</article>
		`;
	}
} 

customElements.define('app-card', Card);