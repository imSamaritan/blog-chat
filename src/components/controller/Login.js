import Auth from "../model/Auth";
import Utils from "../utils/Utils";
import LoginForm from "../views/LoginForm";

export class Login extends Auth {
	static toggleIconPasswordVisibility(_this) {
		let icon = _this.state.icon;

		if (icon === _this.icons.show) 
			_this.state.icon = _this.icons.hide;
		else if (icon === _this.icons.hide) 
			_this.state.icon = _this.icons.show;
		
		_this.setAttribute('icon', icon);
	}

	static togglePasswordVisibility(observed_attr, _this) {
		let type = 'text';
		const passwordInputEl = _this.toggleIconEl.previousElementSibling;
		
		if (observed_attr.oldValue && observed_attr.attr === 'icon') {

			if (observed_attr.newValue === _this.icons.show) type = type;
			if (observed_attr.newValue === _this.icons.hide) type = 'password';

			passwordInputEl.type = type;
			_this.toggleIconEl.className = `bi bi-${_this.state.icon}`;
	}
	}
}