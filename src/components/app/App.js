import Utils from "../utils/Utils";

export const _parentState = new WeakMap();

export default class App extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.state = {};
	}
	
	connectedCallback() {
		//mount component rendering
		this.shadowRoot.innerHTML = this.render();
	}
	setState(new_state) {
		this.state = new_state;
		//mounted state changed rendering
		this.shadowRoot.innerHTML = this.render(this.state);
	}

	get getCustomElement() {
		return document.querySelector(this.localName);
	}

	render(state = {}) {
		return `
			<style>
				article {
					width: 100%;
					height: 100%;
					padding: 0;
					margin: 0;
					box-sizing: border-box;
				}
			</style>

			<article>
				<slot />
			</article>
		`;
	}
}

customElements.define('app-root', App);