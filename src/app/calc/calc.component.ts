import { Component, OnInit } from '@angular/core';
// import { Calc } from '../calc';
import { CalcService } from '../calc.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  title = 'calc';
  clicked = false;
  int1: string = '';
  int2: string = '';
  clickme(number1:string, number2: string) {
    console.log('it does nothing',number1, number2);
  }

  // private numbers: Calc[];
  constructor(private Calcservice: CalcService) { }

  ngOnInit(): void {
  //   this.Calcservice.getCalc().subscribe((data: Calc[]) => {
      // console.log(data)
//      this.numbers = data;

  //  })
  }

}
