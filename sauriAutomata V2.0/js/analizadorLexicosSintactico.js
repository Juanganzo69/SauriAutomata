//Variables grobales : div1 y div2 son los objetos de los atributos <div></div> y componentesLexicos es la expresion regular que se evalúa.


var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var componentesLexicos =
 /([-]|[\+]|[\/]|[\*]|[a-z]|[A-Z]|[\[]|[\]]|[\(]|[\)]|[ ]|[=])/g;


//Tablas de entrada
var operadoresAritmeticos = [
		"-","+","/","*"
	];

var delimitadores = [
		"(",")"
		
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







//Evento cuando se clickea el botón analizar
document.getElementById('enviar').addEventListener("click",function(){
    var datos = document.getElementById('datos').value;
		if(datos !== "" && componentesLexicos.test(datos) === true){
			//si existe algún valor de entrada realiza las operaciones
			var resultados = mostrarResultado(datos,componentesLexicos);
			var analisisNumeros = analizador(datos,componentesLexicos);
			console.log(analisisNumeros);
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
            case (datos[i] == delimitadores[3]) :
                 
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
            default:
                data.push("\n"+"ß "+ "es un blanco");
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
                
                data.push(7);
			break;				
            case (datos[i] == delimitadores[0]) :
                
                data.push(5);
            break;
            case (datos[i] == delimitadores[1]) :
                
                data.push(6);
            case (datos[i] == identificadoresMinusculas[0]) :
  
                data.push(4);
            break;
            case (datos[i] == identificadoresMinusculas[1]) :
             
                data.push(4);
            break;
            case (datos[i] == identificadoresMinusculas[2]) :
              
                data.push(4);
            break;
            case (datos[i] == identificadoresMinusculas[3]) :
               
                data.push(4);
            break;
            case (datos[i] == identificadoresMinusculas[4]) :
              
                data.push(4);
            break;
            case (datos[i] == identificadoresMinusculas[5]) :
         
                data.push(4);
            break;
            case (datos[i] == identificadoresMinusculas[6]) :
               
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[7]) :
             
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[8]) :
                 
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[9]) :
             
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[10]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[11]) :
               
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[12]) :
                
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[13]) :
          
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[14]) :
         
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[15]) :
              
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[16]) :
         
                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[17]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[18]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[19]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[20]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[21]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[22]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[23]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[24]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMinusculas[25]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[0]) :

                data.push(4);
            break;
			case (datos[i] == identificadoresMayusculas[1]) :

                data.push(4);
            break;	
            case (datos[i] == identificadoresMayusculas[2]) :

                data.push(4);
            break;
            case (datos[i] == identificadoresMayusculas[3]) :

                data.push(4);
            break;
            case (datos[i] == identificadoresMayusculas[4]) :

                data.push(4);
            break;
            case (datos[i] == identificadoresMayusculas[5]) :

                data.push(4);
            break;
            case (datos[i] == identificadoresMayusculas[6]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[7]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[8]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[9]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[10]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[11]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[12]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[13]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[14]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[15]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[16]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[17]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[18]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[19]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[20]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[21]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[22]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[23]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[24]) :

                data.push(4);
            break;     
            case (datos[i] == identificadoresMayusculas[25]) :
                data.push(4);
            break;
			case (datos[i] == asignacion[0]) :
                data.push(0);
            break; 	
            default:
                data.push(5);
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
	// for 12    [1,2]
	return dataotros;
};

/*function analizadorSintactico(datosEntrada, tablaSintactica){
	var tablaSintactica=[
	   //0  1  2  3   4     5    6  7   8
 		["","","","","TE'","TE'","","",""],
		["=TE'","","","","","", "Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","-FT'","","","","","Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","Ɛ","+AF'","","","","Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","Ɛ","Ɛ","/MA'","","","Ɛ","","Ɛ"],
		["","","","","KM'","KM'","","",""],
		["Ɛ","Ɛ","Ɛ","Ɛ","","","Ɛ","*KM'","Ɛ"],
		["","","","","id'","(E)","","",""]
		];
		
	var pila = ["$","E"];	   //0  1  2  3   4     5    6  7   8
 		["","","","","TE'","TE'","","",""],
		["=TE'","","","","","", "Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","-FT'","","","","","Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","Ɛ","+AF'","","","","Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","Ɛ","Ɛ","/MA'","","","Ɛ","","Ɛ"],
		["","","","","KM'","KM'","","",""],
		["Ɛ","Ɛ","Ɛ","Ɛ","","","Ɛ","*KM'","Ɛ"],
		["","","","","id'","(E)","","",""]
		];	   //0  1  2  3   4     5    6  7   8
 		["","","","","TE'","TE'","","",""],
		["=TE'","","","","","", "Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","-FT'","","","","","Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","Ɛ","+AF'","","","","Ɛ","","Ɛ"],
		["","","","","FT'","FT'","","",""],
		["Ɛ","Ɛ","Ɛ","/MA'","","","Ɛ","","Ɛ"],
		["","","","","KM'","KM'","","",""],
		["Ɛ","Ɛ","Ɛ","Ɛ","","","Ɛ","*KM'","Ɛ"],
		["","","","","id'","(E)","","",""]
		];
		
	for(var i = 0; i <=pila.length-1;i++){
		switch(pila !== ""){
			case (pila[pila.lenghth-1] === "E") :
                var igual = datosEntrada[i].split("").reverse();
				pila.pop();
				pila.push(igual);
            break;
			case (datosEntrada[i] == 1) :
                var menos = datosEntrada[i].split("").reverse();
				pila.pop();
				pila.push(menos);
            break;
            default:
               
				   }
		
	}
		
}*/

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
           
    
