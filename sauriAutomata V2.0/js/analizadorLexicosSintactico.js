//Variables grobales : div1 y div2 son los objetos de los atributos <div></div> y componentesLexicos es la expresion regular que se evalúa.
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var componentesLexicos =
 /([-]|[\+]|[\/]|[\*]|[a-z]|[A-Z]|[\[]|[\]]|[\(]|[\)]|[\;]|[ ]|[=])/g;



var operadoresAritmeticos = [
		"-","+","/","*"
];

var delimitadores = [
		"(",")",";"
		
];
var asignacion = [
		"="
];

var identificadoresMinusculas = [
		"a","b","c","d","e","f","g","h","i","j","k","l",
		"m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
	
var identificadoresMayusculas = [
		"A","B","C","D","E","F","G","H","I","J","K","L",
		"M","N","O","P","Q","R","S","T","U","V","W","X",
		"Y","Z"
];

/*
		  VN/VT| =  |-   |+   |/   |*   |id   |(   |)   |$
		  E    |    |    |    |    |    |TE'  |TE' |    |
		  E'   |=TE'|    |    |    |    |     |    |Ɛ   |Ɛ
		  T    |    |    |    |    |    |FT'  |FT' |    |
		  T'   |Ɛ   |-FT'|    |    |    |     |    |Ɛ   |Ɛ
		  F    |    |    |    |    |    |AF'  |AF' |    |
		  F'   |Ɛ   |Ɛ   |+AF'|    |    |     |    |Ɛ   |Ɛ
		  A    |    |    |    |    |    |MA'  |MA' |    |
		  A'   |Ɛ   |Ɛ   |Ɛ   |/MA'|    |     |    |Ɛ   |Ɛ
		  M    |    |    |    |    |    |KM'  |KM' |    |
		  M'   |Ɛ   |Ɛ   |Ɛ   |Ɛ   |*KM'|     |    |    |Ɛ
		  K    |    |    |    |    |    |id   |(E) |    |

*/
var tablaSintactica=[
	["",    "",    "",    "",    "",    "TE'", "TE'", "",   "" ],
	["=TE'","",    "",    "",    "",    "",    "",    "Ɛ",  "Ɛ"],
	["",    "",    "",    "",    "",    "FT'", "FT'", "",   "" ],
	["Ɛ",   "-FT'","",    "",    "",    "",    "",    "Ɛ",  "Ɛ"],
	["",    "",    "",    "",    "",    "AF'", "AF'", "",   "" ],
	["Ɛ",   "Ɛ",   "+AF'","",    "",    "",    "",    "Ɛ",  "Ɛ"],
	["",    "",    "",    "",    "",    "MA'", "MA'", "",   "" ],
	["Ɛ",   "Ɛ",   "Ɛ",   "/MA'","",    "",    "",    "Ɛ",  "Ɛ"],
	["",    "",    "",    "",    "",    "KM'", "KM'", "",   "" ],
	["Ɛ",   "Ɛ",   "Ɛ",   "Ɛ",   "*KM'","",    "",    "",   "Ɛ"],
	["",    "",    "",    "",    "",    "id'", "(E)", "",   "" ]
];






//Evento cuando se clickea el botón analizar
document.getElementById('enviar').addEventListener("click",function(){
    var datos = document.getElementById('datos').value;
		if(datos !== "" && componentesLexicos.test(datos) === true){
			//si existe algún valor de entrada realiza las operaciones
			var resultados = mostrarResultado(datos,componentesLexicos);
			var analisisNumeros = analizador(datos,componentesLexicos);
			//var sinEspacios = quitarEspacios(analisisNumeros);
			console.log(analisisNumeros);
			//console.log(sinEspacios);
			//analizadorSintactico(analizador(datos,componentesLexicos),tablaSintactica);
			var otrosDatos = otros(datos,componentesLexicos);
			console.log("\n"+resultados+"\n");
			div1.style.border = "3px";
			div1.style.borderStyle = "dashed";
			div1.style.padding = "10px";
			div1.textContent = resultados;
			div1.style.marginBottom = "30px";
			div1.style.color = "white";
			if(otrosDatos.length !== 0 && componentesLexicos.test(datos) === true){
				//si existe algún valor en la pila de datos, realiza la operación
					console.log("\n"+otrosDatos+"\n");
			   		div2.style.border = "3px";
					div2.style.borderStyle = "dashed";
					div2.style.padding = "10px";
					div2.style.borderColor = "#CDE80A";
					div2.style.color = "#CDE80A";
					div2.textContent = "Estos son un otro: "+ otrosDatos;
					div2.style.marginBottom = "30px";
					div2.style.marginTop = "30px";
			   }
		}else{
			//mensaje de alerta si no existe ningún valor en la entrada
			alert("Introduce datos o cambia tus componentes léxicos por favor");
			
		}
});

//evento cuando se clickea limpiar que permite limpiar todos los datos generados en la vista
document.getElementById('limpiar').addEventListener("click",function(){
	if(datos !== ""){
			limpiar();
		}else{
			alert("Introduce datos, por favor");
		}
	
});


//método que analiza las coincidencias de la expresión regular y los guarda en una pila, además devuelve el tipo y el valor de dichos datos guardados
function mostrarResultado(texto, componentesLexicos){
	// Patter pat = texto.compile(componentesLexicos);
    var datos = texto.match(componentesLexicos);
    var data = [];
	if(componentesLexicos.test(texto) === true){
    for (var i = 0; i <= datos.length-1; i++) {
        switch(true){
            case (datos[i] == operadoresAritmeticos[0]) :
                 
                 data.push("\n"+datos[i] + " es un operador aritmético");
            break;
            case (datos[i] == operadoresAritmeticos[1]) :
                 
                data.push("\n"+datos[i] + " es un operador aritmético");
            break;
            case (datos[i] == operadoresAritmeticos[2]) :
                
                data.push("\n"+datos[i] + " es un operador aritmético");
            break;
            case (datos[i] == operadoresAritmeticos[3]) :
                 
                data.push("\n"+datos[i] + " es un operador aritmético");
            break;        
            case (datos[i] == operadoresAritmeticos[4]) :
                 
                data.push("\n"+datos[i] + " es un operador aritmético");
            break;
            case (datos[i] == delimitadores[0]) :
                
                data.push("\n"+datos[i] + " es un delimitador");
            break;
            case (datos[i] == delimitadores[1]) :
                
                data.push("\n"+datos[i] + " es un delimitador");
            break;
            case (datos[i] == delimitadores[2]) :
                 
                data.push("\n"+datos[i] + " es un delimitador");
            break;    
            case (datos[i] == identificadoresMinusculas[0]) :
  
                data.push("\n"+datos[i] + " es un identificador");
            break;
            case (datos[i] == identificadoresMinusculas[1]) :
             
                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMinusculas[2]) :
              
                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMinusculas[3]) :
               
                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMinusculas[4]) :
              
                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMinusculas[5]) :
         
                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMinusculas[6]) :
               
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[7]) :
             
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[8]) :
                 
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[9]) :
             
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[10]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[11]) :
               
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[12]) :
                
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[13]) :
          
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[14]) :
         
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[15]) :
              
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[16]) :
         
                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[17]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[18]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[19]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[20]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[21]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[22]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[23]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[24]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMinusculas[25]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[0]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;
			case (datos[i] == identificadoresMayusculas[1]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;	
            case (datos[i] == identificadoresMayusculas[2]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMayusculas[3]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMayusculas[4]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMayusculas[5]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;
            case (datos[i] == identificadoresMayusculas[6]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[7]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[8]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[9]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[10]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[11]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[12]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[13]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[14]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[15]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[16]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[17]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[18]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[19]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[20]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[21]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[22]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[23]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[24]) :

                data.push("\n"+datos[i] + " es un identicador");
            break;     
            case (datos[i] == identificadoresMayusculas[25]) :
                data.push("\n"+datos[i] + " es un identicador");
            break;
			case (datos[i] == asignacion[0]) :
                data.push("\n"+datos[i] + " es un operador de asignación");
            break;
			case (datos[i] == " ") :
                data.push("\n"+"ß "+ "es un blanco");
            break;	
            default:
                console.log("");
                   }
    	}
		return data;
	}
    //var myString = JSON.stringify(data, null, 2);
    //return myString;
    
};

//método que analiza las coincidencias de la expresión regular y los guarda en una pila
function analizador(texto, componentesLexicos){
	var datos = texto.match(componentesLexicos);
    var data = [];
	if(componentesLexicos.test(texto) === true){
    for (var i = 0; i <= datos.length-1; i++) {
        switch(true){
            case (datos[i] == operadoresAritmeticos[0]) :
                 data.push(1);
            break;
            case (datos[i] == operadoresAritmeticos[1]) :
                 
                data.push(2);
            break;
            case (datos[i] == operadoresAritmeticos[2]) :
                
                data.push(3);
			break;
            case (datos[i] == operadoresAritmeticos[3]) :
                
                data.push(4);
			break;				
            case (datos[i] == delimitadores[0]) :
                
                data.push(5);
            break;
            case (datos[i] == delimitadores[1]) :
                
                data.push(6);
			break;		
            case (datos[i] == delimitadores[2]) :
                
                data.push(7);
			break;		
            case (datos[i] == identificadoresMinusculas[0]) :
  
                data.push(8);
            break;
            case (datos[i] == identificadoresMinusculas[1]) :
             
                data.push(8);
            break;
            case (datos[i] == identificadoresMinusculas[2]) :
              
                data.push(8);
            break;
            case (datos[i] == identificadoresMinusculas[3]) :
               
                data.push(8);
            break;
            case (datos[i] == identificadoresMinusculas[4]) :
              
                data.push(8);
            break;
            case (datos[i] == identificadoresMinusculas[5]) :
         
                data.push(8);
            break;
            case (datos[i] == identificadoresMinusculas[6]) :
               
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[7]) :
             
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[8]) :
                 
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[9]) :
             
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[10]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[11]) :
               
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[12]) :
                
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[13]) :
          
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[14]) :
         
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[15]) :
              
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[16]) :
         
                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[17]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[18]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[19]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[20]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[21]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[22]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[23]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[24]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMinusculas[25]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[0]) :

                data.push(8);
            break;
			case (datos[i] == identificadoresMayusculas[1]) :

                data.push(8);
            break;	
            case (datos[i] == identificadoresMayusculas[2]) :

                data.push(8);
            break;
            case (datos[i] == identificadoresMayusculas[3]) :

                data.push(8);
            break;
            case (datos[i] == identificadoresMayusculas[4]) :

                data.push(8);
            break;
            case (datos[i] == identificadoresMayusculas[5]) :

                data.push(8);
            break;
            case (datos[i] == identificadoresMayusculas[6]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[7]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[8]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[9]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[10]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[11]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[12]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[13]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[14]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[15]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[16]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[17]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[18]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[19]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[20]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[21]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[22]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[23]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[24]) :

                data.push(8);
            break;     
            case (datos[i] == identificadoresMayusculas[25]) :
                data.push(8);
            break;
			case (datos[i] == asignacion[0]) :
                data.push(9);
            break;
			case (datos[i] == " ") :
                data.push(100);
            break; 		
            default:
                console.log("");
                   }
    	}
		return data;
	}
    //var myString = JSON.stringify(datos, null, 2);
    //return myString;
    return datos;
};

//método que guarda en un arreglo todos los otros que puedan existir en la pila
function otros(texto, componentesLexicos){
	var otros = texto.replace(componentesLexicos,"");
	var dataotros = otros.split("");
	return dataotros;
};

function quitarEspacios(arregloDatosSalida){
	var contBlanco = 0;
	for(var i = 0; i <= arregloDatosSalida.length - 1; i++){
		if(arregloDatosSalida[i] == 100){
			contBlanco = contBlanco + 1;
			var x = arregloDatosSalida.indexOf(100);
			arregloDatosSalida.splice(x,contBlanco);
		}	
	}
	return arregloDatosSalida;

}


function analizadorSintactico(misDatitos, miTablita){
	pila = ["$","E"];
	var resultado = [];
	while(pila.length !== 0){
		if(misDatitos[0] == 8){
			pila.pop();
			//TE'
			var T	  = [miTablita[0][5].substr(miTablita[0][5].indexOf("T"), 1)];
			var Eprima = [miTablita[0][5].substr(miTablita[0][5].indexOf("E"), 2)];
			pila.push(prima[0]);
			pila.push(T[0]);
			if(pila[pila.length] == "T"){
				pila.pop();
				//FT'
				var F	  = [miTablita[2][5].substr(miTablita[2][5].indexOf("F"), 1)];
				var Tprima = [miTablita[2][5].substr(miTablita[2][5].indexOf("T"), 2)];
				pila.push(Tprima[0]);
				pila.push(F[0]);	
			}else if(pila[pila.length] == "F"){
				pila.pop();
				//AF'
				var A	  = [miTablita[4][5].substr(miTablita[4][5].indexOf("A"), 1)];
				var Fprima = [miTablita[4][5].substr(miTablita[4][5].indexOf("F"), 2)];
				pila.push(Fprima[0]);
				pila.push(A[0]);	
			}else if(pila[pila.length] == "A"){
				pila.pop();
				//MA'
				var M	  = [miTablita[6][5].substr(miTablita[6][5].indexOf("M"), 1)];
				var Aprima = [miTablita[6][5].substr(miTablita[6][5].indexOf("A"), 2)];
				pila.push(Aprima[0]);
				pila.push(M[0]);
			}else if(pila[pila.length] == "M"){
				pila.pop();
				//KM'
				var K	  = [miTablita[8][5].substr(miTablita[8][5].indexOf("M"), 1)];
				var Mprima = [miTablita[8][5].substr(miTablita[8][5].indexOf("A"), 2)];
				pila.push(Mprima[0]);
				pila.push(K[0]);
			}else if(pila[pila.length] == "K"){
				pila.pop();
				//id 
				pila.push(miTablita[10][5]);
			}else if(pila[pila.length] == "id"){
				pila.pop();
				misDatitos.shift();
			}
	}
		if(misDatitos[0] == 5){
			pila.pop();
			//TE'
			var T	  = [miTablita[0][5].substr(miTablita[0][5].indexOf("T"), 1)];
			var Eprima = [miTablita[0][5].substr(miTablita[0][5].indexOf("E"), 2)];
			pila.push(prima[0]);
			pila.push(T[0]);
			if(pila[pila.length] == "T"){
				pila.pop();
				//FT'
				var F	  = [miTablita[2][5].substr(miTablita[2][5].indexOf("F"), 1)];
				var Tprima = [miTablita[2][5].substr(miTablita[2][5].indexOf("T"), 2)];
				pila.push(Tprima[0]);
				pila.push(F[0]);	
			}else if(pila[pila.length] == "F"){
				pila.pop();
				//AF'
				var A	  = [miTablita[4][5].substr(miTablita[4][5].indexOf("A"), 1)];
				var Fprima = [miTablita[4][5].substr(miTablita[4][5].indexOf("F"), 2)];
				pila.push(Fprima[0]);
				pila.push(A[0]);	
			}else if(pila[pila.length] == "A"){
				pila.pop();
				//MA'
				var M	  = [miTablita[6][5].substr(miTablita[6][5].indexOf("M"), 1)];
				var Aprima = [miTablita[6][5].substr(miTablita[6][5].indexOf("A"), 2)];
				pila.push(Aprima[0]);
				pila.push(M[0]);
			}else if(pila[pila.length] == "M"){
				pila.pop();
				//KM'
				var K	  = [miTablita[8][5].substr(miTablita[8][5].indexOf("M"), 1)];
				var Mprima = [miTablita[8][5].substr(miTablita[8][5].indexOf("A"), 2)];
				pila.push(Mprima[0]);
				pila.push(K[0]);
			}else if(pila[pila.length] == "K"){
				pila.pop();
				//(E)
				var charParentesis = miTablita[10][6].split(""); 
				//["(","E",")"];
				pila.push(charParentesis[0]);
				pila.push(charParentesis[1]);
				pila.push(charParentesis[2]);
			}else if(pila[pila.length] == "("){
				pila.pop();
				misDatitos.shift();
			}
		}
		if(misDatitos[0] == 1){
			if(pila[pila.length] == "T'"){
				pila.pop();
				var resta	  = [miTablita[3][1].substr(miTablita[3][1].indexOf("-"), 2)];
				var arregloresta = multi.split("");
				var Tprimita = [miTablita[3][1].substr(miTablita[3][1].indexOf("T"), 2)];
				pila.push(Tprimita[0]);
				pila.push(arreglomulti[1]);
				pila.push(arreglomulti[0]);
				misDatitos.shift();
			}else{
				pila.pop();
			}	
		}
		if(misDatitos[0] == 2){
			if(pila[pila.length] == "F'"){
				//+AF'
				pila.pop();
				var suma	  = [miTablita[5][2].substr(miTablita[5][2].indexOf("+"), 2)];
				var arreglosuma = suma.split("");
				var Fprimita = [miTablita[5][2].substr(miTablita[5][2].indexOf("F"), 2)];
				pila.push(Fprimita[0]);
				pila.push(arreglosuma[1]);
				pila.push(arreglosuma[0]);
				misDatitos.shift();
			}else{
				pila.pop();
			}	
		}
		if(misDatitos[0] == 3){
			if(pila[pila.length] == "A'"){
				// /MA'
				pila.pop();
				var division	  = [miTablita[7][3].substr(miTablita[7][3].indexOf("/"), 2)];
				var arreglodivision = division.split("");
				var Aprimita = [miTablita[7][3].substr(miTablita[7][3].indexOf("A"), 2)];
				pila.push(Aprimita[0]);
				pila.push(arreglodivision[1]);
				pila.push(arreglodivision[0]);
				misDatitos.shift();
			}else{
				pila.pop();
			}	
		}
		if(misDatitos[0] == 4){
			if(pila[pila.length] == "M'"){
				// *KM'
				pila.pop();
				var milti	     = [miTablita[9][4].substr(miTablita[9][4].indexOf("*"), 2)];
				var arreglomulti = milti.split("");
				var Mprimita = [miTablita[9][4].substr(miTablita[9][4].indexOf("M"), 2)];
				pila.push(Mprimita[0]);
				pila.push(arreglomulti[1]);
				pila.push(arreglomulti[0]);
				misDatitos.shift();
			}else{
				pila.pop();
			}	
		}
		if(misDatitos[0] == 9){
			if(pila[pila.length] == "E'"){
				// =TE'
				pila.pop();
				var igual	     = [miTablita[1][0].substr(miTablita[1][0].indexOf("="), 2)];
				var arregloigual = milti.split("");
				var Eprimita = [miTablita[9][4].substr(miTablita[1][0].indexOf("E"), 2)];
				pila.push(Eprimita[0]);
				pila.push(arregloigual[1]);
				pila.push(arregloigual[0]);
				misDatitos.shift();
			}else{
				pila.pop();
			}	
		}
		if(misDatitos[0] == 7){
			if(pila[pila.length] == "$"){
				pila.pop();
				misDatitos.shift();
			}
		}
		if(misDatitos[0] == 6){
			if(pila[pila.length] == "E'"){
				pila.pop();
			}else if(pila[pila.length] == "T'"){
				pila.pop();
			}else if(pila[pila.length] == "F'"){
				pila.pop();
			}else if(pila[pila.length] == "A'"){
				pila.pop();
			}else if(pila[pila.length] == "M'"){
				pila.pop();
			}
		}
		if(misDatitos[0] == 100){
			misDatitos.shift();
		}
	}
	if(pila.length == 0){ 
		resultado.push("La frase introducida es válida :D");
		return resultado;
	}else if(pila.length > 2){
		resultado.push("La frase es inválida :D");
	}
}
		


//método que limpia toda la vista generadas
function limpiar(){
    console.clear();
    document.getElementById('datos').value = "";
	div1.textContent = "";
	div1.style.border = "";	
	div1.style.borderStyle = "";
	div2.textContent = "";
	div2.style.border = "";	
	div2.style.borderStyle = "";
};
           
    
