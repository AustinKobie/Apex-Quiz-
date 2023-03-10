
const quizContainer = document.querySelector('.quiz-container');
const questionsContainer = quizContainer.querySelector('.questions-container');
const submitBtn = quizContainer.querySelector('.submit-btn');
const resultContainer = quizContainer.querySelector('.result-container');
const questionTemplate = document.querySelector('#question-template');

let numCorrect = 0;
let answeredQuestions = 0;

const quizData = [  {        question: 'What is it called when a character changes direction mid-air?',        options: ['Tap-Strafe', 'Super-Glide', 'B-Hop'],
    answer: 'Tap-Strafe'
  },
  {
    question: 'What is it called when you depleat an oppent of armor?',
    options: ['Flesh', 'Cracked', 'One-Shot', 'Lit'],
    answer: 'Cracked'
  },
  {
    question: 'What is the Streamer building?',
    options: ['Building in fragment with ziplin in center', 'Building in fragment with two ziplines one on each end', 'Ramparts building on worlds edge', 'A building in skyhook'],
    answer: 'building in fragment with ziplin in center'
  },
  {
    question: 'What is Wraiths knife called?',
    options: ['Kuala', 'Kunai', 'Kumasi', 'Kokakola'],
    answer: 'Kunai'
  },
  {
    question: 'What animal occompanies Bloodhound?',
    options: ['A Parrot', 'A Bloodhound', 'A Crow', 'A Bat'],
    answer: 'A Crow'
  },
  {
    question: 'Which of these is not a map?',
    options: ['Olympus', 'Worlds Edge', 'Kings Canyon', 'Fragment West'],
    answer: 'Fragment West'
  },
  {
    question: 'What season did ranked maps start rotating?',
    options: ['4', '10', '9', '16'],
    answer: '16'
  },
  {
    question: 'Which company has developed Apex Legends?',
    options: ['Apex Entertainment', 'EA', 'Respawn Entertainment', 'Activision'],
    answer: 'Respawn Entertainment'
  },
  {
    question: 'What is the name of Ramparts machine gun?',
    options: ['Sylvia', 'Sophia', 'Sheila', 'Doesnt have a name'],
    answer: 'Sheila'
  },
  {
    question: 'What is Fuses specialty?',
    options: ['Explosives', 'Science', 'Fluids'],
    answer: 'Explosives'
  }
]


quizData.forEach((question, index) => {
  const questionBox = questionTemplate.content.cloneNode(true).querySelector('.question-box')
  const questionNumber = questionBox.querySelector('.question-number')
  const questionText = questionBox.querySelector('.question-text')
  const answerOptions = questionBox.querySelector('.answer-options');
  const answerInput = questionBox.querySelector('.answer-input')
  const submitAnswerBtn = questionBox.querySelector('.submit-answer-btn')
  
  questionNumber.textContent = index + 1;
  questionText.textContent = question.question
  
  
  question.options.forEach(option => {
    const label = document.createElement('label')
    const input = document.createElement('input')
    input.type = 'radio';
    input.name = `q${index + 1}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    answerOptions.appendChild(label);
  });

  
  
  submitAnswerBtn.addEventListener('click', () => {
      const selectedAnswer = questionBox.querySelector(`input[name="q${index + 1}"]:checked`);
      if (selectedAnswer && selectedAnswer.value.toLowerCase() === question.answer.toLowerCase()) {
          questionBox.classList.remove('incorrect')
          questionBox.classList.add('correct')
          numCorrect++
        } else {
            questionBox.classList.remove('correct')
            questionBox.classList.add('incorrect')
        }
        
        answerInput.disabled = true
        submitAnswerBtn.disabled = true
        answeredQuestions++
    });
    
    questionsContainer.appendChild(questionBox)
});

submitBtn.addEventListener('click', () => {
  if (answeredQuestions === quizData.length) {
    resultContainer.textContent = `You got ${numCorrect} out of 10 questions correct!`;
  } else {
    resultContainer.textContent = `Please answer all questions before submitting.`;
  }
});
