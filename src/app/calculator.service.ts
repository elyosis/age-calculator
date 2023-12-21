import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  getYears(birthdate: Date, today: Date) {
    // Substract the birth year from the current one
    let years = today.getFullYear() - birthdate.getFullYear();
    // If the user's birthday hasn't happened yet this year, lower it by one
    if (today.getMonth() < birthdate.getMonth()) {
      years--;
    }

    return years;
  }

  getMonths(birthdate: Date, today: Date) {
    // Get the months for the calculation and adjust them from JS formatting
    const pastMonth = birthdate.getMonth() + 1;
    const currentMonth = today.getMonth() + 1;
    let months;

    // Adjust the calculation depending on whether the birthday month
    // has passed or not yet so the result isn't a negative number
    if (currentMonth >= pastMonth) {
      months = currentMonth - pastMonth;
    } else {
      months = 12 + currentMonth - pastMonth;
    }

    // Lower by one month if the current date is lower than the birth date
    if (today.getDate() < birthdate.getDate()) {
      months--;
      // As this lowering can take the months to negative when
      // the current month and the birth month are the same but
      // the birthday hasn't passed yet, adjust to 11 manually
      if (months === -1) months = 11;
    }

    return months;
  }

  getDays(birthdate: Date, today: Date) {
    const pastDay = birthdate.getDate();
    const currentDay = today.getDate();
    // Passing a 0 returns a Date obj. with the last day of the previous month
    const daysInPastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    let days;

    // If the current date is bigger, substract normally
    // If not, add the number of days in the past month to adjust
    // and not get a negative number
    if (currentDay >= pastDay) {
      days = currentDay - pastDay;
    } else {
      days = daysInPastMonth + currentDay - pastDay;
    }

    return days;
  }

}
