package pkg01aulaoperadores;

public class Main {  
   
    public static void main(String[] args) {
        // ARITMÉTICO
        int a = 10 + 1;
        int b = a - 10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.2 + 1.7;
         
        a += 10;
        b -= 1;
        c *= 5;
        d /= 1;
        
        System.out.println("O valor de A: " + a);
        System.out.println("O valor de B: " + b);
        System.out.println("O valor de C: " + c);
        System.out.println("O valor de D: " + d);
        System.out.println("O valor de E: " + e);
                
        //----------------------------------------
        // LÓGICOS
        
        boolean ehMaior = 10 > 20;
        boolean ehMenor = 10 < 20;
        boolean ehMenorigual = 10 <= 20;
        boolean ehMaiorIgual = 10 >= 20;
        boolean ehIgual = 10 == 10;
        boolean ehDiferente = 10 != 20;
        
        System.out.println("Maior: " + ehMaior);
        System.out.println("Menor: " + ehMenor);
        System.out.println("Menor Igual: " + ehMenorigual);
        System.out.println("Maior Igual: " + ehMaiorIgual);
        System.out.println("Igual: " + ehIgual);
        System.out.println("Diferente: " + ehDiferente);
        //----------------------------------------
        // LÓGICOS
        
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false; 
        boolean valor5 = 10 > 5 || 5 > 1;
        boolean valor6 = ((10> 9) && (5 > 1)) || ((120 < 1) && (31 > 30));
        
        boolean negacao = !true;
        boolean negacao2 = !false;   
        
        
    }    
}
