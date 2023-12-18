import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quiz } from '../model/quiz';

export interface QuizListResponse {
  status: 'OK' | 'ERROR';
  data: Quiz[];
}

export interface GetAllQuizApiResponse {
  data: Quiz[];
}


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<QuizListResponse> {
    return this.httpClient.get<GetAllQuizApiResponse>(`${environment.apiUrl}/quiz`).pipe(
      map((response): QuizListResponse => ({ status: 'OK' , data: response.data })),
      catchError((error): Observable<QuizListResponse> => of({ status: 'ERROR', data: [] })));

  }

}
