// 10 x Questions for quiz possibly more to add?//
const questions = [{
        question: "Q.1 What is the symbol of love?",
        options: ["Heart", "Star", "Circle", "Square"],
        correctAnswer: "Heart"
    },
    {
        question: "Q.2 What flower is often associated with love and romance?",
        options: ["Daisy", "Rose", "Tulip", "Sunflower"],
        correctAnswer: "Rose"
    },
    {
        question: "Q.3 Which romantic movie features the characters Noah and Allie and is based on a Nicholas Sparks novel?",
        options: ["The Notebook", "Titanic", "Pride and Prejudice", "Twilight"],
        correctAnswer: "The Notebook"
    },
    {
        question: "Q.4 What is the traditional gift for a 25th wedding anniversary?",
        options: ["Silver", "Gold", "Ruby", "Diamond"],
        correctAnswer: "Silver"
    },
    {
        question: "Q.5 In which month is Valentine's Day celebrated?",
        options: ["February", "January", "March", "April"],
        correctAnswer: "February"
    },
    {
        question: "Q.6 What is the Italian word for love?",
        options: ["Amore", "Ciao", "Grazie", "Pizza"],
        correctAnswer: "Amore"
    },
    {
        question: "Q.7 Which famous playwright wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Q.8 What is the love hormone that plays a role in social bonding and affection?",
        options: ["Oxytocin", "Dopamine", "Serotonin", "Endorphin"],
        correctAnswer: "Oxytocin"
    },
    {
        question: "Q.9 What date in the month is Valentine's Day?",
        options: ["12th", "13th", "14th", "15th"],
        correctAnswer: "14th"
    },
    {
        question: "Q.10 Which city is known as the 'City of Love'?",
        options: ["Paris", "Rome", "Venice", "Barcelona"],
        correctAnswer: "Paris"
    },
];

// Get references to various elements using IDs //
const startButton = document.getElementById("start-button");
const instructionsButton = document.getElementById("instructions-button");
const restartButton = document.getElementById("restart-button");
const backToStartButton = document.getElementById("back-to-start-button");
const logo = document.getElementById("logo");

//directs users to quiz page once 'start quiz' button is clicked//
startButton.addEventListener("click", function () {
    startQuiz();
});

//directs users to instructions page once 'instructions' button is clicked//
instructionsButton.addEventListener("click", function () {
    showInstructions();
});

//directs users to restart quiz once 'restart quiz' button is clicked on end page//
restartButton.addEventListener("click", function () {
    restartQuiz();
});

//directs users to start back again when 'back to start' button is clicked on instructions page//
backToStartButton.addEventListener("click", function () {
    goToStart();
});

//directs users to start page anytime h1 is clicked//
logo.addEventListener("click", function () {
    goToStart();
});

//Map out planned functions from wireframes to edit//

function startQuiz() {

}

function showQuestion() {

}

function checkAnswer() {

}

function showFinalPage() {

}

function restartQuiz() {

}

function showInstructions() {

}

function goToStart() {

}