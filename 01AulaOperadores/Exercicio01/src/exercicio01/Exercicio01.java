package exercicio01;

import java.util.Scanner;

public class Exercicio01 {

    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        System.out.print("Informe o numero do execicio: ");
        int escolha = leia.nextInt();
        switch (escolha) {
            case 1:
                execicio1();
                break;
            case 2:
                execicio2();
                break;
            case 3:
                execicio3();
                break;
            case 4:
                execicio4();
                break;
            case 5:
                execicio5();
                break;
            case 6:
                execicio6();
                break;
            default:
                System.out.println("Execicio não existe");
                break;
        }
    }

    private static void execicio1() {
        Scanner leia = new Scanner(System.in);
        System.out.print("Digite um numero: ");
        int numero = leia.nextInt();
        numero--;
        System.out.println("Antecessor: " + numero);
    }

    private static void execicio2() {
        Scanner leia = new Scanner(System.in);
        System.out.print("Informe a largura: ");
        double largura = leia.nextDouble();
        System.out.print("Informe a altura: ");
        double altura = leia.nextDouble();
        double area = altura * largura;
        System.out.println("A area é: " + area);
    }

    private static void execicio3() {
        Scanner leia = new Scanner(System.in);
        System.out.print("INFORME A QTD DE ANOS: ");
        int anos = leia.nextInt();
        System.out.print("INFORME A QTD DE MESES: ");
        int meses = leia.nextInt();
        System.out.print("INFORME A QTD DE DIAS: ");
        int dias = leia.nextInt();
        int totalDias = (anos * 365) + (meses * 30) + dias;

        System.out.println("VOCE VIVEU : " + totalDias + " DIAS");
    }

    private static void execicio4() {
        Scanner leia = new Scanner(System.in);
        System.out.print("DIGITE O TOTAL DE VOTOS DE ELEITORES: ");
        int eleitores = leia.nextInt();
        System.out.print("DIGITE QTD VOTOS NULOS: ");
        double nulos = leia.nextDouble();
        System.out.print("DIGITE QTD VOTOS BRANCOS: ");
        double brancos = leia.nextDouble();
        System.out.print("DIGITE QTD VOTOS VALIDOS: ");
        double validos = leia.nextDouble();

        double nuloPorcentual = (nulos / eleitores) * 100;
        double brancoPorcentual = (brancos / eleitores) * 100;
        double validosPorcentual = (validos / eleitores) * 100;
        System.out.println("PORCENTAGEM NULOS: " + nuloPorcentual + "%");
        System.out.println("PORCENTAGEM BRANCOS: " + brancoPorcentual + "%");
        System.out.println("PORCENTAGEM VÁLIDOS: " + validosPorcentual + "%");
    }

    private static void execicio5() {
        Scanner leia = new Scanner(System.in);

        System.out.print("INFORME A TEMPERATURA EM °C: ");
        double celsius = leia.nextDouble();
        double farenhait = (1.8 * celsius) + 32;
        double kelvin = celsius + 273.15;

        System.out.println("CELCIUS: " + celsius + "°C");
        System.out.println("FARENHAIT: " + farenhait + "°F");
        System.out.println("KELVIN: " + kelvin + "°K");
    }

    private static void execicio6() {
        int A = 10;
        int B = 20;

        int C = A;
        A = B;
        B = C;

        System.out.println("VALOR DE A: " + A);
        System.out.println("VALOR DE B: " + B);
    }
}
