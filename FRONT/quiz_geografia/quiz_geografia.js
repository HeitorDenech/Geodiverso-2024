const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: false // Para que a animação ocorra apenas uma vez
})

// sr.reveal('.interface', { delay: 100, origin: 'top' });

sr.reveal('.txt-topo-site', { delay: 100, origin: 'left' });

sr.reveal('main', { delay: 100, origin: 'top' });

const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}
 
function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente"
      break
    case (performance >= 70):
      message = "Muito bom"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar"
  }

  $questionsContainer.innerHTML =
    `
      <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestions} questões!
        <span>Resultado: ${message}</span>
      </p>
      <button 
        onclick=window.location.reload() 
        class="button"
      >
        Refazer teste
      </button>
    `
}


const questions = [
  {
    question: "Qual é o maior país do mundo?",
    answers: [
      { text: "Rússia", correct: true },
      { text: "Brasil", correct: false },
      { text: "Canadá", correct: false },
      { text: "Estados Unidos", correct: false }
    ]
  },
  {
    question: "Qual a maior cidade do mundo? (População)",
    answers: [
      { text: "São Paulo", correct: false },
      { text: "Xangai", correct: false },
      { text: "Pequim", correct: false },
      { text: "Tóquio", correct: true }
    ]
  },
  {
    question: "Qual o maior continente do mundo?",
    answers: [
      { text: "América", correct: false },
      { text: "Ásia", correct: true },
      { text: "África", correct: false },
      { text: "Europa", correct: false }
    ]
  },
  {
    question: "Qual é o país mais populoso do mundo?",
    answers: [
      { text: "Índia", correct: true },
      { text: "China", correct: false },
      { text: "Estados Unidos", correct: false },
      { text: "Brasil", correct: false }
    ]
  },
  {
    question: "Qual é o país com maior PIB per capita do mundo?",
    answers: [
      { text: "Estados Unidos", correct: false },
      { text: "Suíça", correct: false },
      { text: "Irlanda", correct: false },
      { text: "Luxemburgo", correct: true }
    ]
  },
  {
    question: "Qual é o país com maior PIB do mundo?",
    answers: [
      { text: "Alemanha", correct: false },
      { text: "China", correct: false },
      { text: "Estados Unidos", correct: true },
      { text: "Japão", correct: false }
    ]
  },
  {
    question: "Qual é o país mais rico da Europa?",
    answers: [
      { text: "Alemanha", correct: true },
      { text: "Reino Unido", correct: false },
      { text: "França", correct: false },
      { text: "Suíça", correct: false }
    ]
  }
];
