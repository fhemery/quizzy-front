import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { Quiz } from '../../../../../model/quiz';

@Component({
  selector: 'qzy-quiz-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TranslateModule],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss',
})
export class QuizListComponent {
  @Input() quizzes!: Quiz[];


  createQuiz() {

  }
}
