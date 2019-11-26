
function countDown() {

  var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //document.getElementById('countdown').innerHTML = day + 'Tage' + hour + 'Stunden' + minute + 'Minuten' + second + 'Sekunden';
  var startDatum = new Date(2019, 6, 1);
  var now = new Date();
  var distance = now.getTime() - startDatum.getTime();

  document.getElementById('days').innerText = Math.floor(distance / (day));
  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

  setTimeout(countDown, 500);

}

document.addEventListener('DOMContentLoaded', countDown);
