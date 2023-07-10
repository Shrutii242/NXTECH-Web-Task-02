
const ques = document.querySelector('.question');
const ans_btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const remaining_time = document.querySelector('.time');

let current_question_number = 0;
let score = 0;
function start_quiz(){
    current_question_number = 0;
    score = 0;
    btn2.innerHTML = "Next";
    show_question();
}

function show_question(){
    resetState();
    let curr_ques = questions[current_question_number];
    let que_no = current_question_number + 1;
    ques.innerHTML = que_no + ":" + curr_ques.question;

    curr_ques.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn1');
        ans_btn.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', select_answer);

    });
}

function resetState(){
    btn2.style.display = 'none';
    while(ans_btn.firstChild){
        ans_btn.removeChild(ans_btn.firstChild);
    }
}

function select_answer(e){
    const select_btn = e.target;
    const is_correct = select_btn.dataset.correct === "true";
    if(is_correct){
        select_btn.classList.add("correct");
        score++;
    }
    else{
        select_btn.classList.add("incorrect");
    }

    Array.from(ans_btn.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    btn2.style.display = 'block';
}

function show_score(){
    resetState();
    ques.innerHTML = `Your score is ${score} out of ${questions.length} !`;
    btn2.innerHTML = "Try Again";
    btn2.style.display = "block";
}

function handleNextButton(){
    current_question_number++;
    if (current_question_number < questions.length){
        show_question();
    }
    else{
        show_score();
    }
}

btn2.addEventListener('click', () => {
    if (current_question_number < questions.length){
        handleNextButton();
    }
    else{
        start_quiz();
    }
});

start_quiz();