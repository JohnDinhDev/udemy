public class Main {
    public static void main(String[] args) {

        double firstDouble = 20.00d;
        double secondDouble = 80.00d;

        double addAndThenMultiply = (firstDouble + secondDouble) * 100;

        double remainder = addAndThenMultiply % 40.00d;

        boolean isDivisible = remainder == 0 ? true : false;

        System.out.println("isDivisible is equal to: " + isDivisible);

        if (!isDivisible) {
            System.out.println("Got some remainder!");
        }
    }
}
