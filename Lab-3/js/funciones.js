$(document).ready(function(){
	//Eventos para el elemento div con id=unlock
	$('#unlock').mouseenter(function(){
		$(this).css('background-position','-81px 0px');
		$(this).css('height','74px').css('width','74px');
		$(this).css('opacity','0.4');
	}).mouseleave(function(){
		$(this).css('background-position','6px 0px');
		$(this).css('height','68px').css('width','68px');
		$(this).css('opacity','0.8');
	}).click(function(){
		//desaparecemos el elemento con una animación JQUERY
		$('#block_screen').fadeOut(1000);
		$('#main_screen').fadeIn(1000);
	});

	//reutilizamos el nombre del id obtenido mediante el this.id
	//para usarlo en la búsqueda de la ruta de la app
	$('.icons').click(function(){
		$('#main_app').fadeIn(200);
		$('#main_app iframe').attr('src', 'rsc/apps/'+this.id+'/index.htm');
	});

	//Eventos para el elemento div con id=back
	$('#back').click(function(){
		$('#main_app').fadeOut(200);
		$('#main_screen').fadeIn(200);
	});

	//Eventos para mostrar/ocultar div con id=tab
	$('#main_tab').click(function(){
		$(".tab").toggle();
	});

	//Eventos para cambiar de fondo al elemento main_screen
	$(".tab").click(function(){
		$("#tab1").click(function(){	
			$("#main_screen").css("background-image", "url('rsc/pics/moon.jpg')");
		});
		$("#tab2").click(function(){	
			$("#main_screen").css("background-image", "url('rsc/pics/pattern.jpg')");
		});
	});

});




function reloj(){
	var semana = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
	var fecha = new Date;
	var dia = fecha.getDay();
	var horas = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	//setear la etiqueta con las variables que contiene la hora
	$('#labeltime').html(horas + ':' + minutos);

}

	//definir el intervalo con que la función es llamada en milisegundos
	setInterval("reloj()",1000); 





