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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.CalcSpring.models.Addition;


@RestController
//@RequestMapping("/calc")
public class CalcController {
	
	
	// Requires You to pass values into parameters then they get converted into ints and evaluated.
	@GetMapping("/addition")
	public int addition(@RequestParam(required=true) String num1, @RequestParam(required=true) String num2) {
		int x = Integer.parseInt(num1);
		int y = Integer.parseInt(num2);
		
		Addition addition = new Addition(x, y);
		return addition.sum();
	}
	
//	@GetMapping("/result") {
//		public Result
//	}
}
