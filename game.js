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

    displayCurrentQ();
    $(this).find(".selectResponseMessage").hide();

    $(this).find(".next").on("click", function () {
        if (!quizEnd) {
            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".selectResponseMessage").text("please select a response");
                $(document).find(".selectResponseMessage").show();
            } else {
                $(document).find(".selectResponseMessage").hide();
                if (value == questions[currentQ].correctAnswer) {
                    correctAnswer++;
                }
            }
        } else {
            
        }
    })


})