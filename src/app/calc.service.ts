import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  private baseUrl = "https://localhost:8082/";

  constructor(private http: HttpClient) { }

getCalc(): Observable<CalcService[]> {

  return this.http.get<CalcService[]>(`${this.baseUrl}`);
}
}