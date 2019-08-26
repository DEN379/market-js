export default function cartWind(){ 
    var cart=document.querySelector('#cart');
    var cartW=document.querySelector('.cart');
    cart.onclick=function(){
        cartW.style.display='flex';
        document.querySelector('body').style.overflow='hidden';
    }

    var close=document.querySelector('.cart-close');
    close.onclick=function(){
        cartW.style.display='none';
        document.querySelector('body').style.overflow='scroll';
    }
}