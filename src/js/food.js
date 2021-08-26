import foodCard from '../tamplates/card.hbs';
import menuList from './menu.json';
console.log(menuList);

const foodList = document.querySelector('.js-menu');
function createFoodList(menuList){
    return foodCard(menuList)
};
const cardsMurkup = createFoodList(menuList)
foodList.insertAdjacentHTML('beforeend', cardsMurkup);