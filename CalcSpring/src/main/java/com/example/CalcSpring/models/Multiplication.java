package com.example.CalcSpring.models;

public class Multiplication {
	
	private int num1;
	private int num2;
	
	public Multiplication(int num1, int num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	
	public int getNum1() {
		return num1;
	}
	
	public int getNum2() {
		return num2;
	}
	public int product() {
		return num1 * num2;
	}

}
