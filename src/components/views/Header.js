import App from '../app/App';
import Utils from '../utils/Utils';

export default class Header extends App {
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
				@import url(${state.fonts});
					header {
						width: 100%;
					}

					header * {
						padding: 0;
						margin: 0;
					}

					.header-banner {
						width: 100%;
					}

					img {
						width: 100%;
					}

					.header-text {
						padding: 10px 0 0 25px;
					}

					.header-text .title {
						padding-bottom: 10px 0 5px 0;
						color: teal;
					}

					::slotted(p) {	
						font-size: 20px;
						color: #252525;
						padding:0 0 7px 0 !important;
					}
				</style>
			
				<header>
					<div class="header-banner">
						<img src="${state.banner}" class="banner"/>
					</div>
					<div class="header-text">
						<h1 class="title">${state.title}</h1>
						<div class="text"><slot/></div>
					</div>
				</header>
			`;
	}
}
customElements.define('app-header', Header);