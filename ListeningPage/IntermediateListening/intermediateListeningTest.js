const quizData = [
    {
        question: '1.  Length of Jim’s next race:  … …   kilometres.',
        correct: '18/eighteen'
    }, {
        question: '2. Time Jim starts training each morning:  … …   o’clock',
        correct: ' 6/six'
    }, {
        question: '.  Jim usually runs past the    …. ',
        correct: 'lake'
    }, {
        question: '3.   Jim turns left at the    . ….',
        correct: 'roundabout'
    }, {
        question: '4.  Jim’s favourite weather for training:  …. ',
        correct: 'cloudy'
    }, {
        question: '5.  Picture on Jim’s new running shirt: a   ….',
        correct: 'horse'
    }, {
        question: '6.  Jim fell while he was crossing the   ….  .',
        correct: 'bridge'
    }, {
        question: '7.  Jim hurt his    . ….',
        correct: 'shoulder'
    }, {
        question: '8.   Date of Jim’s race: 14th ….',
        correct: 'july'
    }

];
 
// console.log(quizData[3]);
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a").value;
//const b_text = document.getElementById("b_text");
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
    //c_text.innerText = currentQuizData.c;
    //b_text.innerText = currentQuizData.b;
    //d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = null;

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