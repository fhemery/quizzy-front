import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz } from '../../model/quiz';
import { Observable } from 'rxjs';
import { QuizResponse, QuizService } from '../../services/quiz.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'qzy-quiz-edit-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './quiz-edit-page.component.html',
  styleUrl: './quiz-edit-page.component.scss',
})
export class QuizEditPageComponent implements OnInit {
  @Input() id!: string;
  private readonly quizService = inject(QuizService);
  quiz$!: Observable<QuizResponse>;

  ngOnInit(): void {
    this.quiz$ = this.quizService.get(this.id);
  }
}
