public class Main {
    public static void main(String[] args) {

        int result = 1 + 2; // 1 + 2 = 3
        System.out.print(result);
        int previousResult = result;
        System.out.println("previousResult = " + previousResult);
        result -= 1;
        System.out.println("3 - 1 = " + result);
        System.out.println("previousResult = " + previousResult);

        result *= 10; // 2 * 10 = 20
        System.out.println("2 * 10 = " + result);

        result = result / 5; // 20 / 5 = 4;
    }
}
