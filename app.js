const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How fast can wolves sprint?',
      answers: [
        '16-18 mph',
        '26-28 mph',
        '36-38 mph',
        '46-48 mph'
      ],
      correctAnswer: '36-38 mph',
      img: 'img/sprint.jpg'
    },
    {
      question: 'What is a wolves average lifespan in the wild?',
      answers: [
        '13 years',
        '14 years',
        '15 years',
        '16 years'
      ],
      correctAnswer: '13 years',
      img: 'img/lifespan.jpeg'
    },
    {
      question: 'How many pounds of meat can a wolf eat in one sitting?',
      answers: [
        '5 pounds',
        '10 pounds',
        '15 pounds',
        '20 pounds'
      ],
      correctAnswer: '20 pounds',
      img: 'img/meat.jpg'
    },
    {
      question: 'True or False: Wolves help improve riparian areas (the wetland areas adjacent to rivers and streams).',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'True',
      img: 'img/river.png'
    },
    {
      question: 'True or False: Wolves will not prey on injured, sick, or old elk, moose, and deer.',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'False',
      img: 'img/hunt.jpg'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function homePage(){
  return `
  <div>
    <h2>Welcome to the Wolf Facts Quiz!</h2>
    <button id='start'>Start Quiz</button>
  </div> 
  `
}

function createAnswers(){
  let answers = STORE.questions[STORE.questionNumber].answers;
  let myReturn = '';
  let i = 0;
  answers.forEach((element) => {
      myReturn += `
    <li><input id="answer${i}" name="answers" type="radio" value="${i}" required>
    <label for = "answer${i}">${element}</label></li>
    `;
    i++;
    });
  return myReturn;
}

function questionPage(){
  let currentQuestion = STORE.questions[STORE.questionNumber]
  return `
  <div>
    <h3>Question ${STORE.questionNumber + 1} of ${STORE.questions.length}</h3>
    <h4>${STORE.score} of ${STORE.questions.length} correct</h4>
  </div>
  <div class="group">
    <div id=questionForm class="item">
      <form>
        <h3>${currentQuestion.question}</h3> 
          <ol style='list-style-type: none;'>
            ${createAnswers()}
          </ol>   
        <button>Submit</button>
      </form>
    </div>
    <div class="item">
      <img src="${currentQuestion.img}" alt="Question Picture">
    </div>
  </div>
  `
}

function resultsPage(){
  return `
  <div class ="group">
    <div class="item">
      <h3>Quiz Complete!</h3>
      <h4>You got ${STORE.score} of ${STORE.questions.length} correct</h4>
      <button id="restart">Restart?</button>
    </div>
    <div class="item">
      <img src="img/facts_orig.jpg" alt="Wolf Facts">
    </div>
  </div>
  `
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render(){
  let content;
  content = (STORE.quizStarted === false) ? content = homePage(): 
  content = (STORE.quizStarted === true && STORE.questionNumber < STORE.questions.length) ? content = questionPage():
  content = resultsPage();
  $('main').html(content);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function startQuiz(){
  $('#quiz').on('click','#start',() => {
    STORE.quizStarted = true;
    render();
  });
}
function answerSubmitted(){
  $('#quiz').on('submit','form',e => {
    e.preventDefault();
    let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
    let answerposition = $('input[name=answers]:checked').val();
    let answerId = `#answer${answerposition}`;
    let answer = STORE.questions[STORE.questionNumber].answers[answerposition];
    let response = (answer === correctAnswer) ? "<div class='correct'>Correct! Great Job!</div>" : `<div class="incorrect">Incorrect, the correct answer was ${correctAnswer}</div>`;
    if(answer === correctAnswer)STORE.score++; 
    $(answerId).closest('li').append(response);
    $("button").remove();
    STORE.questionNumber++
    $("#questionForm").append('<button id="next"> Next </button>');
  });
}
function nextQuestion(){
  $('#quiz').on('click','#next',() => {
    render();
  });
}
function restartQuiz(){
  $('#quiz').on('click','#restart',() => {
    STORE.quizStarted = false;
    STORE.questionNumber = 0;
    STORE.score = 0;
    render();
  });
}


function quizApp(){
  render();
  startQuiz();
  answerSubmitted();
  nextQuestion();
  restartQuiz();
}

$(quizApp);