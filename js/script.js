//funçao owl carrossel - index
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

//função mostrar/ocultar senha - login
function myFunction(){
  var x = document.getElementById("senha");
  var y = document.getElementById("mostrarsenha");
  var z = document.getElementById("ocultarsenha");

  if(x.type === 'password'){
      x.type = "text";
      y.style.display = "block";
      z.style.display = "none";
  }
  else{
      x.type = "password";
      y.style.display = "none";
      z.style.display = "block";
  }
}

