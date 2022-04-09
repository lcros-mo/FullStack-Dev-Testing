window.onload = function (){
    asignarEventosItemsLista();
}

function manejadorClickElementosLista(){
    var texto = this.innerHTML;
    this.innerHTML = texto+" (pusaldo)";
    document.getElementById('pizarra').innerHTML= texto;
}

function asignarEventosItemsLista(){
    var refs = document.getElementsByTagName('li');
    var j = refs.length;
    for (var i=0;i<j;i++){
        refs[i].onclick = manejadorClickElementosLista;
    }
}