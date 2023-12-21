import { Component } from '@angular/core';
import { FormData } from '../utils/FormData';
import { resultsLoader } from '../utils/resultsLoader';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  currentDate: Date = new Date();
  birthdate: Date | null = null;
  calculation: string[]|number[] = ["--", "--", "--"];

  constructor(private calcService: CalculatorService) {}

  submissionListener(event: FormData): void {
    this.birthdate = new Date(`${event.year}-${event.month}-${event.day}`);

    const years = this.calcService.getYears(this.birthdate, this.currentDate);
    const months = this.calcService.getMonths(this.birthdate, this.currentDate);
    const days = this.calcService.getDays(this.birthdate, this.currentDate);

    resultsLoader(this, years, 0);
    resultsLoader(this, months, 1);
    resultsLoader(this, days, 2);
  }
}
