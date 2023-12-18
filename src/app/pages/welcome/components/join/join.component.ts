import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'qzy-join',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, TranslateModule, MatButtonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {
  joinCode = '';
  join() {
    alert('Not implemented yet');
  }
}
