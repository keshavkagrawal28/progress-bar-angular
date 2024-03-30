import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MAX, MIN } from '../../utils/constants';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent implements OnInit {
  private _percent = new BehaviorSubject(0);
  MIN: any;
  MAX: any;
  percent: number = 0;
  @Input() set value(val: number) {
    this._percent.next(val);
  }
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.MIN = MIN;
    this.MAX = MAX;
    this._percent.subscribe((val: number) => {
      this.percent = Math.min(this.MAX, Math.max(val, this.MIN));
      if (this.percent === 100) {
        this.onComplete.emit();
      }
    });
  }
}
