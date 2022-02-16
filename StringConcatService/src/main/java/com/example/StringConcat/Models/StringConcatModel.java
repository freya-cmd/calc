package com.example.StringConcat.Models;

public class StringConcatModel {
	private String str1;
	private String str2;
	public StringConcatModel(String str1, String str2) {
		super();
		this.str1 = str1;
		this.str2 = str2;
	}
	public String getStr1() {
		return str1;
	}
	public String getStr2() {
		return str2;
	}
	
	public String StringConcat() {
		return str1 + " " + str2;
	}

}
