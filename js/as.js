//alert("La resolución de pantalla que tienes en este momento es de: " + window.innerWidth + " x " + window.innerHeight);

//alert("El nombre de la página es: " + pagina);

/*if (this.n == 'index.html') 
{
    alert("La resolución de pantalla que tienes en este momento es de: " + window.innerWidth + " x " + window.innerHeight);
}*/

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