import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrackerServiceService {

  getJson(): Observable<any>{
    
    return this.http.get('https://aust-hugbo1.herokuapp.com/locations');
    }

  constructor(
    private http: HttpClient,
  ) { }
}
