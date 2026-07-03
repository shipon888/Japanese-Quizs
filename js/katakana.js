// Complete Dataset: All 46 Basic Katakana Characters
const katakanaDataset = [
    { char: "ア", answer: "A (আ)", options: ["A (আ)", "I (ই)", "U (উ)", "E (এ)"] },
    { char: "イ", answer: "I (ই)", options: ["A (আ)", "I (ই)", "U (উ)", "O (ও)"] },
    { char: "ウ", answer: "U (উ)", options: ["KA (কা)", "I (ই)", "U (উ)", "E (এ)"] },
    { char: "エ", answer: "E (এ)", options: ["E (এ)", "O (ও)", "KI (কি)", "A (আ)"] },
    { char: "オ", answer: "O (ও)", options: ["U (উ)", "SA (সা)", "O (ও)", "E (এ)"] },
    { char: "カ", answer: "KA (কা)", options: ["KA (কা)", "KI (কি)", "KU (কু)", "KE (কে)"] },
    { char: "キ", answer: "KI (কি)", options: ["KA (কা)", "KI (কি)", "KO (কো)", "TA (তা)"] },
    { char: "ク", answer: "KU (কু)", options: ["SHI (শি)", "KE (কে)", "KU (কু)", "SU (সু)"] },
    { char: "ケ", answer: "KE (কে)", options: ["KE (কে)", "KO (কো)", "HA (হা)", "NI (নি)"] },
    { char: "コ", answer: "KO (কো)", options: ["O (ও)", "KO (কো)", "MO (মো)", "SO (সো)"] },
    { char: "サ", answer: "SA (সা)", options: ["SA (সা)", "SHI (শি)", "SU (সু)", "SE (সে)"] },
    { char: "シ", answer: "SHI (শি)", options: ["CHI (চি)", "SHI (শি)", "TSU (ৎসু)", "HI (হি)"] },
    { char: "ス", answer: "SU (সু)", options: ["NU (নু)", "RU (রু)", "SU (সু)", "MU (মু)"] },
    { char: "セ", answer: "SE (সে)", options: ["SE (সে)", "SO (সো)", "KE (কে)", "ME (মে)"] },
    { char: "ソ", answer: "SO (সো)", options: ["NO (নো)", "RE (রে)", "SO (সো)", "RO (রো)"] },
    { char: "タ", answer: "TA (তা)", options: ["TA (তা)", "CHI (চি)", "TSU (ৎসু)", "TE (তে)"] },
    { char: "チ", answer: "CHI (চি)", options: ["SHI (শি)", "CHI (চি)", "RA (রা)", "TSU (ৎসু)"] },
    { char: "ツ", answer: "TSU (ৎসু)", options: ["SU (সু)", "TSU (ৎসু)", "NU (নু)", "RU (রু)"] },
    { char: "テ", answer: "TE (তে)", options: ["TE (তে)", "DE (দে)", "HE (হে)", "E (এ)"] },
    { char: "ト", answer: "TO (তো)", options: ["DO (দো)", "SO (সো)", "NO (নো)", "TO (তো)"] },
    { char: "ナ", answer: "NA (না)", options: ["NA (না)", "NI (নি)", "NU (নু)", "NE (নে)"] },
    { char: "ニ", answer: "NI (নি)", options: ["TA (তা)", "HA (হা)", "NI (নি)", "KO (কো)"] },
    { char: "ヌ", answer: "NU (নু)", options: ["NU (নু)", "ME (মে)", "NE (নে)", "WA (ওয়া)"] },
    { char: "ネ", answer: "NE (নে)", options: ["RE (রে)", "WA (ওয়া)", "NE (নে)", "NU (নু)"] },
    { char: "ノ", answer: "NO (নো)", options: ["ME (মে)", "NO (নো)", "SO (সো)", "O (ও)"] },
    { char: "ハ", answer: "HA (হা)", options: ["HA (হা)", "HO (হো)", "MA (মা)", "KE (কে)"] },
    { char: "ヒ", answer: "HI (হি)", options: ["SHI (শি)", "HI (হি)", "PI (পি)", "HE (হে)"] },
    { char: "フ", answer: "FU (ফু)", options: ["HU (হু)", "FU (ফু)", "U (উ)", "MU (মু)"] },
    { char: "ヘ", answer: "HE (হে)", options: ["TE (তে)", "HE (হে)", "E (এ)", "PE (পে)"] },
    { char: "ホ", answer: "HO (হো)", options: ["HA (হা)", "HO (হো)", "MA (মা)", "MO (মো)"] },
    { char: "マ", answer: "MA (মা)", options: ["MA (মা)", "HO (হো)", "MO (মো)", "HA (হা)"] },
    { char: "ミ", answer: "MI (মি)", options: ["MI (মি)", "HI (হি)", "KI (কি)", "NI (নি)"] },
    { char: "ム", answer: "MU (মু)", options: ["SU (সু)", "MU (মু)", "NU (নু)", "BU (বু)"] },
    { char: "メ", answer: "ME (মে)", options: ["NU (নু)", "ME (মে)", "NE (নে)", "NO (নো)"] },
    { char: "モ", answer: "MO (মো)", options: ["MA (মা)", "MO (মো)", "KO (কো)", "WO (ও)"] },
    { char: "ヤ", answer: "YA (ইয়া)", options: ["YA (ইয়া)", "YU (ইউ)", "YO (ইও)", "KA (কা)"] },
    { char: "ユ", answer: "YU (ইউ)", options: ["NU (নু)", "YU (ইউ)", "YO (ইও)", "RU (রু)"] },
    { char: "ヨ", answer: "YO (ইও)", options: ["YO (ইও)", "YA (ইয়া)", "MA (মা)", "HO (হো)"] },
    { char: "ラ", answer: "RA (রা)", options: ["RA (রা)", "CHI (চি)", "RO (রো)", "RU (রু)"] },
    { char: "リ", answer: "RI (রি)", options: ["I (ই)", "RI (রি)", "LI (লি)", "KA (কা)"] },
    { char: "ル", answer: "RU (রু)", options: ["RO (রো)", "RU (রু)", "NU (নু)", "SU (সু)"] },
    { char: "レ", answer: "RE (রে)", options: ["NE (নে)", "WA (ওয়া)", "RE (রে)", "RO (রো)"] },
    { char: "ロ", answer: "RO (রো)", options: ["RU (রু)", "RO (রো)", "O (ও)", "WO (ও)"] },
    { char: "ワ", answer: "WA (ওয়া)", options: ["WA (ওয়া)", "NE (নে)", "RE (রে)", "O (ও)"] },
    { char: "ヲ", answer: "WO (ও)", options: ["O (ও)", "WO (ও)", "MO (মো)", "RO (রো)"] },
    { char: "ン", answer: "N (ন)", options: ["N (ন)", "M (ম)", "SO (সো)", "NO (নো)"] }
];

// Operational Variables
let quizPool = [];
let currentQuestionIndex = 0;
let scoreCorrect = 0;
let scoreWrong = 0;
let currentQuestionItem = null;
let hasAnswered = false;

// DOM Selectors
const quizBox = document.getElementById('quiz-box');
const scoreboardBox = document.getElementById('scoreboard-box');
const charDisplay = document.getElementById('character-display');
const optionsGrid = document.getElementById('options-grid');
const counterLabel = document.getElementById('question-counter');
const progressFill = document.getElementById('progress-fill');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExp = document.getElementById('feedback-explanation');
const feedbackIcon = document.getElementById('feedback-icon');
const nextBtn = document.getElementById('next-question-btn');
const restartBtn = document.getElementById('restart-quiz-btn');

// Initial Setup Hook
document.addEventListener("DOMContentLoaded", initQuiz);

function initQuiz() {
    quizPool = [...katakanaDataset];
    // Fisher-Yates shuffle logic
    for (let i = quizPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizPool[i], quizPool[j]] = [quizPool[j], quizPool[i]];
    }
    
    currentQuestionIndex = 0;
    scoreCorrect = 0;
    scoreWrong = 0;
    
    scoreboardBox.classList.add('hidden');
    quizBox.classList.remove('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    feedbackPanel.classList.add('hidden');
    optionsGrid.innerHTML = "";
    
    currentQuestionItem = quizPool[currentQuestionIndex];
    
    counterLabel.textContent = `Question ${currentQuestionIndex + 1}/${quizPool.length}`;
    const calculatedPercentage = (currentQuestionIndex / quizPool.length) * 100;
    progressFill.style.width = `${calculatedPercentage}%`;
    
    charDisplay.textContent = currentQuestionItem.char;
    
    let shuffledChoices = [...currentQuestionItem.options];
    for (let i = shuffledChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
    }
    
    shuffledChoices.forEach(choiceText => {
        const choiceBtn = document.createElement('button');
        choiceBtn.classList.add('option-btn');
        choiceBtn.textContent = choiceText;
        choiceBtn.addEventListener('click', () => verifySelection(choiceBtn, choiceText));
        optionsGrid.appendChild(choiceBtn);
    });
}

function verifySelection(selectedButton, selectedText) {
    if (hasAnswered) return;
    hasAnswered = true;
    
    const allOptionButtons = optionsGrid.querySelectorAll('.option-btn');
    allOptionButtons.forEach(btn => btn.disabled = true);
    
    const isCorrect = (selectedText === currentQuestionItem.answer);
    
    if (isCorrect) {
        selectedButton.classList.add('correct-state');
        scoreCorrect++;
        
        feedbackIcon.innerHTML = "🎉";
        feedbackTitle.textContent = "Correct!";
        feedbackTitle.className = "text-success";
    } else {
        selectedButton.classList.add('wrong-state');
        scoreWrong++;
        
        feedbackIcon.innerHTML = "❌";
        feedbackTitle.textContent = "Incorrect";
        feedbackTitle.className = "text-danger";
        
        allOptionButtons.forEach(btn => {
            if (btn.textContent === currentQuestionItem.answer) {
                btn.classList.add('correct-state');
            }
        });
    }
    
    feedbackExp.textContent = `Character "${currentQuestionItem.char}" translates to "${currentQuestionItem.answer}"`;
    feedbackPanel.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizPool.length) {
        loadQuestion();
    } else {
        displayFinalScoreboard();
    }
});

function displayFinalScoreboard() {
    progressFill.style.width = "100%";
    quizBox.classList.add('hidden');
    scoreboardBox.classList.remove('hidden');
    
    document.getElementById('stat-correct').textContent = scoreCorrect;
    document.getElementById('stat-wrong').textContent = scoreWrong;
    
    const rawAccuracy = quizPool.length > 0 ? Math.round((scoreCorrect / quizPool.length) * 100) : 0;
    document.getElementById('stat-accuracy').textContent = `${rawAccuracy}%`;
    
    const evalMessage = document.getElementById('score-evaluation-msg');
    const starContainer = document.getElementById('star-rating-container');
    
    if (rawAccuracy === 100) {
        evalMessage.textContent = "Perfect! Katakana Master!";
        starContainer.textContent = "⭐⭐⭐⭐⭐";
    } else if (rawAccuracy >= 80) {
        evalMessage.textContent = "Superb! Foreign loanwords are easy for you!";
        starContainer.textContent = "⭐⭐⭐⭐";
    } else if (rawAccuracy >= 50) {
        evalMessage.textContent = "Good job! A little more study will clear up the rest.";
        starContainer.textContent = "⭐⭐⭐";
    } else {
        evalMessage.textContent = "Keep reviewing! Katakana takes time to stick.";
        starContainer.textContent = "⭐";
    }
}

restartBtn.addEventListener('click', initQuiz);