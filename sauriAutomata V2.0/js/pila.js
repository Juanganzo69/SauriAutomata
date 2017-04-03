/*function Stack() {
    var elements = [];
 
    this.add = add;
    this.pop = pop;
    this.getTopElement = getTopElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;
 
    function add(element) {
        elements.push(element);
    }
 
    function pop() {
        return elements.pop();
    }
 
    function getTopElement() {
        return elements[elements.length - 1];
    }
 
    function hasElements() {
        return elements.length > 0;
    }
 
    function removeAll() {
        elements = [];
    }
 
    function size() {
        return elements.length;
    }
}



var fruitsStack = new Stack();
if (!fruitsStack.hasElements()) {
    fruitsStack.add('Banana');
    fruitsStack.add('Apple');
    fruitsStack.add('Mango');
    console.log(fruitsStack.size()); // Mostrará 3
    var mango = fruitsStack.pop(); //Obtiene mango y lo saca de la pila, ahora solo quedan 2 elementos.
    console.log(mango);
    console.log(fruitsStack.getTopElement()); // Imprimirá Apple, puesto que es el elemento que quedo hasta arriba.
    console.log(fruitsStack.size()); // Mostrará 2
    fruitsStack.removeAll(); // Limpia la pila
    console.log(fruitsStack.hasElements()); // Retornará falso puesto que la pila esta vacía
}*/
/*var cont1 = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;


for(var i = 1; i <=100; i++){
	if(i%3==0){
		console.log("numero multiplo de 3: "+ i);
	}
	if(i%2 ==0){
		cont1 = cont1 + i;
		console.log("Numero par: "+i);
	}
	if(i%5 ==0){
		console.log("Numero multiplo de 5: "+i);
		cont2 = cont2 + i;

	}
	
	
}
console.log("Suma de pares: "+cont1);
console.log("Suma de multiplos de 5: "+cont2);

console.log("------------------------------------------");

for(var i = 1; i <=100; i++){
	if(i%3==0 && i%2 ==0){
		console.log("numero multiplo de 3: "+ i);
		cont3 = cont3+i;
	}
	
}
console.log("Suma de pares e impares: "+cont3);*/





/*arreglofeliz = [];


console.log(matriz);
console.log(matriz.length);
console.log(matriz[1][0]);

arreglofeliz.push(matriz[1][0],matriz[0][0]);
console.log(arreglofeliz);
arreglofeliz.pop();
console.log(arreglofeliz);*/

/*
for (var x=0; x < matriz.length; x++) {
  for (var y=0; y < matriz[x].length; y++) {
	      console.log(matriz[x][y]);
    		
									   
  }
}
*/


//for(var i = 0; i<=matriz)

/*console.log(matriz[0][0] + " matriz[0][0]");
console.log(matriz[1][0] + " matriz[1][0]");
console.log(matriz[0][1]+ " matriz[0][1]");
console.log(matriz);*/


/*
var pila = ["$","E"];
var e = ["peto"];
var earreglo = e[0].split("").reverse();
console.log(earreglo);
for(var i = 0; i <= earreglo.length-1;i++){
	pila.push(earreglo[i]);
}
pila.pop();
console.log(pila);
*/

/*
  VN/VT| =  |-   |+   |/   |id   |(   |)   |*   |$
  E    |    |    |    |    |TE'  |TE' |    |    |
  E'   |=TE'|    |    |    |     |    |Ɛ   |    |Ɛ
  T    |    |    |    |    |FT'  |FT' |    |    |
  T'   |Ɛ   |-FT'|    |    |     |    |Ɛ   |    |Ɛ
  F    |    |    |    |    |AF'  |AF' |    |    |
  F'   |Ɛ   |Ɛ   |+AF'|    |     |    |Ɛ   |    |Ɛ
  A    |    |    |    |    |MA'  |MA' |    |    |
  A'   |Ɛ   |Ɛ   |Ɛ   |/MA'|     |    |Ɛ   |    |Ɛ
  M    |    |    |    |    |KM'  |KM' |    |    |
  M'   |Ɛ   |Ɛ   |Ɛ   |Ɛ   |     |    |    |*KM'|Ɛ
  K    |    |    |    |    |id   |(E) |    |    |

*/
var tablaSintactica=[
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
	   //0  1  2  3   4     5    6  7   8
 		
//caracteres con prima.
//=TE'
		
var igual = tablaSintactica[1][0].substr(tablaSintactica[1][0].indexOf("="),2);
//=T
var arregloigual = igual.split("");
console.log(arregloigual);

var prima = [tablaSintactica[1][0].substr(tablaSintactica[1][0].indexOf("E"), 2)];
arregloigual.push(prima[0]);
console.log(arregloigual);
















