const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
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
    question: "Quantos estados tem o Brasil?",
    answers: [
      { text: "14", correct: false },
      { text: "13", correct: false },
      { text: "26", correct: true },
      { text: "22", correct: false }
    ]
  },
  {
    question: "Em que data ocorreu o dia da independência do Brasil?",
    answers: [
      { text: "Dia 7 de setembro de 1822", correct: true },
      { text: "Dia 7 de setembro de 1823", correct: false },
      { text: "Dia 7 de setembro de 1852", correct: false },
      { text: "Dia 7 de setembro de 1853", correct: false }
    ]
  },
  {
    question: 'Qual é a maior região do Brasil?',
    answers: [
      { text: 'Nenhuma das alternativas', correct: true },
      { text: 'Região Nordeste', correct: false },
      { text: 'Região Centro-Oeste', correct: false },
      { text: "Região Sudeste", correct: false }
    ]
  },
  {
    question: 'É verdade que São Paulo é o estado que possui maior PIB per capita?',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Qual é o menor estado do Brasil?',
    answers: [
      { text: 'Pernambuco', correct: false },
      { text: 'Sergipe', correct: true },
      { text: 'Rio Grande Do Sul', correct: false },
      { text: 'Rio De Janeiro', correct: false }
    ]
  },
  {
    question: 'Qual é o maior estado do Brasil?',
    answers: [
      { text: 'São Paulo', correct: false },
      { text: 'Amazonas', correct: true },
      { text: 'Minas Gerais', correct: false },
      { text: 'Nenhuma das alternativas', correct: false }
    ]
  },
  {
    question: 'Qual é o maior rio do Brasil?',
    answers: [
      { text: 'Rio Paraná', correct: false },
      { text: 'Rio São Francisco', correct: false },
      { text: 'Rio Iguaçu', correct: false },
      { text: 'Nenhuma das alternativas', correct: true },
    ]
  },
]

