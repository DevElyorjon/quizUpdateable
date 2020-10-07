const quizData = [
    {
        question: '1.  Fred’s ear hurt so he went to ask the doctor about that.',
        a: 'Right',
        b: 'Wrong', 
        c: 'Doesn’t say',
        correct: 'a'
    }, {
        question: '2.  The doctor said swimming was good for Fred.',
       a: 'Right',
        b: 'Wrong', 
        c: 'Doesn’t say',
        correct: 'b'
    }, {
        question: '3. Fred enjoyed his long bike ride.',
        a: 'Right',
        b: 'Wrong', 
        c: 'Doesn’t say',
        correct: 'c'
    }, {
        question: '4.  Fred was sitting alone when he heard the noise.',
        a: 'Right',
        b: 'Wrong', 
        c: 'Doesn’t say',
        correct: 'b'
    }, {
        question: '5.  The snake came from the zoo.',
        a: 'Right',
        b: 'Wrong', 
        c: 'Doesn’t say',
        correct: 'c'
    }, {
        question: '6.  Fred ended his message because he was in a hurry to go and do some work.',
        a: 'Right',
        b: 'Wrong', 
        c: 'Doesn’t say',
        correct: 'a'
    }

];
 
// console.log(quizData[3]);
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
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
    c_text.innerText = currentQuizData.c;
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