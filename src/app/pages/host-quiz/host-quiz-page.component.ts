import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'qzy-host-quiz-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-quiz-page.component.html',
  styleUrl: './host-quiz-page.component.scss',
})
export class HostQuizPageComponent implements OnInit {
  private readonly router = inject(Router);
  @Input() id!: string;

  ngOnInit() {
    if (!this.id) {
      this.router.navigateByUrl('/');
    }
  }
}
