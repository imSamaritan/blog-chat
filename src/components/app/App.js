
export default class App extends HTMLElement {
	constructor() {
		super();
		this.state = {};
		this.attachShadow({mode: 'open'});
	}
	
	connectedCallback() {
		this.shadowRoot.innerHTML = this.render();
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