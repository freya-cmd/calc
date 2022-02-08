import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  clicked = false;

  additionForm!: FormGroup;

  constructor (private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm(): void {
    this.additionForm = this.fb.group({
      number1: '',
      number2: '',
    })
  }
  onSubmit(): void {
    console.log(this.additionForm);
  }


  handleClick() {
    this.clicked = true;
  }
}
