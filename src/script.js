window.onload=function(){
    var lab=document.querySelector('.filter-check_label');
    var ch=document.querySelector('.filter-check_checkmark');
    var chH=document.querySelector('.filter-check_checkbox');

// Checkbox
    chH.addEventListener('change',function(){
        if (this.checked){
            ch.classList.add('checked');
        }
        else { ch.classList.remove('checked');}
        minmax();
    });

// Cart-visible
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

// Add cart-elements
    var card=document.querySelectorAll('.goods .card');
    var cW=document.querySelector('.cart-wrapper');
    var cE=document.querySelector('#cart-empty');
    var counter=document.querySelector('.counter');
    //
    
    var i=0;
    card.forEach( function(c) {
        var butC=c.querySelector('.btn-primary');
        
        butC.addEventListener('click',function(){
            cE.remove();
            var cardClone=c.cloneNode(true);
            cW.appendChild(cardClone);
            cash();
            
            var remC=cardClone.querySelector('.btn-primary');
            remC.innerHTML='Убрать с корзины';
            remC.addEventListener('click',function(){
                cardClone.remove();
                cash();
            });
        });
    });
    
    
   
function cash(){
    var cardCart=cW.querySelectorAll('.card');
    var cardPrice=cW.querySelectorAll('.card-price');
    var cartT=document.querySelector('.cart-total span');
    counter.innerHTML=cardCart.length;
    if(cardCart.length==0) cW.appendChild(cE);
    
    var sum=0;
    cardPrice.forEach(c=>{
        sum+=parseInt(c.textContent);
    });
    cartT.textContent=sum;
}


var min=document.querySelector('#min');
var max=document.querySelector('#max');
min.addEventListener('input',minmax);
max.addEventListener('input',minmax);


function minmax(){
    card.forEach(c => {
    var cardPrice=c.querySelector('.card-price');
    var price=parseInt(cardPrice.textContent);
        if((min.value> price && min.value) || (max.value<price && max.value)){
            c.parentNode.style.display='none';
        }else if (chH.checked && !c.querySelector('.card-sale')){
            c.parentNode.style.display='none';
        } else c.parentNode.style.display='';
    });
}

var search=document.querySelector('.search-wrapper_input');
var sB=document.querySelector('.search-btn button');


sB.addEventListener('click', function(){
    var sText=new RegExp(search.value.trim(), 'i');
    card.forEach(c => {
        var title=c.querySelector('.card-title');
        if(!sText.test(title.textContent)){
            c.parentNode.style.display='none';
        } else c.parentNode.style.display='';
    });
});
}

