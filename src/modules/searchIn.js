export default function searchIn(){
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