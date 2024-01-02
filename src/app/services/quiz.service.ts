import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quiz } from '../model/quiz';
import { TranslateService } from '@ngx-translate/core';
import { HateoasService, HateoasUrl } from './hateoas.service';

export interface QuizListResponse {
  status: 'OK' | 'ERROR';
  data: Quiz[];
  isCreateQuizLinkAvailable: boolean;
}

export interface QuizResponse {
  status: 'OK' | 'NOT FOUND' | 'ERROR';
  data?: Quiz;
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
  private readonly translateService = inject(TranslateService);
  private readonly hateoasService = inject(HateoasService);

  getAll(): Observable<QuizListResponse> {
    return this.httpClient.get<GetAllQuizApiResponse>(`${environment.apiUrl}/quiz`).pipe(
      map((response): QuizListResponse => ({ status: 'OK' , data: response.data, isCreateQuizLinkAvailable: !!response._links?.create })),
      catchError((): Observable<QuizListResponse> => of({ status: 'ERROR', data: [], isCreateQuizLinkAvailable: false })));

  }

  create() {
    return this.httpClient.post<void>(`${environment.apiUrl}/quiz`, {
      title: this.translateService.instant('quiz.defaultTitle'),
      description: this.translateService.instant('quiz.defaultDescription')
    }, {observe: 'response'}).pipe(tap((response) => {
      console.log(JSON.stringify(response.headers));
      if (response.headers.has('Location')) {
        this.hateoasService.addUrl(HateoasUrl.GetQuizAfterPost, response.headers.get('Location') || '');
      }
    }),
      map(response => {
        const location = response.headers.get('Location') || '';
        console.log('Location is', location);
        return location.substring(location.lastIndexOf('/') + 1);
      }));
  }

  get(id: string): Observable<QuizResponse> {
    return this.httpClient.get<Quiz>(`${environment.apiUrl}/quiz/${id}`).pipe(
      map((response): QuizResponse => ({ status: 'OK' , data: response })),
      catchError((err): Observable<QuizResponse> => {
        if(err.status === 404) {
          return of({ status: 'NOT FOUND', data: undefined });
        }
        return of({ status: 'ERROR', data: undefined });
      } ));
  }

  updateTitle(id: string, newTitle: string) {
    return this.httpClient.patch<void>(`${environment.apiUrl}/quiz/${id}`, [{ op: "replace", path: "/title", value: newTitle }]);
  }
}
