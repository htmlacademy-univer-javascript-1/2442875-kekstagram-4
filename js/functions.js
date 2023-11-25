function isWorkingHour(startTime, endTime, meetingTime,meetingDuration ) {
  return (parseTime(meetingTime)) + meetingDuration <= parseTime(endTime);
}
function parseTime(timeString) {
  const parts = timeString.split(':');
  return (parseInt(parts[0], 10)*60+parseInt(parts[0], 10));
}
isWorkingHour('08:00'.Int, '17:30', '14:00', 90);

