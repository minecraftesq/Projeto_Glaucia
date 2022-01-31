
var radios = document.getElementsByName("slide"); 
var i = 0;
var meuInterval = setInterval(function(){
    if(i > 4){
        i = 0;
    }
    radios[i].checked = true;
    i++;
}, 4000);

function setarRadio(indice){
    i = indice;
}
