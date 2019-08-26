export default function addCart(){  
    var cW=document.querySelector('.cart-wrapper');
    var cE=document.querySelector('#cart-empty');
    var card=document.querySelectorAll('.card');
    card.forEach( function(c) {
        var butC=c.querySelector('.btn-primary');
        
        butC.addEventListener('click',function(){
            cE.style.display='none';
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
        var counter=document.querySelector('.counter');
        var cW=document.querySelector('.cart-wrapper');
        var cE=document.querySelector('#cart-empty');
        var cardCart=cW.querySelectorAll('.card');
        var cardPrice=cW.querySelectorAll('.card-price');
        var cartT=document.querySelector('.cart-total span');
        
        var sum=0;
        cardPrice.forEach(c=>{
            sum+=parseInt(c.textContent);
        });
        cartT.textContent=sum;

        counter.innerHTML=cardCart.length;
        if(counter.textContent==0) cE.style.display='';
    }
}