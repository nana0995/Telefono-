//función validar campo
function valida(){
  if($('#edad').val().length<1){
    alert('El año es obligatorio');
  }  
}


//función para calcular la edad
  $(document).ready(function() {
  		$('#calcular').click(function(){
        valida();
  			var yactual = '2021';
  			var edad = $('#edad').val();
  			var total = parseInt(yactual) - parseInt(edad);
        $('#respuesta').text('Su edad es: ' +total);
  		});
	  
  });
