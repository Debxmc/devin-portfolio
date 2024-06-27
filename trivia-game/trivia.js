// Global variables
let questionDiv, answerDiv, feedbackDiv, currentQuestion;

// Get DOM elements
questionDiv = document.getElementById('question');
answerDiv = document.getElementById('answer');
feedbackDiv = document.getElementById('feedback');

// Function to get a random trivia question
function getTriviaQuestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * questions.length);
      const question = questions[index];
      if (index > questions.length) {
        reject('An error occurred while fetching the trivia question.');
      } else {
        resolve(question);
      }
    }, 1000); // Delay of 1 second
  });
}

// Function to display the trivia question
function displayQuestion(triviaQuestion) {
  questionDiv.textContent = triviaQuestion.question;
  answerDiv.value = '';
  feedbackDiv.textContent = '';
}

// Event listener for "New Question" button
document.getElementById('questionBtn').addEventListener('click', () => {
  getTriviaQuestion()
    .then(question => {
      currentQuestion = question;
      displayQuestion(question);
    })
    .catch(error => {
      console.error(error);
    });
});

// Event listener for "Submit Answer" button
document.getElementById('answerBtn').addEventListener('click', () => {
  const userAnswer = answerDiv.value.trim().toLowerCase();
  const correctAnswer = currentQuestion.answer.trim().toLowerCase();
  if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = 'Correct!';
    feedbackDiv.style.color = 'green';
  } else {
    feedbackDiv.textContent = 'Wrong! The correct answer is: ' + currentQuestion.answer;
    feedbackDiv.style.color = 'red';
  }
});
