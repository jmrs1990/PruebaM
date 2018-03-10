
var validarFecha = function(fecha){
 //valida fecha en formato dd/mm/aaaa
 var fechaArr = fecha.split('/');
 var dia = fechaArr[0];
 var mes = fechaArr[1];
 var anio = fechaArr[2];
 
 if (isNaN(dia)||isNaN(mes)||isNaN(anio)) 
 {
 	return false;
 }
 else
 {
 	if ((31>=dia && dia>=1)&&(12>=mes && mes>=1)&&(2018>=anio && anio>=1000)) 
 	{
		return true;
 	} else
	{
		return false;
 	}
 }
}