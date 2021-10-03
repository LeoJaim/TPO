//alert("La resolución de pantalla que tienes en este momento es de: " + window.innerWidth + " x " + window.innerHeight);

//alert("El nombre de la página es: " + pagina);

/*if (this.n == 'index.html') 
{
    alert("La resolución de pantalla que tienes en este momento es de: " + window.innerWidth + " x " + window.innerHeight);
}*/
function loadPage()
 {
     fillCombo(); 
     console.log("ENTRO AL LOAD");
 }
 /**
* This method fills the dropdownlist with regions information
*/
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
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
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