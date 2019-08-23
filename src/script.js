window.onload=function(){  

// Checkbox
function checkbox(){
    var ch=document.querySelector('.filter-check_checkmark');
    var chH=document.querySelector('.filter-check_checkbox');
    var card=document.querySelectorAll('.goods .card');
    chH.addEventListener('change',function(){
        if (this.checked){
            ch.classList.add('checked');
        }
        else { ch.classList.remove('checked');}
        filter();
    });
}

// Cart-visible
function cartWind(){ 
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

// Add cart-elements
function addCart(){  
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
    
    var min=document.querySelector('#min');
    var max=document.querySelector('#max');

    //filter cards (checkbox, minmax)
function filter(){
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


// search on site
function searchIn(){
    var card=document.querySelectorAll('.card');
    var sB=document.querySelector('.search-btn button');
    var search=document.querySelector('.search-wrapper_input');
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

// data-base
function getData(){
    var goodW=document.querySelector('.goods');
    return fetch('../db/db.json')
    .then((responsive)=>{
        if(responsive.ok){
            return responsive.json();
        }else throw new Error('Data isnt beeing got'+ responsive.status);

    })
    .then(data=>{
        return data;
    })
    .catch(err=>{
        console.warn(err);
        goodW.innerHTML='<div style="margin:20px 20px; color: red;">Ops, somethind did wrong :((</div>';
    });
}

// generate universal card
function renderCards(data){
    var goodW=document.querySelector('.goods');
    data.goods.forEach(good=>{
        let card=document.createElement('div');
        card.className='col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML=`
        <div class="card" data-category="${good.category}">
        ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
        <div class="card-img-wrapper">
            <span class="card-img-top"
                style="background-image: url('${good.img}')"></span>
        </div>
        <div class="card-body justify-content-between">
            <div class="card-price">${good.price} ₽</div>
            <h5 class="card-title">${good.title}</h5>
            <button class="btn btn-primary">В корзину</button>
        </div>
        </div>
        `;
        goodW.appendChild(card);
    })
}

// catalog(alfa)
function renderCatalog(){
    var catW=document.querySelector('.catalog');
    var catL=document.querySelector('.catalog-list');
    
    var catB=document.querySelector('.catalog-button button');
    const cardes=document.querySelectorAll('.goods .card');
    var categories = new Set();
    
    cardes.forEach(c=>{
       categories.add(c.dataset.category);
       console.log(c.dataset.category);
    });
    
    categories.forEach(item=>{
        var li=document.createElement('li');
        li.textContent=item;
        catL.appendChild(li);
    });
    var allLi=catL.querySelectorAll('li');
    var allLi1=catL.querySelector('li:first-child');
    var allLi2=catL.querySelector('li:nth-child(2)');
    var allLi3=catL.querySelector('li:last-child');

    var filterTitle=document.querySelector('.filter-title h5')
    catB.addEventListener('click',(e)=>{
        if(catW.style.display=='block'){
            catW.style.display='none';
        }else catW.style.display='block';
        //e.stopPropagation();
        console.log(e.target.tagName === 'LI');
        // if(e.target.tagName === "LI"){
        //    // console.log(event.target);
       //  //  cardes.forEach(card=>{
       // //         if(card.dataset.category===e.target.textContent){
      //  //             console.log(3);
       // //             card.style.display='';
       // //         } else {
       // //             card.style.display='none';
       // //         }
      //  //     });
        //     allLi.forEach(el=>{
        //         if(el===event.target){
        //             el.classList.add('active');
        //         }
        //         else {
        //             el.classList.remove('active');
        //         }
        //     });
        //     filterTitle.textContent=e.target.textContent;
        //     filter();
        // }
    });
    allLi1.addEventListener('click',e=>{
        cardes.forEach(card=>{
        if(allLi1.textContent == card.dataset.category){
            card.style.display='';
            
        }else card.style.display='none';
        });
        // var chH=document.querySelector('.filter-check_checkbox');
        // if(chH.checked)allLi1.classList.add('active');
        // else allLi1.classList.remove('active');
    });
   // filter();
    allLi2.addEventListener('click',e=>{
        cardes.forEach(card=>{
        if(allLi2.textContent == card.dataset.category){
            card.parentNode.style.display='';
        }else card.parentNode.style.display='none';
        });
        // var chH=document.querySelector('.filter-check_checkbox');
        // if(chH.checked)allLi2.classList.add('active');
        // else allLi2.classList.remove('active');
    });
   // filter();
    allLi3.addEventListener('click',e=>{
        cardes.forEach(card=>{
        if(allLi3.textContent == card.dataset.category){
            card.parentNode.style.display='';
        }else card.parentNode.style.display='none';

        });
        // var chH=document.querySelector('.filter-check_checkbox');
        // if(chH.checked)allLi3.classList.add('active');
        // else allLi3.classList.remove('active');
    });
    //filter();
}


getData().then(data=>{
    renderCards(data);
    renderCatalog();
    checkbox();
    min.addEventListener('input',filter);
    max.addEventListener('input',filter);
    cartWind();
    addCart();
    searchIn();
});

}

