const inp = document.querySelector("input");
const button = document.querySelectorAll(".btn");

button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(event.target.textContent);
    if (event.target.textContent === "+") {
      inp.value++;
    } else {
      inp.value--;
      if (inp.value <= 0) {
        inp.value = 0;
      }
    }
  });
});
