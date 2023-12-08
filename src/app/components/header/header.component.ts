import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PingService, PingStatus } from '../../services/ping.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'qzy-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatTooltipModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly pingService = inject(PingService);
  pingStatus$ = this.pingService.ping();
  protected readonly PingStatus = PingStatus;
}
