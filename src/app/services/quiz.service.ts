import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quiz } from '../model/quiz';

export interface QuizListResponse {
  status: 'OK' | 'ERROR';
  data: Quiz[];
  isCreateQuizLinkAvailable: boolean;
}

export interface GetAllQuizApiResponse {
  data: Quiz[];
  _links: {
    create: string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<QuizListResponse> {
    return this.httpClient.get<GetAllQuizApiResponse>(`${environment.apiUrl}/quiz`).pipe(
      map((response): QuizListResponse => ({ status: 'OK' , data: response.data, isCreateQuizLinkAvailable: !!response._links?.create })),
      catchError((): Observable<QuizListResponse> => of({ status: 'ERROR', data: [], isCreateQuizLinkAvailable: false })));

  }

}
