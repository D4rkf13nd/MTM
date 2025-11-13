const quizData = [
    {
    "question": "What are materials and supplies that a business or institution carries either for sale or to provide inputs to production?",
    "answer": "INVENTORIES"
  },
  {
    "question": "What is responsible for planning and controlling inventory from the raw material stage to the customer?",
    "answer": "INVENTORY MANAGEMENT"
  },
  {
    "question": "What type of management deals with inventories according to their classification and the functions they perform?",
    "answer": "AGGREGATE INVENTORY MANAGEMENT"
  },
  {
    "question": "At what level must management establish decision rules about inventory items such as how much to order and when to place orders?",
    "answer": "ITEM INVENTORY MANAGEMENT"
  },
  {
    "question": "What classification of inventories is related to the flow of materials into, through, and out of a manufacturing organization?",
    "answer": "INVENTORY AND FLOW OF MATERIALS"
  },
  {
    "question": "What are the basic substances used in production before any transformation occurs?",
    "answer": "RAW MATERIALS"
  },
  {
    "question": "What refers to goods that are in the process of being manufactured but are not yet completed?",
    "answer": "WORK-IN-PROCESS"
  },
  {
    "question": "What type of inventory consists of completed products ready for sale or distribution?",
    "answer": "FINISHED GOODS"
  },
  {
    "question": "What inventories are located in the distribution system between the plant and the customer?",
    "answer": "DISTRIBUTION INVENTORIES"
  },
  {
    "question": "What items support operations and maintenance but do not become part of the finished product?",
    "answer": "MAINTENANCE, REPAIR, AND OPERATING SUPPLIES"
  },
  {
    "question": "What pattern describes a situation where, if supply met demand exactly, there would be little need for inventory?",
    "answer": "SUPPLY AND DEMAND PATTERNS"
  },
  {
    "question": "What is the basic purpose of inventories in batch manufacturing that serves as a buffer between supply and demand?",
    "answer": "FUNCTIONS OF INVENTORIES"
  },
  {
    "question": "What type of inventories are built up in anticipation of future demand such as promotions or peak selling seasons?",
    "answer": "ANTICIPATION INVENTORY"
  },
  {
    "question": "What type of inventory is held to cover random, unpredictable fluctuations in supply and demand?",
    "answer": "FLUCTUATION INVENTORY"
  },
  {
    "question": "What type of inventory is created when items are purchased or manufactured in quantities greater than needed immediately?",
    "answer": "LOT SIZE INVENTORY"
  },
  {
    "question": "What type of inventory is purchased when buyers expect prices to rise, often seen in commodities like grains?",
    "answer": "HEDGE INVENTORY"
  },
  {
    "question": "What are items such as maintenance supplies, spare parts, and consumables that support general operations?",
    "answer": "MAINTENANCE, REPAIR, AND OPERATING (MRO) SUPPLIES"
  },
  {
    "question": "What type of inventory exists because of the time needed to move goods from one location to another?",
    "answer": "TRANSPORTATION INVENTORIES"
  },
  {
    "question": "What is the ability of a company to satisfy customer needs through the availability of items when needed?",
    "answer": "CUSTOMER SERVICE"
  },
  {
    "question": "What cost includes all expenses incurred by a firm because of the volume of inventory carried?",
    "answer": "CARRYING COST"
  },
  {
    "question": "What cost is associated with placing an order either with the factory or a supplier?",
    "answer": "ORDERING COST"
  },
  {
    "question": "What cost occurs when demand during the lead time exceeds forecast, leading to backorders or lost sales?",
    "answer": "STOCKOUT COST"
  },
  {
    "question": "What is the price paid for a purchased item including all direct costs to bring it into the plant?",
    "answer": "ITEM COST"
  },
  {
    "question": "What costs arise when output levels must be changed, such as overtime or layoffs?",
    "answer": "CAPACITY-ASSOCIATED COSTS"
  },
  {
    "question": "What statement shows the assets, liabilities, and owners’ equity of a business?",
    "answer": "BALANCE SHEET"
  },
  {
    "question": "What is something that has value and is expected to benefit the future operation of the business?",
    "answer": "ASSET"
  },
  {
    "question": "What are obligations or amounts owed by a company such as accounts payable or long-term debt?",
    "answer": "LIABILITIES"
  },
  {
    "question": "What represents the difference between assets and liabilities, or what is left for the owners after all debts are paid?",
    "answer": "OWNER’S EQUITY"
  },
  {
    "question": "What is the accounting equation that shows the relationship between assets, liabilities, and owners’ equity?",
    "answer": "ASSETS = LIABILITIES + OWNERS’ EQUITY"
  },
  {
    "question": "What are the two major financial statements used in business?",
    "answer": "BALANCE SHEET AND INCOME STATEMENT"
  },
  {
    "question": "Which financial statement shows the revenues made and expenses incurred in achieving that revenue?",
    "answer": "INCOME STATEMENT"
  },
  {
    "question": "What is the primary purpose of a business that increases owners’ equity by making a profit?",
    "answer": "INCOME"
  },
  {
    "question": "What refers to the money received from the sale of goods or services, sometimes in cash or as accounts receivable?",
    "answer": "REVENUE"
  },
  {
    "question": "What are the costs incurred in the process of making revenue, categorized into cost of goods sold and administrative expenses?",
    "answer": "EXPENSES"
  },
  {
    "question": "What are the costs incurred to make the product, including direct labor, direct material, and factory overhead?",
    "answer": "COST OF GOODS SOLD"
  },
  {
    "question": "What includes all other costs in running a business, such as advertising, insurance, and property taxes?",
    "answer": "GENERAL AND ADMINISTRATIVE EXPENSES"
  }
];
let quizOrder = [];
let currentAnswers = [];
let currentQuestion = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createQuiz() {
    // If quizOrder is not set, initialize and shuffle
    if (!quizOrder.length) {
        quizOrder = Array.from({length: quizData.length}, (_, i) => i);
        shuffleArray(quizOrder);
    }
    if (!currentAnswers.length || currentAnswers.length !== quizData.length) {
        currentAnswers = new Array(quizData.length).fill("");
    }
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    quizOrder.forEach((qIdx, index) => {
        const question = quizData[qIdx];
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        if (index === 0) questionDiv.classList.add('active');

        questionDiv.innerHTML = `
            <div class="question">${index + 1}. ${question.question}</div>
            <div class="identification-input" style="display:flex;gap:8px;align-items:center;">
                <input type="text" id="input-${index}" data-q="${index}" autocomplete="off" placeholder="Type your answer..." value="${currentAnswers[index] || ''}" oninput="handleInput(${index})" />
                <button type="button" class="send-btn" id="send-${index}" onclick="sendAnswer(${index})" aria-label="Send answer" style="background:none;border:none;cursor:pointer;padding:0 6px;display:flex;align-items:center;">
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 24 24'><path fill='var(--accent)' d='M2.01 21 23 12 2.01 3 2 10l15 2-15 2z'/></svg>
                </button>
            </div>
            <div class="feedback" id="feedback-${index}" aria-live="polite"></div>
        `;
        quizContainer.appendChild(questionDiv);
    });
    // Restore any previous answers (when resetting or revisiting)
    quizOrder.forEach((qIdx, index) => {
        if (currentAnswers[index] && currentAnswers[index] !== "") {
            const input = document.getElementById(`input-${index}`);
            if (input) input.value = currentAnswers[index];
        }
    });
    // Hide score page if visible
    const scorePage = document.getElementById('scorePage');
    if (scorePage) scorePage.style.display = 'none';
    updateNavigation();
}

// For identification: handle input and update answer
function handleInput(questionIndex) {
    const input = document.getElementById(`input-${questionIndex}`);
    currentAnswers[questionIndex] = input.value;
    // Remove feedback and enable input until send is pressed
    const feedbackEl = document.getElementById(`feedback-${questionIndex}`);
    feedbackEl.textContent = '';
    input.classList.remove('correct', 'wrong');
    updateNavigation();
}

function sendAnswer(questionIndex) {
    const input = document.getElementById(`input-${questionIndex}`);
    const feedbackEl = document.getElementById(`feedback-${questionIndex}`);
    const qIdx = quizOrder[questionIndex];
    const userAnswer = input.value.trim().toLowerCase();
    // Accept multiple correct answers for specific questions
    let correctAnswers = [quizData[qIdx].answer.trim().toLowerCase()];
    // BALANCE SHEET
    if (correctAnswers[0] === 'balance sheet') {
        correctAnswers.push('balance sheets');
    }
    // CAPACITY-ASSOCIATED COSTS
    if (correctAnswers[0] === 'capacity-associated costs') {
        correctAnswers.push('capacity associated costs', 'capacity associated cost', 'capacity-associated cost');
    }
    // MAINTENANCE, REPAIR, AND OPERATING (MRO) SUPPLIES
    if (correctAnswers[0] === 'maintenance, repair, and operating (mro) supplies') {
        correctAnswers.push('mro supplies', 'mro');
    }
    // MAINTENANCE, REPAIR, AND OPERATING SUPPLIES
    if (correctAnswers[0] === 'maintenance, repair, and operating supplies') {
        correctAnswers.push('mro');
    }
    // SUPPLY AND DEMAND PATTERNS
    if (correctAnswers[0] === 'supply and demand patterns') {
        correctAnswers.push('supply and demand pattern');
    }
    // WORK-IN-PROCESS
    if (correctAnswers[0] === 'work-in-process') {
        correctAnswers.push('work-in-process (wip)', 'work in process');
    }
    // FLUCTUATION INVENTORY
    if (correctAnswers[0] === 'fluctuation inventory') {
        correctAnswers.push('fluctuation inventory (safety stock)');
    }
    if (userAnswer !== "") {
        input.disabled = true;
        if (correctAnswers.includes(userAnswer)) {
            feedbackEl.textContent = 'Correct!';
            feedbackEl.style.color = '#2e7d32';
            input.classList.add('correct');
        } else {
            feedbackEl.textContent = `Incorrect. Correct answer: ${quizData[qIdx].answer}`;
            feedbackEl.style.color = '#c62828';
            input.classList.add('wrong');
        }
        setTimeout(() => {
            if (questionIndex < quizData.length - 1) {
                const questions = document.querySelectorAll('.question-container');
                questions[questionIndex].classList.remove('active');
                currentQuestion = questionIndex + 1;
                questions[currentQuestion].classList.add('active');
                updateNavigation();
                // Focus the next input if not already answered
                const nextInput = document.getElementById(`input-${currentQuestion}`);
                if (nextInput && !nextInput.disabled) nextInput.focus();
            }
            // Always update navigation after answer, so submit button logic is correct
            updateNavigation();
        }, 500);
    } else {
        feedbackEl.textContent = '';
        updateNavigation();
    }
}

function checkAnswers() {
    let score = 0;
    const questions = document.querySelectorAll('.question-container');

    questions.forEach((question, index) => {
        const input = question.querySelector('input[type="text"]');
        const userAnswer = (input ? input.value.trim().toLowerCase() : "");
        const qIdx = quizOrder[index];
        const correctAnswer = quizData[qIdx].answer.trim().toLowerCase();
        input.disabled = true;
        const feedbackEl = document.getElementById(`feedback-${index}`);
        if (userAnswer === correctAnswer) {
            score++;
            feedbackEl.textContent = 'Correct!';
            feedbackEl.style.color = '#2e7d32';
        } else {
            feedbackEl.textContent = `Incorrect. Correct answer: ${quizData[qIdx].answer}`;
            feedbackEl.style.color = '#c62828';
        }
    });

    // Hide all questions
    questions.forEach(q => q.style.display = 'none');

    // Show score page
    let scorePage = document.getElementById('scorePage');
    if (!scorePage) {
        scorePage = document.createElement('div');
        scorePage.id = 'scorePage';
        scorePage.className = 'score-page';
        document.getElementById('quiz').appendChild(scorePage);
    }
    scorePage.style.display = 'flex';

    const percentage = (score / quizData.length) * 100;
    scorePage.style.backgroundColor = percentage >= 70 ? '#c8e6c9' : '#ffcdd2';
    let extraMsg = '';
    if (percentage === 100) {
        extraMsg = 'iloveyoumoree baby koo galing galing talaga';
    } else if (percentage > 80) {
        extraMsg = 'kunti nalang ma perfect mo po yan baby ko';
    } else if (percentage >= 75) {
        extraMsg = 'galing naman ng baby kooo';
    } else if (percentage >= 50) {
        extraMsg = 'kaya mo yan baby';
    }
    // Animated score counter
    scorePage.innerHTML = `<div class="score-counter" id="scoreCounter">0 / ${quizData.length}</div>`
        + `<div style="font-weight:700;font-size:1.2rem;margin-bottom:8px;">(${percentage.toFixed(2)}%)</div>`
        + (extraMsg ? `<div class="encouragement">${extraMsg}</div>` : '')
        + `<button class="retry-btn" onclick="resetQuiz()" style="margin-top:18px;display:inline-block;">Try Again</button>`;
    animateScoreCounter(score, quizData.length);
    // Confetti effect for perfect score
    if (percentage === 100) {
        showConfetti();
    }
    // Hide navigation
    document.querySelector('.submit-btn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('prevBtn').style.display = 'none';
}

// Animated score counter
function animateScoreCounter(finalScore, total) {
    const counterEl = document.getElementById('scoreCounter');
    let current = 0;
    const duration = 900;
    const step = Math.max(1, Math.floor(finalScore / 30));
    const interval = Math.max(18, Math.floor(duration / (finalScore || 1)));
    function update() {
        if (current < finalScore) {
            current += step;
            if (current > finalScore) current = finalScore;
            counterEl.textContent = `${current} / ${total}`;
            setTimeout(update, interval);
        } else {
            counterEl.textContent = `${finalScore} / ${total}`;
        }
    }
    update();
}

// Confetti effect
function showConfetti() {
    let confetti = document.querySelector('.confetti');
    if (!confetti) {
        confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.position = 'fixed';
        confetti.style.top = '0';
        confetti.style.left = '0';
        confetti.style.width = '100vw';
        confetti.style.height = '100vh';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
    }
    confetti.innerHTML = '';
    const colors = ['#2563eb', '#16a34a', '#dc2626', '#fbbf24', '#a21caf', '#0ea5e9'];
    for (let i = 0; i < 40; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.position = 'absolute';
        piece.style.width = '12px';
        piece.style.height = '18px';
        piece.style.borderRadius = '3px';
        piece.style.opacity = '0.85';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.top = '-24px';
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.animation = 'confetti-fall 2.2s linear forwards';
        piece.style.animationDelay = (Math.random() * 1.2) + 's';
        confetti.appendChild(piece);
    }
    setTimeout(() => { if (confetti) confetti.innerHTML = ''; }, 2600);
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        const questions = document.querySelectorAll('.question-container');
        questions[currentQuestion].classList.remove('active');
        currentQuestion++;
        questions[currentQuestion].classList.add('active');
        updateNavigation();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        const questions = document.querySelectorAll('.question-container');
        questions[currentQuestion].classList.remove('active');
        currentQuestion--;
        questions[currentQuestion].classList.add('active');
        updateNavigation();
    }
}


function updateNavigation() {
  const prevBtn = document.getElementById('prevBtn');
  const submitBtn = document.querySelector('.submit-btn');
  const counter = document.getElementById('questionCounter');
  const progress = document.getElementById('progress');

  prevBtn.disabled = currentQuestion === 0;

  // Only show submit button on last question and only enable if last input is disabled (answer submitted)
  let showSubmit = false;
  let enableSubmit = false;
  if (currentQuestion === quizData.length - 1) {
    const lastInput = document.getElementById(`input-${currentQuestion}`);
    if (lastInput) {
      showSubmit = true;
      enableSubmit = lastInput.disabled && lastInput.value.trim() !== "";
    }
  }
  if (showSubmit) {
    submitBtn.style.display = 'block';
    submitBtn.disabled = !enableSubmit;
  } else {
    submitBtn.style.display = 'none';
  }

  counter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  progress.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
  // Hide next button if present
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.style.display = 'none';
  prevBtn.style.display = 'block';
}

function resetQuiz() {
    // Shuffle question order for new try
    quizOrder = Array.from({length: quizData.length}, (_, i) => i);
    shuffleArray(quizOrder);
    currentAnswers = new Array(quizData.length).fill("");
    currentQuestion = 0;
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    createQuiz();

    // Hide score page if present
    const scorePage = document.getElementById('scorePage');
    if (scorePage) scorePage.style.display = 'none';

    document.querySelector('.submit-btn').style.display = 'none';
    // Hide all retry buttons except the one on score page
    document.querySelectorAll('.retry-btn').forEach(btn => btn.style.display = 'none');
    document.getElementById('nextBtn').style.display = 'block';
    document.getElementById('prevBtn').style.display = 'block';
    // Remove confetti if present
    const confetti = document.querySelector('.confetti');
    if (confetti) confetti.remove();
    updateNavigation();
}

// Initialize the quiz when the page loads
window.onload = function() {
    quizOrder = Array.from({length: quizData.length}, (_, i) => i);
    shuffleArray(quizOrder);
    currentAnswers = new Array(quizData.length).fill("");
    createQuiz();
};
