import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { checkPassword } from 'src/assets/js/crack.js';

@Injectable({
  providedIn: 'root'
})
export class CrackerServiceService {

  getPassword(pw): Observable<any>{
    
    return checkPassword(pw);
    }

  constructor(
    private http: HttpClient,
  ) { }
}
