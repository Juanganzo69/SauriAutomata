/**
 * Created by juanganzo on 1/03/17.
 */

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class Analizadorlexico {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //ArrayList palabras = new ArrayList();
        String componenteslexicos[] = {
                "boolean", "long", "byte", "char", "double", "float", "int", "short", "string", "do", "for", "while", //palabras reservadas
                "-","%", "+", "/", "*", ",", //operadores aritmeticos
                ";", "[", "]", "(", ")", "{", "}", "$", "#", "?", "¡", "!", "¿", //delimitadores
                "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", //identidicadores
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"  //identidicadores
        };

        String entrada;
        System.out.print("Introduce una palabra \n" );
        entrada = sc.nextLine();
        Pattern pat = Pattern.compile("((([-|%|\\+|,|\\/|\\*|\\(|\\)|;|\\[|\\]|\\{|\\}|\\$|#|\\?|¡|¿|!|;]))|(([a-z]|[A-Z]))|((boolean|byte|char|double|do|float|for|int|long|short|try|while|true|false|string)))+");
        Matcher mat = pat.matcher(entrada);
        if(mat.find()){

            //System.out.println(mat.group(1) + " operador");
            //System.out.println(mat.group(2) + " identificador");
            //System.out.println(mat.group(3) + " palabra reservada");





            System.out.println("La entrada de los datos es correcta.");
            System.out.println("------------------------------------------------------------");
            /*System.out.println(componenteslexicos.length);
            for(int z = 0; z < componenteslexicos.length; z++){
                System.out.println(componenteslexicos[z] + " "+ z
                );
            }*/

            String wordreserv = entrada.replace(componenteslexicos[12], "").replace(componenteslexicos[13], "").replace(componenteslexicos[14], "").replace(componenteslexicos[15], "")
                    .replace(componenteslexicos[16], "").replace(componenteslexicos[17], "").replace(componenteslexicos[18], "").replace(componenteslexicos[19], "")
                    .replace(componenteslexicos[20], "").replace(componenteslexicos[21], "").replace(componenteslexicos[22], "").replace(componenteslexicos[23], "")
                    .replace(componenteslexicos[24], "").replace(componenteslexicos[25], "").replace(componenteslexicos[26], "").replace(componenteslexicos[27], "")
                    .replace(componenteslexicos[28], "").replace(componenteslexicos[29], "").replace(componenteslexicos[30], "").replace("1", "")
                    .replace("2", "").replace("3", "").replace("4", "").replace("5", "")
                    .replace("6", "").replace("7", "").replace("8", "").replace("9", "").replace("0", "").replace("%", "");
                    /*.replace(componenteslexicos[31], "").replace(componenteslexicos[32], "").replace(componenteslexicos[33], "")
                    .replace(componenteslexicos[34], "").replace(componenteslexicos[35], "").replace(componenteslexicos[36], "").replace(componenteslexicos[37], "")
                    .replace(componenteslexicos[38], "").replace(componenteslexicos[39], "").replace(componenteslexicos[40], "").replace(componenteslexicos[41], "")
                    .replace(componenteslexicos[42], "").replace(componenteslexicos[43], "").replace(componenteslexicos[44], "").replace(componenteslexicos[45], "")
                    .replace(componenteslexicos[46], "").replace(componenteslexicos[47], "").replace(componenteslexicos[48], "").replace(componenteslexicos[49], "")
                    .replace(componenteslexicos[50], "").replace(componenteslexicos[51], "").replace(componenteslexicos[52], "").replace(componenteslexicos[53], "")
                    .replace(componenteslexicos[54], "").replace(componenteslexicos[55], "").replace(componenteslexicos[56], "").replace(componenteslexicos[57], "")
                    .replace(componenteslexicos[58], "").replace(componenteslexicos[59], "").replace(componenteslexicos[60], "").replace(componenteslexicos[61], "")
                    .replace(componenteslexicos[62], "").replace(componenteslexicos[63], "").replace(componenteslexicos[64], "").replace(componenteslexicos[65], "")
                    .replace(componenteslexicos[66], "").replace(componenteslexicos[67], "").replace(componenteslexicos[68], "").replace(componenteslexicos[69], "")
                    .replace(componenteslexicos[70], "").replace(componenteslexicos[71], "").replace(componenteslexicos[72], "").replace(componenteslexicos[73], "")
                    .replace(componenteslexicos[74], "").replace(componenteslexicos[74], "").replace(componenteslexicos[75], "").replace(componenteslexicos[76], "")
                    .replace(componenteslexicos[78], "").replace(componenteslexicos[79], "").replace(componenteslexicos[80], "").replace(componenteslexicos[81], "")
                    .replace(componenteslexicos[82], "")*/



            String simbolos = entrada.replace(componenteslexicos[0], "").replace(componenteslexicos[1], "").replace(componenteslexicos[2], "").
                    replace(componenteslexicos[3], "").replace(componenteslexicos[4], "").replace(componenteslexicos[5], "").replace(componenteslexicos[6], "")
                    .replace(componenteslexicos[7], "").replace(componenteslexicos[8], "").replace(componenteslexicos[9], "").replace(componenteslexicos[10], "")
                    .replace(componenteslexicos[11], "");
            if(wordreserv.equals(0)){
                System.out.println("");

            }else{
                System.out.println(wordreserv + " Esta(s) es(son) palabra(s) reservada(s)");
            }



            if (       wordreserv.equals("boolean") || wordreserv.equals("byte") || wordreserv.equals("char") || wordreserv.equals("do")
                    || wordreserv.equals("double") || wordreserv.equals("float") || wordreserv.equals("for")
                    || wordreserv.equals("int") || wordreserv.equals("long") || wordreserv.equals("short")
                    || wordreserv.equals("while") || wordreserv.equals("string")) {

                System.out.println("Se encontró la palabra reservada " + wordreserv + ".");

            }

            if (true) {
                String emailsplit[] = simbolos.split("");


                for (int i = 0; i < emailsplit.length; i++) {
                    if (emailsplit[i].equals("+")) {
                        System.out.println("Se leyó el símbolo + y es un operador aritmético");
                    } else if (emailsplit[i].equals("-")) {
                        System.out.println("Se leyó el símbolo - y es un operador aritmético");
                    } else if (emailsplit[i].equals("*")) {
                        System.out.println("Se leyó el símbolo * y es un operador aritmético");
                    } else if (emailsplit[i].equals("/")) {
                        System.out.println("Se leyó el símbolo / y es un operador aritmético");
                    } else if (emailsplit[i].equals(";")) {
                        System.out.println("Se leyó el símbolo ; y es un delimitador");
                    } else if (emailsplit[i].equals(",")) {
                        System.out.println("Se leyó el símbolo , y es un delimitador");
                    } else if (emailsplit[i].equals("?")) {
                        System.out.println("Se leyó el símbolo ¿ y es un delimitador");
                    } else if (emailsplit[i].equals("¿")) {
                        System.out.println("Se leyó el símbolo ? y es un delimitador");
                    } else if (emailsplit[i].equals("!")) {
                        System.out.println("Se leyó el símbolo ! y es un delimitador");
                    } else if (emailsplit[i].equals("¡")) {
                        System.out.println("Se leyó el símbolo ¡ y es un delimitador");
                    } else if (emailsplit[i].equals("{")) {
                        System.out.println("Se leyó el símbolo { y es un delimitador");
                    } else if (emailsplit[i].equals("}")) {
                        System.out.println("Se leyó el símbolo } y es un delimitador");
                    } else if (emailsplit[i].equals("[")) {
                        System.out.println("Se leyó el símbolo [ y es un delimitador");
                    } else if (emailsplit[i].equals("]")) {
                        System.out.println("Se leyó el símbolo ] y es un delimitador");
                    } else if (emailsplit[i].equals("$")) {
                        System.out.println("Se leyó el símbolo $ y es un delimitador");
                    } else if (emailsplit[i].equals("#")) {
                        System.out.println("Se leyó el símbolo # y es un delimitador");
                    } else if (emailsplit[i].equals("(")) {
                        System.out.println("Se leyó el símbolo ( y es un delimitador");
                    } else if (emailsplit[i].equals(")")) {
                        System.out.println("Se leyó el símbolo ) y es un delimitador");
                    }else if  (emailsplit[i].equals("a")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("b")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("c")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("d")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("e")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("f")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("g")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("h")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("i")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("j")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("k")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("l")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("m")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("n")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("o")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("p")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("q")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("r")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("s")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("t")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("u")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("v")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("w")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("x")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("y")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("z")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("A")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("B")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("C")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("D")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("E")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("F")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("G")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("H")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("I")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("J")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("K")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("L")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("M")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("N")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("O")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("P")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("Q")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("R")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("S")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("T")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("U")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("V")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("W")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("X")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("Y")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals("Z")){
                        System.out.println("Se leyó el símbolo "+emailsplit[i]+" y es un identificador");
                    }else if  (emailsplit[i].equals(" ")){
                        System.out.println("Se leyó un blanco");
                    }else if  (emailsplit[i].equals("1")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("2")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("3")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("4")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("5")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("6")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("7")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("8")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("9")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("0")){
                        System.out.println("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]);
                    }else if  (emailsplit[i].equals("%")){
                        System.out.println("Se leyó el símbolo % y es un operador aritmético");
                    }


                }
            }
        }else{
            System.out.println("Esta palabra no contiene ningún componente léxico");
        }
    }
}
