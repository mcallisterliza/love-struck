/* jshint esversion: 8 */
/*
 *Questions bank array for quiz of 30 questions. Quiz will randomly select 10 questions each time
 */
const questionsBank = [{
        question: "What is the symbol of love?",
        options: ["Heart", "Star", "Circle", "Square"],
        correctAnswer: "Heart"
    },
    {
        question: "What flower is often associated with love and romance?",
        options: ["Daisy", "Rose", "Tulip", "Sunflower"],
        correctAnswer: "Rose"
    },
    {
        question: "Which romantic movie features the characters Noah and Allie and is based on a Nicholas Sparks novel?",
        options: ["The Notebook", "Titanic", "Pride and Prejudice", "Twilight"],
        correctAnswer: "The Notebook"
    },
    {
        question: "What is the traditional gift for a 25th wedding anniversary?",
        options: ["Silver", "Gold", "Ruby", "Diamond"],
        correctAnswer: "Silver"
    },
    {
        question: "In which month is Valentine's Day celebrated?",
        options: ["February", "January", "March", "April"],
        correctAnswer: "February"
    },
    {
        question: "What is the Italian word for love?",
        options: ["Amore", "Ciao", "Grazie", "Pizza"],
        correctAnswer: "Amore"
    },
    {
        question: "Which famous playwright wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the love hormone that plays a role in social bonding and affection?",
        options: ["Oxytocin", "Dopamine", "Serotonin", "Endorphin"],
        correctAnswer: "Oxytocin"
    },
    {
        question: "What date in the month is Valentine's Day?",
        options: ["12th", "13th", "14th", "15th"],
        correctAnswer: "14th"
    },
    {
        question: "Which city is known as the 'City of Love'?",
        options: ["Paris", "Rome", "Venice", "Barcelona"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the traditional gift for a 50th wedding anniversary?",
        options: ["Gold", "Diamond", "Silver", "Emerald"],
        correctAnswer: "Gold"
    },
    {
        question: "In which year did the tradition of sending Valentine's Day cards begin?",
        options: ["1800s", "1600s", "1900s", "1700s"],
        correctAnswer: "1700s"
    },
    {
        question: "What is the name of the winged god of love in ancient Roman mythology?",
        options: ["Cupid", "Eros", "Amor", "Apollo"],
        correctAnswer: "Cupid"
    },
    {
        question: "Which bird is often associated with love and mating for life?",
        options: ["Swan", "Peacock", "Dove", "Parrot"],
        correctAnswer: "Swan"
    },
    {
        question: "What popular sweet treat is often given on Valentine's Day and has phrases written on them?",
        options: ["Chocolate Hearts", "Candy Canes", "Love Hearts", "Jelly Beans"],
        correctAnswer: "Love Hearts"
    },
    {
        question: "What romantic novel features the characters Elizabeth Bennet and Mr. Darcy?",
        options: ["Pride and Prejudice", "Wuthering Heights", "Sense and Sensibility", "Jane Eyre"],
        correctAnswer: "Pride and Prejudice"
    },
    {
        question: "What is the meaning of the red rose, the most iconic symbol of Valentine's Day?",
        options: ["Friendship", "Passion", "Peace", "Gratitude"],
        correctAnswer: "Passion"
    },
    {
        question: "Which ancient Roman festival is believed to be the origin of Valentine's Day?",
        options: ["Lupercalia", "Saturnalia", "Ides of March", "Kalends"],
        correctAnswer: "Lupercalia"
    },
    {
        question: "Who is the Roman goddess of love and beauty?",
        options: ["Aphrodite", "Venus", "Isis", "Hera"],
        correctAnswer: "Venus"
    },
    {
        question: "In the language of flowers, what does a pink rose symbolize?",
        options: ["Adoration", "Gratitude", "Friendship", "Love"],
        correctAnswer: "Love"
    },
    {
        question: "What Shakespearean play features the famous quote 'The course of true love never did run smooth'?",
        options: ["Romeo and Juliet", "A Midsummer Night's Dream", "Macbeth", "Hamlet"],
        correctAnswer: "A Midsummer Night's Dream"
    },
    {
        question: "What is the significance of the Love Knot in relation to weddings?",
        options: ["Symbol of eternal love", "Unity of two families", "Promise of fidelity", "Good luck and prosperity"],
        correctAnswer: "Symbol of eternal love"
    },
    {
        question: "In Japan, what do women traditionally give to men on Valentine's Day?",
        options: ["Chocolates", "Flowers", "Love letters", "Jewelry"],
        correctAnswer: "Chocolates"
    },
    {
        question: "Who is known as the patron saint of lovers?",
        options: ["St. Patrick", "St. Valentine", "St. Nicholas", "St. George"],
        correctAnswer: "St. Valentine"
    },
    {
        question: "What romantic novel features the characters Scarlett O'Hara and Rhett Butler?",
        options: ["Pride and Prejudice", "Gone with the Wind", "Wuthering Heights", "Sense and Sensibility"],
        correctAnswer: "Gone with the Wind"
    },
    {
        question: "What is the name of the love song sung by Elvis Presley?",
        options: ["Love Me Tender", "Can't Help Falling in Love", "Unchained Melody", "Something"],
        correctAnswer: "Can't Help Falling in Love"
    },
    {
        question: "What is the traditional gift for a 15th wedding anniversary?",
        options: ["Crystal", "Pearl", "Ivory", "Platinum"],
        correctAnswer: "Crystal"
    },
    {
        question: "Which romantic comedy film stars Julia Roberts as a popular escort in Los Angeles?",
        options: ["Pretty Woman", "My Best Friend's Wedding", "Notting Hill", "Runaway Bride"],
        correctAnswer: "Pretty Woman"
    },
    {
        question: "What is the Italian dessert often associated with love, meaning 'pick me up'?",
        options: ["Tiramisu", "Cannoli", "Panna Cotta", "Gelato"],
        correctAnswer: "Tiramisu"
    },
    {
        question: "What does the term 'betrothal' refer to in the context of love and marriage?",
        options: ["Engagement", "Wedding ceremony", "Honeymoon", "Anniversary"],
        correctAnswer: "Engagement"
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

let questions;

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
 * the following function uses the Fisher-Yates Shuffle algorithm to shuffle the questions 
 * so that the user has a new set of questions each time they play the quiz
 */
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/**
 *  Functions used to run quiz game
 */
function startQuiz() {

    /**
     * Shuffle the questionsBank array
     */
    const shuffledQuestions = shuffleArray(questionsBank);

    /**
     * Set the questions array to the first 10 questions
     */
    questions = shuffledQuestions.slice(0, 10);
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
    scoreElement.textContent = `So far...You have scored ${score} question(s) correctly out of ${currentQuestion} answered questions!`;
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
    finalScoreElement.textContent = `You have scored ${score} questions correctly out of ${questions.length} questions!`;

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