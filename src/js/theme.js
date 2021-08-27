import refs from './refs.js';
const{foodList, themeInput, body}=refs;

themeInput.addEventListener('change', changeTheme);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

function changeTheme(e){
   body.setAttribute('class', body.classList.contains(Theme.DARK)?Theme.LIGHT:Theme.DARK);
   localStorage.setItem('theme', body.classList.value);
}
function currentTheme(e){
    body.setAttribute('class', localStorage.getItem('theme')===null?Theme.LIGHT:localStorage.getItem('theme'));
    if(localStorage.getItem('theme')===Theme.DARK){themeInput.checked = 'true'}
}
currentTheme();