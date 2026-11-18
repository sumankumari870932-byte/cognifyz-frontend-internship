// Task 4: Button
document.getElementById("colorBtn").addEventListener("click", function () {
  const colors = ["#ffe5e5", "#e5ffe9", "#e5e9ff", "#fffbe5", "#ffeedd", "#eef1ff"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Task 5: API
async function loadPosts() {
  const container = document.getElementById("posts-list");
  container.innerHTML = "Loading...";

  // Apna content yaha likho (title aur body badal sakti ho)
  const myText = [
    { title: "What is HTML?", body: "HTML is the base of every website. It gives structure to the page using tags like headings, paragraphs and images." },
    { title: "What is CSS?", body: "CSS is used to design a website. It controls colors, fonts, spacing and layout." },
    { title: "What is JavaScript?", body: "JavaScript makes a website interactive, like buttons, forms and loading live data." },
    { title: "What is Bootstrap?", body: "Bootstrap is a CSS framework with ready-made components like navbar, buttons and grid layout." },
    { title: "What is Sass?", body: "Sass is a CSS preprocessor. It lets us use variables and nesting to write cleaner CSS." },
    { title: "What is an API?", body: "An API lets one program get data from another. Here we use fetch() to load data from a server." }
  ];

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    const data = await response.json();

    container.innerHTML = "";
    data.forEach(function (post, i) {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
      col.innerHTML =
        '<div class="post-card"><h3>' + myText[i].title + "</h3><p>" + myText[i].body + "</p></div>";
      container.appendChild(col);
    });
  } catch (error) {
    container.innerHTML = "Data can't be load.";
  }
}
loadPosts();
loadPosts();

// Task 6: Form validation
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
    document.getElementById("nameError").textContent = "Name must be atleast 3 characters.";
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter correct E-mail.";
    valid = false;
  }
  if (password.length < 6) {
    document.getElementById("passError").textContent = "Password mustbe atleast of 6 characters.";
    valid = false;
  }
  if (valid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully!";
    this.reset();
  }
});