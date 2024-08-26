function printCurrentTime() {
  let time = new Date();
  let answer =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  console.log(answer);

  let answer2 = "";
  let ampm = "";
  if (time.getHours() >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (time.getHours() > 12) {
    answer2 = time.getHours() - 12;
  }
  if (time.getHours() == 0) {
    answer2 = "12";
  }

  answer2 =
    answer2 + ":" + time.getMinutes() + ":" + time.getSeconds() + " " + ampm;
  console.log(answer2);
}

function printTime() {
  console.clear();
  printCurrentTime();
}

setInterval(printTime, 1000);
