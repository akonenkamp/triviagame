var questions = [{
    question: "What is the population of Brazil?",
    choices: ["145 million", "199 million", "182 million", "205 million"],
    correctAnswer: 1
}, {
    question: "What is 27*14?",
    choices: ["485", "634", "408", "528"],
    correctAnswer: 2
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
    correctAnswer: 1
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0
}];

var currentQ = 0;
var correctAnswers = 0;
var quizEnd = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQ();
    $(this).find(".selectResponseMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".selectResponseMessage").text("Please select an answer");
                $(document).find(".selectResponseMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".selectResponseMessage").hide();

                if (value == questions[currentQ].correctAnswer) {
                    correctAnswers++;
                }

                currentQ++;
                if (currentQ < questions.length) {
                    displayCurrentQ();
                } else {
                    displayScore();

                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQ();
            hideScore();
        }
    });

});

function displayCurrentQ() {
    console.log("show current question");
    var question = questions[currentQ].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoise = questions[currentQ].choices.length;

    $(questionClass).text(question);
    
}