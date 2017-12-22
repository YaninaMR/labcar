// La funcionalidad de tu proyecto
	$('#buyer').click(function(){
	   var $name = $('#div-save');
	   $name.append("soy un span");
	   alert("se ha creado un nuevo p"); 
	});
	$('#registrar-d').click(function(){
		var $name = $('#div-save');
		$name.append("soy un span"); 
	 });

	$('#registrar-d').click(function(){
		var $name = $('#first-data').val();
		var $namediv = $('#div-save');
		$namediv.append($name); 
	 });

  /*$("#myModalWindowRegister").on("submit", "#enviar-datos" function(){
    
      var $name = $('#nombre').val();
		var $namediv = $('#div-save');
		$namediv.append($name);
        
    });*/

  
 
    $('#enviar-datos').click(function(e){
    	e.preventDefault();
        var $name = $('#nombre').val();	
        var tabla_div = $('#div-save'); 
        $( "body" ).find( tabla_div ).append('<p>' + $name +'</p>');           
        $( "body" ).find( tabla_div ).wrap('<p>' + $name +'</p>');
     });





	
   /*
    $(function() {
        $('#html').html('<strong>Ejemplo con html()</strong>');
        $('#text').text('Ejemplo con text()');
        $('#val').val('Ejemplo con val()');
        $('#append').append('append()');
      });
   */
    











