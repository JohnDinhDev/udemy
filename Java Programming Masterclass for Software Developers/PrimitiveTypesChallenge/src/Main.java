public class Main {
    public static void main(String[] args) {
        byte myByte = 10;
        short myShort = 20;
        int myInt = 50;
        long myLong = myByte + myShort + myInt;
        myLong *= 10L;
        myLong += 50000L;
        System.out.println(myLong);
    }
}
