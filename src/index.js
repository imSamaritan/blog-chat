import './sass/main.scss';
import 'bootstrap';
import banner from './assets/banner.jpg';
import Header from './components/views/Header';
import Card from './components/shared/Card';

customElements.define('app-header', Header);
customElements.define('app-card', Card);