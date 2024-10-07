// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s: string): string {
  // Write your code here
  let timePartitions = s.split(':');
  let amOrPm = timePartitions[timePartitions.length - 1]
    .slice(-2)
    .toUpperCase();
  let timeLeft = timePartitions[timePartitions.length - 1].slice(0, -2);
  timePartitions[timePartitions.length - 1] = timeLeft;

  if (amOrPm == 'PM') {
    if (timePartitions[0] < '12')
      timePartitions[0] = (parseInt(timePartitions[0]) + 12).toString();
  } else {
    if (timePartitions[0] == '12') timePartitions[0] = '00';
  }

  return timePartitions.join(':');
}

console.log(timeConversion('12:05:45PM'));
