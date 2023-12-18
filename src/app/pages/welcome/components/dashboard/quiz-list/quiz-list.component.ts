import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { QuizListResponse } from '../../../../../services/quiz.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'qzy-quiz-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TranslateModule, MatIconModule, MatTooltipModule],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss',
})
export class QuizListComponent {
  @Input() quizzes!: QuizListResponse;


  createQuiz() {

  }
}
