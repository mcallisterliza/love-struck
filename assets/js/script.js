/* jshint esversion: 8 */
/**
 *  Array 10 x Questions for quiz
 * /
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

/**
 *  Get references to various elements using IDs
 */
const startButton = document.getElementById("start-button");
const instructionsButton = document.getElementById("instructions-button");
const restartButton = document.getElementById("restart-button");
const backToStartButton = document.getElementById("back-to-start-button");
const logo = document.getElementById("logo");

/**
 *  Variables for quiz progress. 'Let' used to allow variable's value to be changed
 * Represents the index of the current question in the 'questions' array
 */
let currentQuestion = 0;
/**
 *  Represents the number of correct answers obtained by the user
 */

let score = 0;


/**
 *  directs users to quiz page once 'start quiz' button is clicked
 */
startButton.addEventListener("click", function () {
    startQuiz();
});

/**
 *  directs users to instructions page once 'instructions' button is clicked
 */
instructionsButton.addEventListener("click", function () {
    showInstructions();
});

/**
 *  directs users to restart quiz once 'restart quiz' button is clicked on end page
 */
restartButton.addEventListener("click", function () {
    restartQuiz();
});

/**
 *  directs users to start back again when 'back to start' button is clicked on instructions page
 */
backToStartButton.addEventListener("click", function () {
    goToStart();
});

/**
 *  directs users to start page anytime h1 is clicked
 */
logo.addEventListener("click", function () {
    goToStart();
});

/**
 *  Functions used to run quiz game
 */
function startQuiz() {
    /**
     *  current question index and score
     */
    currentQuestion = 0;
    score = 0;

    /**
     *  shows first question
     */
    showQuestion();

    /**
     *  Hide the start page and show the quiz page
     */
    document.getElementById("start-page").classList.add("hidden");
    document.getElementById("quiz-page").classList.remove("hidden");
}

/**
 *  Function to show a question
 */
function showQuestion() {
    /**
     *  Get references to HTML elements
     */
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const scoreElement = document.getElementById("score");

    /**
     *  Set the question text
     */
    questionElement.textContent = questions[currentQuestion].question;

    /**
     *  Clear previous options (if any)
     */
    optionsContainer.innerHTML = "";

    /**
     *  Create and append buttons for each option
     */
    questions[currentQuestion].options.forEach((option, index) => {
        /**
         *  Create a new button element
         */
        const button = document.createElement("button");

        /**
         *  Set the button text to the current option
         */
        button.textContent = option;

        /**
         *  Add an event listener to the button to check the answer when clicked
         */
        button.addEventListener("click", () => checkAnswer(index));

        /**
         *  Append the button to the options container
         */
        optionsContainer.appendChild(button);
    });
    /**
     *  Update the score display
     */
    scoreElement.textContent = `Score: ${score}/${currentQuestion}`;
}

/**
 *  Function to check the user's answer and progress through the quiz
 */
function checkAnswer(selectedIndex) {
    /**
     *  Get the correct index of the current questions answer
     */
    const correctIndex = questions[currentQuestion].options.indexOf(questions[currentQuestion].correctAnswer);

    /**
     *  Check if the selected index matches the correct index
     */
    if (selectedIndex === correctIndex) {
        /**
         *  If the answer is correct, increment the user's score
         */
        score++;
    }

    /**
     *  Check if there are more questions to display
     */
    if (currentQuestion < questions.length - 1) {
        /**
         *  If there are more questions, move to the next question and show it
         */
        currentQuestion++;
        showQuestion();
    } else {
        /**
         *  If there are no more questions, show the final page
         */
        showFinalPage();
    }
}

/**
 *  Function to show the final page and hide the quiz page
 */
function showFinalPage() {
    /**
     *  Get a reference to the final score element in the HTML
     */
    const finalScoreElement = document.getElementById("final-score");

    /**
     *  Update the text content of the final score element with the user's score
     */
    finalScoreElement.textContent = `${score}/${questions.length}`;

    /**
     *  Hide the quiz page and show the final page
     */
    document.getElementById("quiz-page").classList.add("hidden");
    document.getElementById("final-page").classList.remove("hidden");
}


/**
 *  Function to restart the quiz by hiding the final page and showing the start page
 */
function restartQuiz() {
    document.getElementById("final-page").classList.add("hidden");
    document.getElementById("start-page").classList.remove("hidden");
}

/**
 *  Function to show instructions by hiding the start page and showing the instructions page
 */
function showInstructions() {
    document.getElementById("start-page").classList.add("hidden");
    document.getElementById("instructions-page").classList.remove("hidden");
}

/**
 *  Function to go back to the start page by showing the start page and hiding other pages
 */
function goToStart() {
    document.getElementById("start-page").classList.remove("hidden");
    document.getElementById("quiz-page").classList.add("hidden");
    document.getElementById("instructions-page").classList.add("hidden");
    document.getElementById("final-page").classList.add("hidden");
}