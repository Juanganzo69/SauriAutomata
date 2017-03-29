import java.awt.BorderLayout;
import java.awt.EventQueue;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.awt.event.ActionEvent;
import java.awt.Font;
import javax.swing.SwingConstants;
import java.awt.Color;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JScrollBar;

public class analizadorLexicoLA extends JFrame {

	private JPanel contentPane;
	private JTextField txtBuscar;
	private JTextArea txtResultado;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					analizadorLexicoLA frame = new analizadorLexicoLA();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public analizadorLexicoLA() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 549, 485);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JPanel panel = new JPanel();
		panel.setBackground(new Color(216, 191, 216));
		contentPane.add(panel, BorderLayout.CENTER);
		panel.setLayout(null);
		
		JButton btnBuscar = new JButton("Buscar");
		btnBuscar.setBackground(new Color(152, 251, 152));
		btnBuscar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Analizar();
			}
		});
		btnBuscar.setBounds(337, 382, 102, 23);
		panel.add(btnBuscar);
		
		JButton btnBorrar = new JButton("Borrar");
		btnBorrar.setBackground(new Color(152, 251, 152));
		btnBorrar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				txtBuscar.setText("");
				txtResultado.setText("");
			}
		});
		btnBorrar.setBounds(70, 382, 102, 23);
		panel.add(btnBorrar);
		
		JPanel panel_1 = new JPanel();
		panel_1.setBackground(new Color(250, 235, 215));
		panel_1.setBounds(0, 11, 523, 38);
		panel.add(panel_1);
		panel_1.setLayout(null);
		
		JLabel lblAnalizadorLxico = new JLabel("Analizador l\u00E9xico");
		lblAnalizadorLxico.setBounds(191, 11, 144, 22);
		panel_1.add(lblAnalizadorLxico);
		lblAnalizadorLxico.setFont(new Font("Century Gothic", Font.BOLD, 17));
		
		JPanel panel_2 = new JPanel();
		panel_2.setBackground(new Color(70, 130, 180));
		panel_2.setBounds(10, 69, 503, 95);
		panel.add(panel_2);
		panel_2.setLayout(null);
		
		JLabel lblIntroduceLaPalabrra = new JLabel("Introduce los componentes a analizar: ");
		lblIntroduceLaPalabrra.setBounds(126, 11, 263, 19);
		panel_2.add(lblIntroduceLaPalabrra);
		lblIntroduceLaPalabrra.setFont(new Font("Century Gothic", Font.BOLD, 14));
		
		txtBuscar = new JTextField();
		txtBuscar.setBounds(33, 41, 433, 30);
		panel_2.add(txtBuscar);
		txtBuscar.setColumns(10);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(10, 189, 503, 169);
		panel.add(scrollPane);
		
		txtResultado = new JTextArea();
		scrollPane.setColumnHeaderView(txtResultado);
	}
   public void Analizar(){
	   Scanner sc = new Scanner(System.in);
       String componenteslexicos[] = {
               "boolean",
               "long",
               "byte",
               "char",
               "double",
               "float",
               "int",
               "short",
               "string",
               "do",
               "for",
               "while",
               "-", //13
               "%",
               "+",
               "/",
               "*",
               ",",
               ";",
               "[",
               "]",
               "(",
               ")",
               "{",
               "}",
               "$",
               "#",
               "?",
               "¿",
               "!",
               "¡",
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
               "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
       };

       String entrada;
       entrada = txtBuscar.getText();
       Pattern pat = Pattern.compile("(([-|%|+|,|/|+|*|(|)|;|\\[|\\]|{|}|$|#|?|¡|¿|!|;]))*|(([a-z]|[A-Z]))*|((boolean|byte|char|double|do|float|for|int|long|short|try|while|true|false|string))*");
       Matcher mat = pat.matcher(entrada);
       if(mat.find()){

          txtResultado.append("La entrada de los datos es correcta. \n");

           String wordreserv = entrada.replace(componenteslexicos[12], "").replace(componenteslexicos[13], "").replace(componenteslexicos[14], "").replace(componenteslexicos[15], "")
                   .replace(componenteslexicos[16], "").replace(componenteslexicos[17], "").replace(componenteslexicos[18], "").replace(componenteslexicos[19], "")
                   .replace(componenteslexicos[20], "").replace(componenteslexicos[21], "").replace(componenteslexicos[22], "").replace(componenteslexicos[23], "")
                   .replace(componenteslexicos[24], "").replace(componenteslexicos[25], "").replace(componenteslexicos[26], "").replace(componenteslexicos[27], "")
                   .replace(componenteslexicos[28], "").replace(componenteslexicos[29], "").replace(componenteslexicos[30], "").replace("1", "")
                   .replace("2", "").replace("3", "").replace("4", "").replace("5", "")
                   .replace("6", "").replace("7", "").replace("8", "").replace("9", "").replace("0", "").replace(componenteslexicos[40], "").replace(componenteslexicos[41], "")
                   .replace(componenteslexicos[43], "").replace(componenteslexicos[46], "").replace(componenteslexicos[47], "").replace(componenteslexicos[52], "").replace(componenteslexicos[54], "")
                   .replace(componenteslexicos[56], "").replace(componenteslexicos[57], "").replace(componenteslexicos[58], "").replace(componenteslexicos[59], "")
                   .replace(componenteslexicos[60], "").replace(componenteslexicos[61], "")
                   .replace(componenteslexicos[62], "").replace(componenteslexicos[63], "").replace(componenteslexicos[64], "").replace(componenteslexicos[65], "")
                   .replace(componenteslexicos[66], "").replace(componenteslexicos[67], "").replace(componenteslexicos[68], "").replace(componenteslexicos[69], "")
                   .replace(componenteslexicos[70], "").replace(componenteslexicos[71], "").replace(componenteslexicos[72], "").replace(componenteslexicos[73], "")
                   .replace(componenteslexicos[74], "").replace(componenteslexicos[74], "").replace(componenteslexicos[75], "").replace(componenteslexicos[76], "")
                   .replace(componenteslexicos[78], "").replace(componenteslexicos[79], "").replace(componenteslexicos[80], "").replace(componenteslexicos[81], "")
                   .replace(componenteslexicos[82], "");



           String simbolos = entrada.replace(componenteslexicos[0], "").replace(componenteslexicos[1], "").replace(componenteslexicos[2], "").
                   replace(componenteslexicos[3], "").replace(componenteslexicos[4], "").replace(componenteslexicos[5], "").replace(componenteslexicos[6], "")
                   .replace(componenteslexicos[7], "").replace(componenteslexicos[8], "").replace(componenteslexicos[9], "").replace(componenteslexicos[10], "")
                   .replace(componenteslexicos[11], "");
           		txtResultado.append(wordreserv+ " Esta(s) es(son) palabra(s) reservada(s) \n");


           if (       wordreserv.equals("boolean") || wordreserv.equals("byte") || wordreserv.equals("char") || wordreserv.equals("do")
                   || wordreserv.equals("double") || wordreserv.equals("float") || wordreserv.equals("for")
                   || wordreserv.equals("int") || wordreserv.equals("long") || wordreserv.equals("short")
                   || wordreserv.equals("try") || wordreserv.equals("while") || wordreserv.equals("string")) {

               //System.out.println("Se encontró la palabra reservada " + wordreserv + ".");
               txtResultado.append("Se encontró la palabra reservada " + wordreserv + ". \n");

           }

           if (true) {
               String emailsplit[] = simbolos.split("");


               for (int i = 0; i < emailsplit.length; i++) {
                   if (emailsplit[i].equals("+")) {
                       
                	 
                       txtResultado.append("Se leyó el símbolo + y es un operador aritmético \n");
                   } else if (emailsplit[i].equals("-")) {
                	   txtResultado.append("Se leyó el símbolo - y es un operador aritmético \n");
                   } else if (emailsplit[i].equals("*")) {
                	   txtResultado.append("Se leyó el símbolo * y es un operador aritmético \n");
                   } else if (emailsplit[i].equals("/")) {
                	   txtResultado.append("Se leyó el símbolo / y es un operador aritmético \n");
                   } else if (emailsplit[i].equals(";")) {
                	   txtResultado.append("Se leyó el símbolo ; y es un delimitador \n");
                   } else if (emailsplit[i].equals(",")) {
                	   txtResultado.append("Se leyó el símbolo , y es un delimitador \n");
                   } else if (emailsplit[i].equals("?")) {
                	   txtResultado.append("Se leyó el símbolo ? y es un delimitador \n");
                   } else if (emailsplit[i].equals("¿")) {
                	   txtResultado.append("Se leyó el símbolo ¿ y es un delimitador \n");
                   } else if (emailsplit[i].equals("!")) {
                	   txtResultado.append("Se leyó el símbolo ! y es un delimitador \n");
                   } else if (emailsplit[i].equals("¡")) {
                	   txtResultado.append("Se leyó el símbolo ¡ y es un delimitador \n");
                   } else if (emailsplit[i].equals("{")) {
                	   txtResultado.append("Se leyó el símbolo { y es un delimitador \n");
                   } else if (emailsplit[i].equals("}")) {
                	   txtResultado.append("Se leyó el símbolo } y es un delimitador \n");
                   } else if (emailsplit[i].equals("[")) {
                	   txtResultado.append("Se leyó el símbolo [ y es un delimitador \n");
                   } else if (emailsplit[i].equals("]")) {
                	   txtResultado.append("Se leyó el símbolo ] y es un delimitador \n");
                   } else if (emailsplit[i].equals("$")) {
                	   txtResultado.append("Se leyó el símbolo $ y es un delimitador \n");
                   } else if (emailsplit[i].equals("#")) {
                	   txtResultado.append("Se leyó el símbolo # y es un delimitador \n");
                   } else if (emailsplit[i].equals("(")) {
                	   txtResultado.append("Se leyó el símbolo ( y es un delimitador \n");
                   } else if (emailsplit[i].equals(")")) {
                	   txtResultado.append("Se leyó el símbolo ) y es un delimitador \n");
                   }else if  (emailsplit[i].equals("a")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("b")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("c")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("d")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("e")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("f")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("g")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("h")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("i")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("j")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("k")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("l")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("m")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("n")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("o")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("p")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("q")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("r")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("s")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("t")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("u")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("v")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("w")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("x")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("y")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("z")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("A")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("B")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("C")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("D")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("E")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("F")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("G")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("H")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("I")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("J")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("K")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("L")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("M")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("N")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("O")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("P")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("Q")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("R")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("S")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("T")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("U")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("V")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("W")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("X")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("Y")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals("Z")){
                	   txtResultado.append("Se leyó el símbolo "+emailsplit[i]+" y es un identificador \n");
                   }else if  (emailsplit[i].equals(" ")){
                	   txtResultado.append("Se leyó un blanco \n");
                   }else if  (emailsplit[i].equals("1")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("2")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("3")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("4")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("5")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("6")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("7")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("8")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("9")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }else if  (emailsplit[i].equals("0")){
                	   txtResultado.append("Se leyó un otro, el cual tiene de valor: "+emailsplit[i]+" \n");
                   }


               }
           }
       }
        else {
        	txtResultado.append("Esta palabra no es un componente léxico \n");
           
       }
   }
}
