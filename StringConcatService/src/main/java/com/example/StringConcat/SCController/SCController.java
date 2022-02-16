package com.example.StringConcat.SCController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.StringConcat.Models.StringConcatModel;

@RestController
@RequestMapping(method = RequestMethod.POST)
public class SCController {
	@GetMapping("/stringconcat")
	public String stringconcat(@RequestParam(required=true) String str1, @RequestParam(required=true) String str2) {
		StringConcatModel StringCC = new StringConcatModel(str1, str2);
		return StringCC.StringConcat();
	}
}
