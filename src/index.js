//window.onload=function(){  

// Checkbox


// Cart-visible


// Add cart-elements
  

//filter cards (checkbox, minmax)



// search on site


// data-base


// generate universal card


// catalog(alfa)

'use strict';


import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import checkbox from './modules/checkbox';
import cartWind from './modules/cartWind';
import addCart from './modules/addCart';
import searchIn from './modules/searchIn';

getData().then(data=>{
    renderCards(data);
    renderCatalog();
    checkbox();
    cartWind();
    addCart();
    searchIn();
});

//}

