import items from './menu.json';
import itemsTemplate from './templates/menu-item.hbs';

const menuListEl = document.querySelector('.js-menu');

const menuMarkUp = itemsTemplate(items);
menuListEl.insertAdjacentHTML('beforeend', menuMarkUp);
