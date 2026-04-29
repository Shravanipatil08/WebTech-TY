// Live Clock (Date & Time)
setInterval(() => {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}, 1000);

// Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add Task
const addTask = async() => {
  const text = document.getElementById("task").value;
  const time = document.getElementById("time").value;

  await fetch("http://localhost:5000/tasks",
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({text,time})
    }
  )
  
  render();
};

// Render
const render = async () => {
  const data = await fetch("http://localhost:5000/tasks");
  const tasks = await data.json()

  const list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerText = `${t.text} at ${t.time}`;
    list.appendChild(li);
  })
}

const loadQuote = async () => {
  try {
    const res = await fetch("http://localhost:5000/quote")
    const data = await res.json();
    console.log(data)
    document.getElementById("quoteText").innerText = data[0].quote
    document.getElementById("quoteAuthor").innerText = data[0].author
  } catch (e) {
    console.log(e);
  }
};


// On load
window.onload = () => {
  render();
  loadQuote();
};