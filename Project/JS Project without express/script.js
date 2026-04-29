// Live Clock (Date & Time)
setInterval(() => {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}, 1000);

// Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add Task
const addTask = () => {
  const text = document.getElementById("task").value;
  const time = document.getElementById("time").value;

  const task = {
    id: Date.now(),
    text,
    time
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
};

// Render
const render = () => {
  const list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerText = `${t.text} at ${t.time}`;
    list.appendChild(li);
  });
};

// Fetch API (Promise + Async)
const loadQuote = async () => {
  try {
    const res = await fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom",
      {
        method: "GET",
        headers: {
          "X-Api-Key": "vOhCCGHaTdwoGhqPwgKCGoI0rUAqo0KExh0uWdEQ"
        }
    });
    const data = await res.json();
    console.log(data)
    document.getElementById("quoteText").innerText = data[0].quote
    document.getElementById("quoteAuthor").innerText = data[0].author
  } catch (e) {
    console.log(e);
  }
};

// Sync vs Async demo
// console.log("Start");
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(res => res.json())
//   .then(data => console.log("Promise Data:", data));
// console.log("End");

// On load
window.onload = () => {
  render();
  loadQuote();
};