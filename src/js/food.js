import foodCard from '../tamplates/card.hbs';
import menuList from './menu.json';
import refs from './refs.js';
const{foodList}=refs;

function createFoodList(menuList){
    return foodCard(menuList)
};
const cardsMurkup = createFoodList(menuList)
foodList.insertAdjacentHTML('beforeend', cardsMurkup);

