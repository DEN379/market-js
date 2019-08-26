import filter from './filter';

export default function checkbox(){
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
    var min=document.querySelector('#min');
    var max=document.querySelector('#max');
    min.addEventListener('input',filter);
    max.addEventListener('input',filter);
}