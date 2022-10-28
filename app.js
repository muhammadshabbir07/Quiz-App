var quizQuestion =
    [
        {
            question: "Html Stands For __________________",
            options: [
                "Hyper Text Makeup Language",
                "html",
                "Case Cading Style Sheet",
                "Hypertext markup language",
            ],
            correctAns: "Hypertext markup language",
        },
        {
            question: "Css Stands For _______________________",
            options: [
                "Casecading Style Sheet",
                "Java",
                "Ram",
                "Hypertext markup language",
            ],
            correctAns: "Casecading Style Sheet",
        },
        {
            question: "Js Stands For _______________________",
            options: ["Java Style", "Java Script", "Script", "Script Src"],
            correctAns: "Java Script",
        },
        {
            question: "Dom Stands For _______________________",
            options: ["Document Object Model", "html", "Css", "Java"],
            correctAns: "Document Object Model",
        },
        {
            question: "Ram Stands For _______________________",
            options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
            correctAns: "Random Acccess Memory",
        },
        {
            question: "Rom Stands For _______________________",
            options: [
                "Hyper Text Markup Language",
                "html",
                "HTml",
                "Read Only Memory",
            ],
            correctAns: "Read Only Memory",
        },
    ]

var questionTotalIndex = document.getElementById("questionTotalIndex");
var questionCurrentIndex = document.getElementById("questionCurrentIndex");
var qusteions = document.getElementById("qusteions");
var quiz_btns = document.getElementById("quiz-btns");
var totalMarks = 0;
var correctAnswerCount = 0;
var getModel = document.querySelector(".result_modal");


var currentIndex = 0

function result() {
    var totalQuestion = document.getElementById("totalQuestion");
    var correctAnswer = document.getElementById("correctAnswer");
    var marks = document.getElementById("marks");
    var percentage = document.getElementById("percentage");

    totalQuestion.innerHTML = quizQuestion.length;
    correctAnswer.innerHTML = correctAnswerCount;
    marks.innerHTML = totalMarks;
    percentage.innerHTML = ((totalMarks / (questionTotalIndex.innerHTML * 5)) * 100).toFixed(2) + '%';
}

function initRender() {
    questionTotalIndex.innerHTML = quizQuestion.length;
    questionCurrentIndex.innerHTML = currentIndex + 1;
    qusteions.innerHTML = quizQuestion[currentIndex].question

    for (let i = 0; i < quizQuestion[currentIndex].options.length; i++) {
        const element = quizQuestion[currentIndex].options[i];
        // quiz_btns.innerHTML = ''
        quiz_btns.innerHTML += `
    <div class="col-md-6">
        <button onclick="checkAnswer('${element}','${quizQuestion[currentIndex].correctAns}')">${element}</button>
    </div>
    `
        // console.log(element)
    }
}
initRender()


function checkAnswer(a, b) {
    if (a == b) {
        correctAnswerCount += 1;
        totalMarks += 5;
        console.log("Correct Answer")
        nextQuestion()
    }
    else {
        nextQuestion()
        console.log("Not Correct")
    }
    console.log(totalMarks)

}

function nextQuestion() {
    quiz_btns.innerHTML = ''
    currentIndex++;
    if (questionTotalIndex.innerHTML <= questionCurrentIndex.innerHTML) {
        getModel.style.display = 'flex';
        result()
        currentIndex--;
    }
    initRender()
}

document.getElementById("modalClose").addEventListener("click", function () {
    getModel.style.display = 'none';
    location.reload();
});
