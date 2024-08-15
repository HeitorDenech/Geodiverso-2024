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
      question: "Qual é a capital do Rio Grande do Sul?",
      answers: [
        { text: "Porto Alegre", correct: true },
        { text: "Caxias do Sul", correct: false },
        { text: "Pelotas", correct: false },
        { text: "Santa Maria", correct: false }
      ]
    },
    {
      question: "Qual é o principal rio que corta o Rio Grande do Sul?",
      answers: [
        { text: "Rio Paraná", correct: false },
        { text: "Rio São Francisco", correct: false },
        { text: "Rio Guaíba", correct: true },
        { text: "Rio Tietê", correct: false }
      ]
    },
    {
      question: "Qual cidade é conhecida como a 'Capital Nacional do Calçado'?",
      answers: [
        { text: "Novo Hamburgo", correct: true },
        { text: "Sapiranga", correct: false },
        { text: "São Leopoldo", correct: false },
        { text: "Campo Bom", correct: false }
      ]
    },
    {
        question: "Qual é a bebida tradicionalmente consumida no Rio Grande do Sul?",
        answers: [
          { text: "Chimarrão", correct: true },
          { text: "Café", correct: false },
          { text: "Caipirinha", correct: false },
          { text: "Vinho", correct: false }
        ]
      },
    {
        question: "Qual é a maior cidade do Rio Grande do Sul em termos de população?",
        answers: [
          { text: "Canoas", correct: false },
          { text: "Pelotas", correct: false },
          { text: "Porto Alegre", correct: true },
          { text: "Santa Maria", correct: false }
        ]
      },
    {
      question: "Qual é o nome da maior fronteira natural entre o Brasil e o Uruguai, localizada no Rio Grande do Sul?",
      answers: [
        { text: "Rio Uruguai", correct: true },
        { text: "Rio Paraná", correct: false },
        { text: "Rio Grande", correct: false },
        { text: "Rio Pelotas", correct: false }
      ]
    },
    {
      question: "Qual é o nome da cadeia de montanhas que corta o Rio Grande do Sul?",
      answers: [
        { text: "Serra do Mar", correct: false },
        { text: "Serra da Mantiqueira", correct: false },
        { text: "Serra Geral", correct: true },
        { text: "Serra do Espinhaço", correct: false }
      ]
    }
  ];
  