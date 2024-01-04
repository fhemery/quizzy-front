import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestion } from '../../../../model/quiz-question';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'qzy-quiz-form-question',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatInputModule, TranslateModule],
  templateUrl: './quiz-form-question.component.html',
  styleUrl: './quiz-form-question.component.scss',
})
export class QuizFormQuestionComponent {
  @Input() question!: QuizQuestion;
  @Output() updateQuestionTitle = new EventEmitter<string>();

  updateTitle($event: Event) {
    const newTitle = ($event.target as HTMLInputElement).value;
    if (newTitle !== this.question.title) {
      this.question.title = newTitle;
      this.updateQuestionTitle.emit(newTitle);
    }
  }
}
