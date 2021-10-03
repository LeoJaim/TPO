function loadPage()
 {
     fillCombo(); 
     console.log("ENTRO AL LOAD");
 }
 
/* Completo el comobo con los valores del array*/
function fillCombo(){
 var regions = ["CABA", "Buenos Aires", "Santa Fe","San Juan","Corrientes","Chaco","Misiones","Entre Ríos","Salta","Formosa","La Rioja","Tucumán","Jujuy","Catamarca", "Neuquen","Chubut","Río Negro","La Pampa","Tierra del Fuego", "Stgo. del Estero","Córdoba","San Luis","Mendoza","Santa Cruz"];
 var select = document.getElementById("combo");
 for(var i=0;i<regions.length;i++){
   select.options[i] = new Option(regions[i]);
 }
}
/*--------------------------------------------------------------------------------------------------------------------------------------*/
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Elijo los formularios que tienen una clase determinada, para ser valdados
      var forms = document.getElementsByClassName('needs-validation');
      // Valido que los campos tengan datos
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();