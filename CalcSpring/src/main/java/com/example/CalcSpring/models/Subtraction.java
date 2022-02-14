package com.example.CalcSpring.models;

public class Subtraction {
	
	private int num1;
	private int num2;
	
	public Subtraction(int num1, int num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	
	public int getNum1() {
		return num1;
	}
	
	public int getNum2() {
		return num2;
	}
	public int difference() {
		return num1 - num2;
	}

}
