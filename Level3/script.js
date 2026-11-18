const button = document.getElementById("colorBtn");

button.addEventListener("click", function () {
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffe0b3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

async function loadPosts() {
  const container = document.getElementById("posts");
  container.innerHTML = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    const data = await response.json();

    container.innerHTML = "";
    data.forEach(function (post) {
      const card = document.createElement("div");
      card.className = "post-card";
      card.innerHTML = "<h3>" + post.title + "</h3><p>" + post.body + "</p>";
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "Data can't be loaded.";
  }
}

loadPosts();

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be atleast of 3 characters.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter correct e-mail.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passError").textContent = "Password must be atleast of 6 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMsg").textContent = "Form submit successfull!";
    this.reset();
  }
});