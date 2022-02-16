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
  responseData: any;
  str1: string = '';
  str2: string = '';
  responseData2: any;
  clickme(number1:string, number2: string) {
    console.log('Test',number1, number2);
  }
  clickme1(str1:string, str2: string) {
    console.log('Test2',str1, str2);
  }

  // additionForm!: FormGroup;

  constructor (
    private http: HttpClient,
    public fb: FormBuilder
    ) { 
      this.form = this.fb.group({
        number1: [''],
        number2: [''],
        str1: [''],
        str2: [''],

  })
}
submitForm() {
  var formData: any = new FormData();
  formData.append("number1", this.form.get('number1').value);
  formData.append("number2", this.form.get('number2').value);
  this.http.post('http://localhost:4200/api/addition', formData).subscribe(
    (response) => {this.responseData = response },
    (error) => console.log(error)
  )

} 

submitForm2() {
  var formData: any = new FormData();
  formData.append("number1", this.form.get('number1').value);
  formData.append("number2", this.form.get('number2').value);
  this.http.post('http://localhost:4200/api/subtraction', formData).subscribe(
    (response) => {this.responseData = response },
    (error) => console.log(error)
  )

} 

submitForm3() {
  var formData: any = new FormData();
  formData.append("number1", this.form.get('number1').value);
  formData.append("number2", this.form.get('number2').value);
  this.http.post('http://localhost:4200/api/division', formData).subscribe(
    (response) => {this.responseData = response },
    (error) => console.log(error)
  )

} 

submitForm4() {
  var formData: any = new FormData();
  formData.append("number1", this.form.get('number1').value);
  formData.append("number2", this.form.get('number2').value);
  this.http.post('http://localhost:4200/api/multiplication', formData).subscribe(
    (response) => {this.responseData = response },
    (error) => console.log(error)
  )

} 

submitForm5() {
  var formData: any = new FormData();
  formData.append("str1", this.form.get('str1').value);
  formData.append("str2", this.form.get('str2').value);
  this.http.post('http://localhost:4200/api2/stringconcat', formData).subscribe(
    (response) => {this.responseData2 = response },
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