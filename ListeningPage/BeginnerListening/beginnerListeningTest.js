const quizData = [
    {
        question: "1.  Will sometimes worked with his father when he was younger.",
        a: 'Right',
        b: 'Wrong',
        correct: 'a'
    },  {
        question: "2.  Will was often bored at his dad’s business.",
        a: 'Right',
        b: 'Wrong',
        correct: 'b'
    },  {
        question: "3.  Will found his present job online.",
        a: 'Right',
        b: 'Wrong',
        correct: 'a'
    },  {
        question: "4.  Will never works more than 8 hours a day.",
        a: 'Right',
        b: 'Wrong',
        correct: 'b'
    },  {
        question: "5. Will learns a lot from his boss.",
        a: 'Right',
        b: 'Wrong',
        correct: 'a'
    },  {
        question: "6.  Will says some customers are difficult.",
        a: 'Right',
        b: 'Wrong',
        correct: 'b'
    },  {
        question: "7.  Will enjoys working in the office more than in the factory.",
        a: 'Right',
        b: 'Wrong',
        correct: 'b'
    },  {
        question: "8.  Will makes hot air balloons.",
        a: 'Right',
        b: 'Wrong',
        correct: 'a'
    }

];
 
// console.log(quizData[3]);
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
//const c_text = document.getElementById("c_text");
//const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    //c_text.innerText = currentQuizData.c;
    //d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

//needs to be done
/*

when we move to the next question options should be empty or deselected

check if the chosen element is true or false



*/