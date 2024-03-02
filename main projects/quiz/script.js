const questions=[
{
    question:"which largest animal in the world?",
    answers:[
        {text:"shark",correct:false},
        {text:"blue whale",correct:true},
        {text:"elephant",correct:false},
        {text:"giraffe",correct:false},
    ]
},
{
    question:"which smallest continent in the world?",
    answers:[
        {text:"asia",correct:false},
        {text:"austrailia",correct:true},
        {text:"arctic",correct:false},
        {text:"africa",correct:false},
    ]
},
{
    question:"which largest desert in the world?",
    answers:[
        {text:"kalhari",correct:false},
        {text:"Gobi",correct:true},
        {text:"sahara",correct:false},
        {text:"antartica",correct:false},
    ]
},
{
    question:"which is smallest coubtry  in the world?",
    answers:[
        {text:"vatican city",correct:false},
        {text:"bhutan",correct:true},
        {text:"nepal",correct:false},
        {text:"shrilanka",correct:false},
    ]
}
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
 
let currentQuestionIndex = 0;
let score =0;

 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
 }
 function showQuestion(){ 
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
     
    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct; 
        }
        button.addEventListener("click",selectAnswer);
    });
 }
 function resetState(){

    nextButton.style.display= "";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }

 }
 function selectAnswer(e){
    const selectedbtn =e.target;
    const isCorrect=selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
     else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.dislay="block";
 }
 function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
       showScore(); 
    }

 }
 nextButton.addEventListener("click" ,()=>{
    if(currentQuestionIndex < questions.length){

        handleNextbutton();
    }else{
    startQuiz();
    } 
});

 startQuiz();