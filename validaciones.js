function modificar(){
    var time = new Date();
    document.getElementById("miparrafo").innerText = 
    "Modificado el texto desde el archivo JS externo " + time.toDateString();

}