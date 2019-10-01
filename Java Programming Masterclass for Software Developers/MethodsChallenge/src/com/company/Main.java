package com.company;

public class Main {

    public static void main(String[] args) {
        displayHighScorePosition("John", calculateHighScorePosition(1500));
        displayHighScorePosition("James", calculateHighScorePosition(900));
        displayHighScorePosition("Jessica", calculateHighScorePosition(400));
        displayHighScorePosition("Michelle", calculateHighScorePosition(50));

    }

    public static void displayHighScorePosition(String name, int position) {
        if (position == -1) {
            System.out.println(name + " did not manage to get into the leader boards");
        } else {
            System.out.println(name + " has managed to get into position " + position);
        }
    }

    public static int calculateHighScorePosition(int score) {
        if (score > 1000) {
            return 1;
        } else if (score <= 1000 && score >= 500) {
            return 2;
        } else if (score > 100 && score < 500) {
            return 3;
        } else {
            return -1;
        }
    }
}
