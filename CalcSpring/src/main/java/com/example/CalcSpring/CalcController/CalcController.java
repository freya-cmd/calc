package com.example.CalcSpring.CalcController;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.CalcSpring.models.Addition;
import com.example.CalcSpring.models.Division;
import com.example.CalcSpring.models.Multiplication;
import com.example.CalcSpring.models.Subtraction;


@RestController
@RequestMapping(method = RequestMethod.POST)
public class CalcController {
	
	
	// Requires You to pass values into parameters then they get converted into ints and evaluated.
	@GetMapping("/addition")
	public int addition(@RequestParam(required=true) String num1, @RequestParam(required=true) String num2) {
		int x = Integer.parseInt(num1);
		int y = Integer.parseInt(num2);
		
		Addition addition = new Addition(x, y);
		return addition.sum();
	}
	
	@GetMapping("/subtraction")
	public int subtraction(@RequestParam(required=true) String num1, @RequestParam(required=true) String num2) {
		int x = Integer.parseInt(num1);
		int y = Integer.parseInt(num2);
		
		Subtraction subtraction = new Subtraction(x, y);
		return subtraction.difference();
	}
	
	@GetMapping("/division")
	public int division(@RequestParam(required=true) String num1, @RequestParam(required=true) String num2) {
		int x = Integer.parseInt(num1);
		int y = Integer.parseInt(num2);
		
		Division division = new Division(x, y);
		return division.quotient();
	}
	
	@GetMapping("/multiplication")
	public int multiplication(@RequestParam(required=true) String num1, @RequestParam(required=true) String num2) {
		int x = Integer.parseInt(num1);
		int y = Integer.parseInt(num2);
		
		Multiplication multiplication = new Multiplication(x, y);
		return multiplication.product();
	}

}
