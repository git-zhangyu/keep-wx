const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const myTime = date => {
  const year = date.getFullYear()
  const mon = date.getMonth() + 1
  const day = date.getDate()
  var month =mon;
  month==1?month="JAN":month==2?month="FEB":month==3?month="MAR":month==4?month="APR":month==5?month="MAY":month==6?month="JUN":month==7?month="JUL":month==8?month="AUG":month==9?month="SEPT":month==10?month="OCT":month==11?month="NOV":month="DEC"
  return [year, month, day]
}
module.exports = {
  formatTime: formatTime,
  myTime:myTime
}
