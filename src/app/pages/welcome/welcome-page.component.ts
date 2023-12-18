import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { JoinComponent } from './components/join/join.component';

@Component({
  selector: 'qzy-welcome-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, JoinComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {

}
