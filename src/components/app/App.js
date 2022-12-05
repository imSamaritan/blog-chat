
export default class App extends HTMLElement {
	constructor() {
		super();
		this.state = {};
		this.attachShadow({mode: 'open'});
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

	getCustomElement() {
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