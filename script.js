const questions = [
    {
        question: "Quando a FMP foi fundada?",
        answers: [
            { id: 1, text: "28 de outubro de 2006", correct:false},
            { id: 2, text: "16 de outubro de 2006", correct:false},
            { id: 3, text: "29 de outubro de 2006", correct:false},
            { id: 4, text: "25 de outubro de 2005", correct:true},

        ],
    },
    {
        question: "Quando a FMP foi inaugurada?",
        answers: [
            { id: 1, text: "15 de fevereiro de 2006", correct:false},
            { id: 2, text: "25 de maio de 2006", correct:false},
            { id: 3, text: "18 de março de 2006", correct:false},
            { id: 4, text: "20 de abril de 2006", correct:true},

        ],
    },
    {
        question: "Qual o endereço da Faculdade Municipal da Palhoça?",
        answers: [
            { id: 1, text: "Rua Antônio Vieira, nº 48, bairro Ponte do Imaruim, Palhoça/SC", correct:false},
            { id: 2, text: "Rua João Pereira dos Santos, nº 65, bairro Ponte do Imaruim, Palhoça/SC", correct:false},
            { id: 3, text: "Rua José Adão, nº 99, bairro Ponte do Imaruim, Palhoça/SC", correct:true},
            { id: 4, text: "Rua Armando Siegel, nº 72, bairro Ponte do Imaruim, Palhoça/SC", correct:false},

        ],
    },
    {
        question: "Quantos cursos a FMP está oferecendo atualmente, no ano de 2025?",
        answers: [
            { id: 1, text: "6 cursos de graduação", correct:false},
            { id: 2, text: "4 cursos de graduação", correct:true},
            { id: 3, text: "5 cursos de graduação", correct:false},
            { id: 4, text: "3 cursos de graduação", correct:false},

        ],
    },
    {
        question: "Quais cursos a FMP está oferecendo atualmente, no ano de 2025?",
        answers: [
            { id: 1, text: "ADS, Pedagogia, Engenharia Civil e Arquitetura", correct:false},
            { id: 2, text: "Processos Gerenciais, Pedagogia, Administração e ADS", correct:true},
            { id: 3, text: "Educação Física, Administração, História e Sociologia", correct:false},
            { id: 4, text: "Direito, Nutrição, Processos Gerenciais e Psicologia ", correct:false},

        ],
    },
    {
        question: "Qual porcentagem das vagas são oferecidas aos alunos oriundos de escolas pública e que residam no município de Palhoça e região?",
        answers: [
            { id: 1, text: "75%", correct:false},
            { id: 2, text: "90%", correct:true},
            { id: 3, text: "85%", correct:false},
            { id: 4, text: "80%", correct:false},

        ],
    },
    {
        question: "Quem é a professora responsável pela administração da faculdade no ano de 2025?",
        answers: [
            { id: 1, text: "Profª Débora Raquel Schutz", correct:true},
            { id: 2, text: "Profª Mariane Estefano", correct:false},
            { id: 3, text: "Profª Francini Sheid Martins", correct:false},
            { id: 4, text: "Profª Vera Regina Lúcio", correct:false},

        ],
    },
    {
        question: "Quantos laboratórios a faculdade possui?",
        answers: [
            { id: 1, text: "3", correct:false},
            { id: 2, text: "4", correct:false},
            { id: 3, text: "5", correct:true},
            { id: 4, text: "6", correct:false},

        ],
    },
    {
        question: "Qual a categoria e o sistema de ensino da faculdade?",
        answers: [
            { id: 1, text: "A instituição está classificada como Faculdade na categoria pública, cujo sistema de ensino é municipal", correct:true},
            { id: 2, text: "A instituição está classificada como Faculdade na categoria pública, cujo sistema de ensino é estadual", correct:false},
            { id: 3, text: "A instituição está classificada como Faculdade na categoria privada, cujo sistema de ensino é federal", correct:false},
            { id: 4, text: "A instituição está classificada como Faculdade na categoria privada, cujo sistema de ensino é municipal", correct:false},

        ],
    },
    {
        question: "Quais cursos são oferecidos no período matutino na FMP?",
        answers: [
            { id: 1, text: "ADS, Pedagogia e Processos Gerenciais", correct:false},
            { id: 2, text: "Administração, Pedagogia e ADS", correct:false},
            { id: 3, text: "Pedagogia, Administração e Processos Gerenciais", correct:false},
            { id: 4, text: "Todas as anteriores", correct:true},

        ],
    },
    {
        question: "Quais cursos são oferecidos no período noturno na FMP?",
        answers: [
            { id: 1, text: "Pedagogia e ADS", correct:false},
            { id: 2, text: "Administração e Pedagogia", correct:true},
            { id: 3, text: "Processos Gerenciais e ADS", correct:false},
            { id: 4, text: "Administração e Processos Gerenciais", correct:false},

        ],
    },
    {
        question: "Quais tipos de graduação a faculdade oferece?",
        answers: [
            { id: 1, text: "Bacharel e Tecnólogo", correct:false},
            { id: 2, text: "Tecnólogo e Licenciatura", correct:false},
            { id: 3, text: "Licenciatura e Bacharel", correct:false},
            { id: 4, text: "Todas as anteriores", correct:true},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de ADS?",
        answers: [
            { id: 1, text: "Prof. Rafael Novo da Rosa", correct:false},
            { id: 2, text: "Prof. Clodomir Coradini", correct:false},
            { id: 3, text: "Profª Simone Regina da Silva", correct:true},
            { id: 4, text: "Prof. Vinicius Pierri", correct:false},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de Pedagogia?",
        answers: [
            { id: 1, text: "Profª Deise Clea Leonel", correct:false},
            { id: 2, text: "Prof. Jackson Alexsandro Peres", correct:true},
            { id: 3, text: "Prof. Fabricio Antonio Antunes Soares", correct:false},
            { id: 4, text: "Profª Luzinete Carpin Niedzielnk", correct:false},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de Administração?",
        answers: [
            { id: 1, text: "Prof. Alexandre Lisboa da Silva", correct:true},
            { id: 2, text: "Prof. Antonio José Bicca", correct:false},
            { id: 3, text: "Profª Fabiana Elisa Boff Silveira", correct:false},
            { id: 4, text: "Profª Mariane Rosineide Estafano", correct:false},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de Processos Gerenciais?",
        answers: [
            { id: 1, text: "Profª Fabiana Witt", correct:false},
            { id: 2, text: "Prof. Antonio José Bicca", correct:false},
            { id: 3, text: "Prof. Marcelo Roberto da Silva", correct:false},
            { id: 4, text: "Profª Fernanda de Matos Sanchez", correct:true},

        ],
    },
    {
        question: "Quem é o/a professor/a responsável pelo programa de pesquisa 'ILAB' da FMP?",
        answers: [
            { id: 1, text: "Prof. Clodomir Coradini", correct:false},
            { id: 2, text: "Profª Daniela Amorim ", correct:true},
            { id: 3, text: "Profª Simone Regina da Silva", correct:false},
            { id: 4, text: "Prof. Rafael Novo da Rosa", correct:false},

        ],
    },
    {
        question: "Qual a duração do curso de ADS?",
        answers: [
            { id: 1, text: "2,5 anos", correct:true},
            { id: 2, text: "4 anos", correct:false},
            { id: 3, text: "3,5 anos", correct:false},
            { id: 4, text: "2 anos", correct:false},

        ],
    },
    {
        question: "Qual a duração do curso de Processos Gerenciais?",
        answers: [
            { id: 1, text: "2,5 anos", correct:false},
            { id: 2, text: "4 anos", correct:false},
            { id: 3, text: "3,5 anos", correct:false},
            { id: 4, text: "2 anos", correct:true},

        ],
    },
    {
        question: "Quando foi realizado o vestibular 2025-2 da FMP?",
        answers: [
            { id: 1, text: "7 de junho de 2025", correct:true},
            { id: 2, text: "8 de julho de 2025", correct:false},
            { id: 3, text: "6 de junho de 2025", correct:false},
            { id: 4, text: "9 de julho de 2025", correct:false},

        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
    
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach((button) => {
        if(button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
