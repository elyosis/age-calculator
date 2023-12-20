import { Component } from '@angular/core';
import { FormData } from '../FormData';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  currentDate: Date = new Date();
  birthdate: Date | null = null;
  calculation: string[] = ["--", "--", "--"];

  constructor(private calcService: CalculatorService) {}

  submissionListener(event: FormData): void {
    this.birthdate = new Date(`${event.year}-${event.month}-${event.day}`);

    this.calculation[0] = this.calcService.getYears(this.birthdate, this.currentDate);
    this.calculation[1] = this.calcService.getMonths(this.birthdate, this.currentDate);
    this.calculation[2] = this.calcService.getDays(this.birthdate, this.currentDate);
  }
}
