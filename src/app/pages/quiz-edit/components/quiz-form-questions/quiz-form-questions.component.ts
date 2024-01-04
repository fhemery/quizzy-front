import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestion } from '../../../../model/quiz-question';
import { QuizService } from '../../../../services/quiz.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuizFormQuestionComponent } from '../quiz-form-question/quiz-form-question.component';

@Component({
  selector: 'qzy-quiz-form-questions',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule, MatButtonModule, QuizFormQuestionComponent],
  templateUrl: './quiz-form-questions.component.html',
  styleUrl: './quiz-form-questions.component.scss',
})
export class QuizFormQuestionsComponent {
  private readonly quizService = inject(QuizService);
  @Input() quizId!: string;
  @Input() questions!: QuizQuestion[];

  addQuestion() {
    this.quizService.addQuestion(this.quizId).subscribe((question) => {
      this.questions.push(question);
    });
  }
}
