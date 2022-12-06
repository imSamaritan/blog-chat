import App from "../app/App";
import Utils from "../utils/Utils";

export default class LoginForm extends App {
	constructor() {
		super();
		this.state = {...Utils.parentState};
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.render(this.state);
	}

	render(state) {
		return `
			<style>
			@import url('${state.fonts}');

			form {
				--light-grey: #ddd;
				--grey-4: #444;
				--grey-2: #222;
				--grey-3: #333;
				--grey-a: #aaa;
				--grey-d: #ddd;
				--grey-e: #eee;
				--teal:  rgba(0, 128, 128);
				--teal-1:  rgba(0, 128, 128,.1);
				--teal-7:  rgba(0, 128, 128,.7);
				--teal-8:  rgba(0, 128, 128,.8);
				--teal-9:  rgba(0, 128, 128,.9);


				width: 100%;
				box-sizing: border-box;
			}

			.field {
				width: 100%;
				padding: 10px 0;
				box-sizing: border-box;
			}

			.field label {
				display: block;
				padding-bottom: 3px;
				text-align: left;
				color: var(--grey-4);
			}

			.field input {
				display: block;
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				font-size: 15px;
				font-weight: normal;
				border: none;
				color: var(--grey-2);
				transition: background .5s ease-in-out;
			}

			.field input:focus {
				background: var(--teal-light);
				box-shadow: 0 0 30px var(--teal-light);
			}

			input:has(.input-fied) {
				background: teal !important;
			}

			.field input::placeholder {
				color: var(--grey-a);
			}

			.field input:focus {
				outline: none !important;
			}
			
			.field .input-field {
				width: 100%;
				box-sizing: border-box;
				display: grid;
				grid-template-columns: 94% 5%;
				grid-gap: 1px;
				padding: 10px 5px 2px 10px;
				border-radius: 7px;
				border: 1px solid var(--light-grey);
			}

			[for="email"] + .input-field {
				padding: 15px 0 10px 10px !important;
			}

			.field .input-field span {
				padding: 4px;
				color: var(--teal-7);
				font-size: 18px;
				cursor: pointer;
				transition: color .3s ease;
			}

			.field .input-field span:hover {
				color: var(--teal);
			}

			button {
				width: 100%;
				font-size: 19px;
				padding: 10px 0;
				border: none;
				border-radius: 7px;
				background-color: rgba(0, 128, 128,.9);
				color: var(--grey-d);
				cursor: pointer;
				font-weight: bold;
				transition: background .5s ease;
			}

			button:hover {
				background: rgba(0, 128, 128,1);
			}

			.field:last-child {
				text-align: center;
			}

			[type="button"] {
				background: rgba(9, 119, 9,.9);
				padding: 10px;
				width: 70%;
			}

			[type="button"]:hover {
				background: rgba(9, 119, 9,1);
			}

			.field:nth-child(4) {
				text-align: center;
				padding: 2px 0 15px 0 !important;
			}

			.field:nth-child(4) a {
				color: var(--teal-8);
				text-decoration: none;
				transition: color .3s ease-in-out;
			}

			.field:nth-child(4) a:hover {
				color: var(--teal);
			}
			</style>
		
			<form>
				<div class="field">
					<label for="email">Email address</label>
					<div class="input-field">
						<input type="text" id="email" class="email" placeholder="mysocialnetwork@gmail.com"/>
					</div>
				</div>

				<div class="field">
					<label for="password">Password</label>
					<div class="input-field">
					<input type="password" id="password" class="password" placeholder="********"/>
					<span class="bi bi-eye"></span>
					</div>	
				</div>

				<div class="field">
					<button type="submit">Log in</button>
				</div>

				<div class="field">
					<a href="#" class="">Forgotten password</a>
				</div>

				<hr class="underline"/>

				<div class="field">
					<button type="button">Create account</button>
				</div>								
			</form>
		`;
	}

}

customElements.define('login-form', LoginForm);