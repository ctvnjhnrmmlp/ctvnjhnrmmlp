import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getJoinedStringComma(text: string[]) {
  return text.join(', ');
}

export function getJoinedStringPeriod(text: string[]) {
  return text.join('. ');
}

export function getTotalWorkingExperience() {
  const startDate = new Date('2023-03-06');
  const currentDate = new Date();
  // @ts-ignore
  const timeDifference = currentDate - startDate;
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const totalYears = timeDifference / millisecondsInYear;
  const formattedTotalYears = totalYears.toFixed(2);

  return formattedTotalYears;
}
