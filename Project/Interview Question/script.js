// // Question arrays
// const hrQuestions = [
//     "Tell me about yourself.",
//     "What are your strengths?",
//     "Why should we hire you?",
//     "Where do you see yourself in 5 years?"
// ];

// const jsQuestions = [
//     "What is JavaScript?",
//     "Difference between var, let and const?",
//     "What is DOM?",
//     "Explain event handling in JavaScript."
// ];

// const techQuestions = [
//     "What is your final year project?",
//     "Explain SDLC.",
//     "What is debugging?",
//     "Difference between frontend and backend?"
// ];

// // Function to generate random question
// function generateQuestion() {
//     const category = document.getElementById("category").value;
//     let questions;

//     if (category === "hr") {
//         questions = hrQuestions;
//     } else if (category === "js") {
//         questions = jsQuestions;
//     } else {
//         questions = techQuestions;
//     }

//     const randomIndex = Math.floor(Math.random() * questions.length);
//     document.getElementById("questionBox").innerText = questions[randomIndex];

//     showTime();
// }

// // Show date and time
// function showTime() {
//     const now = new Date();
//     document.getElementById("time").innerText =
//         "Generated on: " + now.toLocaleString();
// }
// Question arrays
const hrQuestions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "Why should we hire you?",
    "Where do you see yourself in 5 years?"
];

const jsQuestions = [
    "What is JavaScript?",
    "Difference between var, let and const?",
    "What is DOM?",
    "Explain event handling in JavaScript."
];

const techQuestions = [
    "What is your final year project?",
    "Explain SDLC.",
    "What is debugging?",
    "Difference between frontend and backend?"
];

// Browser Event - Page Load
window.onload = function () {
    const messages = [
        "Welcome! Start practicing 🚀",
        "All the best for your interview 💼",
        "Practice makes perfect ⭐"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("status").innerText = randomMsg;
};

// Generate Question
function generateQuestion() {
    const category = document.getElementById("category").value;
    let questions;

    if (category === "hr") {
        questions = hrQuestions;
    } else if (category === "js") {
        questions = jsQuestions;
    } else {
        questions = techQuestions;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const questionBox = document.getElementById("questionBox");

    questionBox.innerText = questions[randomIndex];
    questionBox.classList.remove("alert-success");
    questionBox.classList.add("alert-info");

    showTime();
}

// Date & Time
function showTime() {
    const now = new Date();
    document.getElementById("time").innerText =
        "Generated on: " + now.toLocaleString();
}

// Mouse Events
const box = document.getElementById("questionBox");

// Mouse over
box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "#e3f2fd";
});

// Mouse out
box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "";
});
