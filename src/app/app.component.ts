import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'progress-bar-angular';
  success: boolean = false;
  value: number = 0;

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.value = this.value + 1;
      if (this.value === 100) {
        clearInterval(interval);
      }
    }, 100);
  }

  onComplete() {
    this.success = true;
  }
}
