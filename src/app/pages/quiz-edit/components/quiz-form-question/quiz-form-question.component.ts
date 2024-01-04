import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestion } from '../../../../model/quiz-question';

@Component({
  selector: 'qzy-quiz-form-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-form-question.component.html',
  styleUrl: './quiz-form-question.component.scss',
})
export class QuizFormQuestionComponent {
  @Input() question!: QuizQuestion;
}
