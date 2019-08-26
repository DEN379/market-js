export default function getData(){
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