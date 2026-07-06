// js/mock-test.js

let dynamicPool = [];
let currentIdx = 0;
let correctCount = 0;
let wrongCount = 0;
let answeredState = false;
let examTimer = null;
let totalTimeSeconds = 25 * 60; // 25 Minutes standard for N5 language knowledge

const typeSelector = document.getElementById('exam-type-select');
const setSelector = document.getElementById('exam-set-select');
const startBtn = document.getElementById('start-exam-btn');
const timerDisplay = document.getElementById('exam-timer-display');
const clockSpan = document.getElementById('timer-clock');

const mainQuizBox = document.getElementById('quiz-box');
const finalScoreBox = document.getElementById('scoreboard-box');
const questionText = document.getElementById('character-display');
const answersGrid = document.getElementById('options-grid');
const countLabel = document.getElementById('question-counter');
const fillBar = document.getElementById('progress-fill');

const feedPanel = document.getElementById('feedback-panel');
const feedTitle = document.getElementById('feedback-title');
const feedText = document.getElementById('feedback-explanation');
const feedIcon = document.getElementById('feedback-icon');
const forwardBtn = document.getElementById('next-question-btn');
const retryBtn = document.getElementById('restart-quiz-btn');

startBtn.addEventListener('click', beginMockExam);
forwardBtn.addEventListener('click', advanceQuestion);
retryBtn.addEventListener('click', resetDashboard);

function beginMockExam() {
    const chosenType = typeSelector.value; // 'nat' or 'jlpt'
    const chosenSet = setSelector.value;   // 'set1' to 'set10'
    
    const targetSet = mockTestBank[chosenType][chosenSet];
    
    if (!targetSet || !targetSet.questions || targetSet.questions.length === 0) {
        alert("⚠️ This question set is currently being updated with fresh questions. Please select NAT Set 1 or JLPT Set 1 to test the engine!");
        return;
    }
    
    // Load full standard set matching real exam question counts
    dynamicPool = [...targetSet.questions];
    
    currentIdx = 0;
    correctCount = 0;
    wrongCount = 0;
    
    finalScoreBox.classList.add('hidden');
    mainQuizBox.classList.remove('hidden');
    timerDisplay.style.display = "block";
    
    startExamClock();
    displayQuizItem();
}

function startExamClock() {
    clearInterval(examTimer);
    let timeRemaining = totalTimeSeconds;
    
    examTimer = setInterval(() => {
        timeRemaining--;
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        clockSpan.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeRemaining <= 0) {
            clearInterval(examTimer);
            alert("⏰ Time is up! Let's check your results.");
            finishExam();
        }
    }, 1000);
}

function displayQuizItem() {
    answeredState = false;
    feedPanel.classList.add('hidden');
    answersGrid.innerHTML = "";
    
    let currentItem = dynamicPool[currentIdx];
    countLabel.textContent = `Question ${currentIdx + 1}/${dynamicPool.length}`;
    fillBar.style.width = `${(currentIdx / dynamicPool.length) * 100}%`;
    questionText.innerHTML = `<strong>Q${currentIdx + 1}:</strong> ${currentItem.question}`;
    
    currentItem.options.forEach(optionText => {
        const optBtn = document.createElement('button');
        optBtn.classList.add('option-btn');
        optBtn.textContent = optionText;
        optBtn.style.textAlign = "left";
        optBtn.addEventListener('click', () => assessInput(optBtn, optionText, currentItem));
        answersGrid.appendChild(optBtn);
    });
}

function assessInput(selectedBtn, selectedValue, itemData) {
    if (answeredState) return;
    answeredState = true;
    
    const allButtons = answersGrid.querySelectorAll('.option-btn');
    allButtons.forEach(b => b.disabled = true);
    
    if (selectedValue === itemData.answer) {
        selectedBtn.classList.add('correct-state');
        correctCount++;
        feedIcon.innerHTML = "🎉";
        feedTitle.textContent = "Correct!";
        feedTitle.className = "text-success";
    } else {
        selectedBtn.classList.add('wrong-state');
        wrongCount++;
        feedIcon.innerHTML = "❌";
        feedTitle.textContent = "Incorrect";
        feedTitle.className = "text-danger";
        
        allButtons.forEach(b => {
            if (b.textContent === itemData.answer) b.classList.add('correct-state');
        });
    }
    
    feedText.textContent = itemData.exp;
    feedPanel.classList.remove('hidden');
}

function advanceQuestion() {
    currentIdx++;
    if (currentIdx < dynamicPool.length) {
        displayQuizItem();
    } else {
        clearInterval(examTimer);
        finishExam();
    }
}

function finishExam() {
    fillBar.style.width = "100%";
    mainQuizBox.classList.add('hidden');
    timerDisplay.style.display = "none";
    finalScoreBox.classList.remove('hidden');
    
    document.getElementById('stat-correct').textContent = correctCount;
    document.getElementById('stat-wrong').textContent = wrongCount;
    const finalAccuracy = Math.round((correctCount / dynamicPool.length) * 100) || 0;
    document.getElementById('stat-accuracy').textContent = `${finalAccuracy}%`;
}

function resetDashboard() {
    finalScoreBox.classList.add('hidden');
    mainQuizBox.classList.add('hidden');
    timerDisplay.style.display = "none";
    clearInterval(examTimer);
}
