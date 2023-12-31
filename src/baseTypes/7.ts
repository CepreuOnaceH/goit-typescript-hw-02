/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

function isWeekend(day: enum): boolean {
  return day === enum.Saturday || day === enum.Sunday;
}