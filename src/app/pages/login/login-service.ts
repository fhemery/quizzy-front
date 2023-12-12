import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';

export interface LoginResult {
  isSuccess: boolean;
  errors: string[];
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);

  login(email: string, password: string): Observable<LoginResult> {
    return this.httpClient.post(`${environment.apiUrl}/login`, { email, password })
      .pipe(map(value => ({ isSuccess: true, errors: [] })),
        catchError((error) => {
          return of({ isSuccess: false, errors: [error?.error?.message || 'Unknown'] });
        })
      );
  }

}
