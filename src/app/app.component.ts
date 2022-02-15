import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  title = 'calc';
  clicked = false;
  number1: string = '';
  number2: string = '';
  clickme(number1:string, number2: string) {
    console.log('Test',number1, number2);
  }
  

  // additionForm!: FormGroup;

  constructor (
    private http: HttpClient,
    public fb: FormBuilder
    ) { 
      this.form = this.fb.group({
        number1: [''],
        number2: [''],

  })
}
submitForm() {
  var formData: any = new FormData();
  formData.append("number1", this.form.get('number1').value);
  formData.append("number2", this.form.get('number2').value);
  this.http.post('http://localhost:4200/api/addition', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
} 

 /* ngOnInit() {
    this.http.get('https://localhost:8082/').subscribe(Response => {
 

      if(Response){ 
      }
      console.log(Response)
    });
    }
    onSubmit() {

    };
  } */ }