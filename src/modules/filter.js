export default function filter(){
    var ch=document.querySelector('.filter-check_checkmark');
    var chH=document.querySelector('.filter-check_checkbox');
    var card=document.querySelectorAll('.goods .card');
    var actLi=document.querySelector('.catalog-list li.active');
    console.log(document.querySelector('.catalog-list li.active'));
    chH.addEventListener('change',function(){
        if (this.checked){
            ch.classList.add('checked');
        }
        else { ch.classList.remove('checked');}
    });

    card.forEach(c => {
        var cardPrice=c.querySelector('.card-price');
        var price=parseInt(cardPrice.textContent);
        c.parentNode.style.display='';
            if((min.value> price && min.value) || (max.value<price && max.value)){
                c.parentNode.style.display='none';
            }else if (chH.checked && !c.querySelector('.card-sale')){
                c.parentNode.style.display='none';
            }else if(actLi){
                if(c.dataset.category !== actLi.textContent) c.parentNode.style.display='none';
            }
    });
    
}