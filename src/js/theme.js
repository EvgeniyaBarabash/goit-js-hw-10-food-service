import refs from './refs.js';
const{foodList, themeInput, body}=refs;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const{LIGHT, DARK}=Theme;

themeInput.addEventListener('change', switchTheme);

function switchTheme(){
  if(themeInput.checked){
 body.classList.add(DARK)
    body.classList.remove(LIGHT)
  }else{
    body.classList.remove(DARK)
    body.classList.add(LIGHT)
  }
  localStorage.setItem('theme', body.classList.value)
};

function onSwitcherChange(){
  const userTheme = localStorage.getItem('theme');
  if(userTheme){
   body.classList.add(userTheme)
   if (userTheme === DARK) {
       themeInput.checked = true;
      }
  }

}
onSwitcherChange()
