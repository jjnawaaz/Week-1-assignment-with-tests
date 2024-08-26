var count = 0;

function counter() {
  console.clear();
  console.log(count);
  count = count + 1;
}

setInterval(counter, 1000);
