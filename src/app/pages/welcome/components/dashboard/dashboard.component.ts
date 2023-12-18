import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { QuizService } from '../../../../services/quiz.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';

@Component({
  selector: 'qzy-dashboard',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatButtonModule, RouterLink, QuizListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly quizService = inject(QuizService);
  quizzes$ = this.quizService.getAll();

}
