/**
 * Created by juanganzo on 27/02/17.
 */

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;




public class Ejemplo1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //ArrayList palabras = new ArrayList();
        String componenteslexicos[] = {
                "abstract",
                "assert",
                "boolean",
                "break",
                "byte",
                "case",
                "catch",
                "char",
                "class",
                "const",
                "continue",
                "default",
                "do",
                "double",
                "else",
                "enum",
                "extends",
                "final",
                "finally",
                "float",
                "for",
                "goto",
                "if",
                "implements",
                "import",
                "instanceof",
                "int",
                "interface",
                "long",
                "native",
                "new",
                "package",
                "private",
                "protected",
                "public",
                "return",
                "short",
                "static",
                "strictfp",
                "super",
                "switch",
                "synchronized",
                "this",
                "throw",
                "throws",
                "transient",
                "try",
                "void",
                "volatile",
                "while",
                "true",
                "false",
                "string"
        };

        //System.out.println(componenteslexicos.length);

        String email;
        System.out.print("Introduce una palabra \n" );
        email = sc.nextLine();
        //String emaillow = email.toLowerCase();
        Pattern pat = Pattern.compile("([-+,/+*();\\[\\]{}$#?¡¿!;]" +
                "|abstract|assert|switch|boolean" +
                "|break|byte|case|catch|char|class" +
                "|const|default|do|double|else|enum" +
                "|extends|final|finally|float|for|goto" +
                "|if|implements|import|instanceof|int|interface" +
                "|long|native|new|package|private|protected" +
                "|public|return|short|static|strictfp|super" +
                "|switch|synchronized|this|throw|throws|transient" +
                "|try|void|volatile|while|true|false|string)+");

        Matcher mat = pat.matcher(email);
        if(mat.find()){




                System.out.println("La entrada de los datos es correcta.");
                System.out.println("------------------------------------------------------------");
                //System.out.println(email);



                String replaceword = email.replace("+", "").replace("*", "").replace("/", "").replace("-", "").replace("?", "").replace("¿", "")
                        .replace("!", "").replace("¡", "").replace("{", "").replace("}", "").replace("[", "").replace("]", "").replace(",", "").replace(";", "")
                        .replace("#", "").replace("$", "").replace("(", "").replace(")", "").replace(" ","");
                String simbolos = email.replace(componenteslexicos[0], "").replace(componenteslexicos[1], "").replace(componenteslexicos[2], "").
                        replace(componenteslexicos[3], "").replace(componenteslexicos[4], "").replace(componenteslexicos[5], "").replace(componenteslexicos[6], "")
                        .replace(componenteslexicos[7], "").replace(componenteslexicos[8], "").replace(componenteslexicos[9], "").replace(componenteslexicos[10], "")
                        .replace(componenteslexicos[11], "").replace(componenteslexicos[12], "").replace(componenteslexicos[13], "").replace(componenteslexicos[14], "")
                        .replace(componenteslexicos[15], "").replace(componenteslexicos[16], "").replace(componenteslexicos[17], "").replace(componenteslexicos[18], "")
                        .replace(componenteslexicos[19], "").replace(componenteslexicos[20], "").replace(componenteslexicos[21], "").replace(componenteslexicos[22], "")
                        .replace(componenteslexicos[23], "").replace(componenteslexicos[24], "").replace(componenteslexicos[25], "").replace(componenteslexicos[26], "")
                        .replace(componenteslexicos[27], "").replace(componenteslexicos[28], "").replace(componenteslexicos[29], "").replace(componenteslexicos[30], "")
                        .replace(componenteslexicos[31], "").replace(componenteslexicos[32], "").replace(componenteslexicos[33], "").replace(componenteslexicos[34], "")
                        .replace(componenteslexicos[35], "").replace(componenteslexicos[36], "").replace(componenteslexicos[37], "").replace(componenteslexicos[38], "")
                        .replace(componenteslexicos[39], "").replace(componenteslexicos[40], "").replace(componenteslexicos[41], "").replace(componenteslexicos[42], "")
                        .replace(componenteslexicos[43], "").replace(componenteslexicos[44], "").replace(componenteslexicos[45], "").replace(componenteslexicos[46], "")
                        .replace(componenteslexicos[47], "").replace(componenteslexicos[48], "").replace(componenteslexicos[49], "").replace(componenteslexicos[50], "")
                        .replace(componenteslexicos[51], "").replace(componenteslexicos[52], "");



                //System.out.println(simbolos);


                if (replaceword.equals("abstract") || replaceword.equals("assert") || replaceword.equals("switch") || replaceword.equals("boolean") || replaceword.equals("break")
                        || replaceword.equals("byte") || replaceword.equals("case") || replaceword.equals("catch") || replaceword.equals("char") || replaceword.equals("class")
                        || replaceword.equals("const") || replaceword.equals("default") || replaceword.equals("do") || replaceword.equals("double") || replaceword.equals("else")
                        || replaceword.equals("enum") || replaceword.equals("extends") || replaceword.equals("final") || replaceword.equals("finally") || replaceword.equals("float")
                        || replaceword.equals("for") || replaceword.equals("goto") || replaceword.equals("if") || replaceword.equals("implements") || replaceword.equals("import")
                        || replaceword.equals("instanceof") || replaceword.equals("int") || replaceword.equals("interface") || replaceword.equals("long") || replaceword.equals("native")
                        || replaceword.equals("new") || replaceword.equals("package") || replaceword.equals("private") || replaceword.equals("protected") || replaceword.equals("public")
                        || replaceword.equals("return") || replaceword.equals("short") || replaceword.equals("static") || replaceword.equals("strictfp") || replaceword.equals("super")
                        || replaceword.equals("switch") || replaceword.equals("synchronized") || replaceword.equals("this") || replaceword.equals("throw") || replaceword.equals("throws")
                        || replaceword.equals("transient") || replaceword.equals("try") || replaceword.equals("void") || replaceword.equals("volatile") || replaceword.equals("while")
                        || replaceword.equals("true") || replaceword.equals("false") || replaceword.equals("string")) {

                    System.out.println("Se encontró la palabra reservada " + replaceword + ".");

                    //System.out.println(contador);
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
                        }



                }
            }
        }else{
            System.out.println("Esta palabra no contiene ningún componente léxico");
        }
    }
}
