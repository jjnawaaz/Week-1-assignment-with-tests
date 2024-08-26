var count = 0;
function counter() {
  console.clear();
  console.log(count);
  count = count + 1;
}

for (let i = 0; i <= 10; i++) {
  setTimeout(counter, i * 1000);
}
