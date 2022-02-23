palabras=["PIRULETA","CASA","CEBOLLA","ORDENADOR","PANTALLA","DADOS","TECLADO"];
imagenes=["img/0.png","img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png"]
acierto=[];
var vidas=1;
var nuevaPalabra;
window.addEventListener("DOMContentLoaded",principal)
function principal(){
    crearBotones();
    cargarBotones();
    generarPalabra();
    generarBarritas();
    
}

function generarPalabra(){
    maximo=palabras.length;
    nuevaPalabra=palabras[Math.floor(Math.random()*maximo)];
}

function generarBarritas(){
    longitud=nuevaPalabra.length;
    if(document.getElementById("palabra")!=null)
    for(i=0;i<longitud;i++){
        document.getElementById("palabra").innerHTML+="<span class='barritas' id='letra"+i+"'> _</span>";
    }
}
function crearBotones(){
    if(document.getElementById("formulario")!=null){
        formulario=document.getElementById("formulario");
        for(let i=65;i<79;i++){
            formulario.innerHTML+="<button class='boton' type='button' value='"+String.fromCharCode(i)+"'>"+String.fromCharCode(i)+"</button>"
        }   
        formulario.innerHTML+="<button class='boton' type='button' value='Ñ'>Ñ</button>"
        for(let i=79;i<91;i++){
            formulario.innerHTML+="<button class='boton' type='button' value='"+String.fromCharCode(i)+"'>"+String.fromCharCode(i)+"</button>"
    } 
    }
     
    
}

function cargarBotones(){
    arrayBotones=document.querySelectorAll("button");
    for(let i=0;i<arrayBotones.length;i++){
        arrayBotones[i].addEventListener("click",buscarLetra)
    }
}

function buscarLetra(e){
    //console.log(e);
    letra=e.target.value;
    //console.log(letra);
    var i=0;
    //console.log(nuevaPalabra);

    if(nuevaPalabra.includes(letra)){
        cambiarLetra(i,letra);
    }
    else{
        vidasRestantes();
          
    }
    e.target.disabled=true;
    comprobarSolucion();   
}
function cambiarLetra(i,letra){
    for(let j=0;j<nuevaPalabra.length;j++){
            i=nuevaPalabra.indexOf(letra,i);
            if(i==-1)break;
            acierto[i]=letra;
            document.getElementById("letra"+i).innerHTML=" "+letra;
            i++;
        }
}
function vidasRestantes(){
    if(document.getElementById("imagen")!=null){
        document.getElementById("imagen").src=imagenes[vidas];
        vidas++;
        if(vidas==8){
            alert("Has perdido");
            location.reload();
        }
    }
    
}

function comprobarSolucion(){
    //console.log(acierto.join(''));
    if(acierto.join('')==nuevaPalabra){
        alert("Felicidades, has ganado");
        location.reload();
    } 
}
