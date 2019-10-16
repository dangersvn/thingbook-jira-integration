function formatDateTime(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var t = new Date();
  t.getTime().toString();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var time = `${h}:${m}:${s}`; 
    return `${day} + ' ' + ${monthNames[monthIndex]} + ' ' + ${year} ${time}`;
  }
  
  console.log(formatDate(new Date()));  //

module.exports = Object.assign({}, {
    formatDateTime
});
