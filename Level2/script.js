const button = document.getElementById("colorBtn");

button.addEventListener("click", function () {
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffe0b3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});