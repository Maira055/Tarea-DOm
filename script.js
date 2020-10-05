let boton= document.getElementById("boton")

boton.addEventListener("click", function(){
    let tareas= document.getElementById("tareas").value; 
    
    var lista= document.getElementById("lista"); 

    var etiquetaNueva= document.createElement("li"); 

    etiquetaNueva.innerHTML= tareas; 

    lista.appendChild(etiquetaNueva);
})

lista.addEventListener("dblclick", function(e) {
    console.log(e)
    let etiquetaNueva= e.target;
    lista.removeChild(etiquetaNueva)
    
})