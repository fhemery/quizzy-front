import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface RegisterResult {
  isSuccess: boolean;
  errors: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly httpClient = inject(HttpClient);

  register(username: string, password: string): Observable<RegisterResult> {
    return this.httpClient.post(`${environment.apiUrl}/register`, { username, password }).pipe(map(
        () => ({ isSuccess: true, errors: [] })
      ), catchError((error) => {
        console.log(JSON.stringify(error));
        return of({ isSuccess: false, errors: [error?.error?.message || 'Unknown'] })
      })
    );
  }
}
