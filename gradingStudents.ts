// HackerLand University has the following grading policy:

// Every student receives a 'grade' in the inclusive range from 0 to 100.
// Any 'grade' less than 40 is a failing 'grade'.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the 'grade' and the next multiple of 5 is less than 38, round  up to the next multiple of 5.
// If the value of 'grade' is less than 38, no rounding occurs as the result will still be a failing 'grade'.
// Examples

// 'grade' = 84 round to  (85 - 84 is less than 3)
// 'grade' = 29 do not round (result is less than 40)
// 'grade' = 27 do not round (60 - 57 is 3 or higher)

// Given the initial value of 'grade' for each of Sam's  students, write code to automate the rounding process.

function gradingStudents(grades: number[]): number[] {
  // Write your code here
  let newGrades: number[] = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newGrades.push(grades[i]);
      continue;
    }

    let nearestMultipleOfFive = 5 * Math.round(grades[i] / 5);

    if (nearestMultipleOfFive == grades[i]) {
      newGrades.push(nearestMultipleOfFive);
      continue;
    }

    if (
      nearestMultipleOfFive - grades[i] < 3 &&
      nearestMultipleOfFive - grades[i] > 0
    ) {
      newGrades.push(nearestMultipleOfFive);
      continue;
    }

    newGrades.push(grades[i]);
  }

  return newGrades;
}
