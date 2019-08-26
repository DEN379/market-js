export default function renderCatalog(){
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