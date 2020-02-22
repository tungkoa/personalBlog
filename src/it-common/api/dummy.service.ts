import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  private baseUrlEmploy = 'http://dummy.restapiexample.com/api/v1/';
  constructor(
    private http: HttpClient
  ) { }

  public getAllEmploy() {
    const url = this.baseUrlEmploy + 'employees';
    return this.http.get(url);
  }
}
