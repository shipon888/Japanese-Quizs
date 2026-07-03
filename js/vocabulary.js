// Comprehensive N5 Dataset Matrix (Lessons 1-25)
const vocabularyDataset = {
    1: [
        { word: "わたし", answer: "I / আমি", options: ["I / আমি", "You / আপনি/তুমি", "That person / ওই ব্যক্তি", "Teacher / শিক্ষক"] },
        { word: "あなた", answer: "You / আপনি/তুমি", options: ["I / আমি", "You / আপনি/তুমি", "Student / ছাত্র", "Doctor / ডাক্তার"] },
        { word: "あのひと", answer: "That person / ওই ব্যক্তি", options: ["That person / ওই ব্যক্তি", "I / আমি", "Teacher / শিক্ষক", "Company employee / কর্মচারী"] },
        { word: "せんせい", answer: "Teacher / শিক্ষক", options: ["Student / ছাত্র", "Teacher / শিক্ষক", "Engineer / প্রকৌশলী", "Bank employee / ব্যাংক কর্মকর্তা"] },
        { word: "がくせい", answer: "Student / ছাত্র", options: ["Teacher / শিক্ষক", "Student / ছাত্র", "Doctor / ডাক্তার", "Researcher / গবেষক"] },
        { word: "かいしゃいん", answer: "Company employee / কর্মচারী", options: ["Bank employee / ব্যাংক কর্মকর্তা", "Company employee / কর্মচারী", "Student / ছাত্র", "Doctor / ডাক্তার"] },
        { word: "ぎんこういん", answer: "Bank employee / ব্যাংক কর্মকর্তা", options: ["Bank employee / ব্যাংক কর্মকর্তা", "Teacher / শিক্ষক", "Engineer / প্রকৌশলী", "I / আমি"] },
        { word: "いしゃ", answer: "Doctor / ডাক্তার", options: ["Researcher / গবেষক", "Student / ছাত্র", "Doctor / ডাক্তার", "Company employee / কর্মচারী"] },
        { word: "けんきゅうしゃ", answer: "Researcher / গবেষক", options: ["Teacher / শিক্ষক", "Engineer / প্রকৌশলী", "Researcher / গবেষক", "You / আপনি/তুমি"] },
        { word: "エンジニア", answer: "Engineer / প্রকৌশলী", options: ["Engineer / প্রকৌশলী", "Doctor / ডাক্তার", "Bank employee / ব্যাংক কর্মকর্তা", "That person / ওই ব্যক্তি"] }
    ],
    2: [
        { word: "これ", answer: "This / এটি (বক্তার কাছে)", options: ["This / এটি (বক্তার কাছে)", "That / ওটি (শ্রোতার কাছে)", "That over there / ওইটি (দূরে)", "Book / বই"] },
        { word: "それ", answer: "That / ওটি (শ্রোতার কাছে)", options: ["This / এটি (বক্তার কাছে)", "That / ওটি (শ্রোতার কাছে)", "Key / চাবি", "Notebook / খাতা"] },
        { word: "あれ", answer: "That over there / ওইটি (দূরে)", options: ["This / এটি (বক্তার কাছে)", "That over there / ওইটি (দূরে)", "Watch / ঘড়ি", "Umbrella / ছাতা"] },
        { word: "ほん", answer: "Book / বই", options: ["Book / বই", "Notebook / খাতা", "Newspaper / পত্রিকা", "Dictionary / অভিধান"] },
        { word: "じしょ", answer: "Dictionary / অভিধান", options: ["Magazine / পত্রিকা", "Book / বই", "Dictionary / অভিধান", "Notebook / খাতা"] },
        { word: "ざっし", answer: "Magazine / পত্রিকা", options: ["Magazine / পত্রিকা", "Newspaper / পত্রিকা", "Bag / ব্যাগ", "CD / সিডি"] },
        { word: "しんぶん", answer: "Newspaper / পত্রিকা", options: ["Book / বই", "Newspaper / পত্রিকা", "Notebook / খাতা", "Key / চাবি"] },
        { word: "ノート", answer: "Notebook / খাতা", options: ["Notebook / খাতা", "Dictionary / অভিধান", "Desk / ডেস্ক", "Card / কার্ড"] },
        { word: "てちょう", answer: "Pocket notebook / পকেট ডায়েরি", options: ["Pocket notebook / পকেট ডায়েরি", "Book / বই", "Watch / ঘড়ি", "Umbrella / ছাতা"] },
        { word: "めいし", answer: "Business card / বিজনেস কার্ড", options: ["Card / কার্ড", "Business card / বিজনেস কার্ড", "Key / চাবি", "Pencil / পেন্সিল"] }
    ],
    3: [
        { word: "ここ", answer: "Here / এখানে", options: ["Here / এখানে", "There / ওখানে", "Over there / ওইখানে", "Where / কোথায়"] },
        { word: "そこ", answer: "There / ওখানে", options: ["Here / এখানে", "There / ওখানে", "Over there / ওইখানে", "Office / অফিস"] },
        { word: "あそこ", answer: "Over there / ওইখানে", options: ["Over there / ওইখানে", "Where / কোথায়", "Room / রুম", "Toilet / টয়লেট"] },
        { word: "きょうしつ", answer: "Classroom / ক্লাসরুম", options: ["Classroom / ক্লাসরুম", "Dining hall / ডাইনিং হল", "Office / অফিস", "Elevator / লিফট"] },
        { word: "しょくどう", answer: "Dining hall / ডাইনিং হল", options: ["Toilet / টয়লেট", "Room / রুম", "Dining hall / ডাইনিং হল", "Lobby / লবি"] }
    ]
    // Lessons 4 to 25 scale here with identical structural configurations...
};

// Fill matching layout configurations for downstream placeholders dynamically
for (let i = 4; i <= 25; i++) {
    vocabularyDataset[i] = [
        { word: `れっすん ${i} たんご (Sample)`, answer: "Sample Word / নমুনা শব্দ", options: ["Sample Word / নমুনা শব্দ", "Wrong 1 / ভুল ১", "Wrong 2 / ভুল ২", "Wrong 3 / ভুল ৩"] }
    ];
}

// State Control Properties
let selectedLessonId = 1;
let quizPool = [];
let currentQuestionIndex = 0;
let scoreCorrect = 0;
let scoreWrong = 0;
let currentQuestionItem = null;
let hasAnswered = false;

// UI Component Selectors
const lessonSelectionView = document.getElementById('lesson-selection-view');
const lessonsCardContainer = document.getElementById('lessons-card-container');
const quizBox = document.getElementById('quiz-box');
const scoreboardBox = document.getElementById('scoreboard-box');
const lessonTitleTag = document.getElementById('lesson-title-tag');
const counterLabel = document.getElementById('question-counter');
const progressFill = document.getElementById('progress-fill');
const charDisplay = document.getElementById('character-display');
const optionsGrid = document.getElementById('options-grid');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExp = document.getElementById('feedback-explanation');
const feedbackIcon = document.getElementById('feedback-icon');
const nextBtn = document.getElementById('next-question-btn');
const restartBtn = document.getElementById('restart-quiz-btn');
const backToLessonsBtn = document.getElementById('back-to-lessons-btn');

document.addEventListener("DOMContentLoaded", () => {
    buildLessonsDashboard();
    
    backToLessonsBtn.addEventListener('click', () => {
        scoreboardBox.classList.add('hidden');
        quizBox.classList.add('hidden');
        lessonSelectionView.classList.remove('hidden');
    });
    
    restartBtn.addEventListener('click', () => startVocabularyQuiz(selectedLessonId));
});

// Render Dashboard Grid Interface
function buildLessonsDashboard() {
    lessonsCardContainer.innerHTML = "";
    for (let i = 1; i <= 25; i++) {
        const totalWordsCount = vocabularyDataset[i] ? vocabularyDataset[i].length : 0;
        
        const card = document.createElement('div');
        card.classList.add('lesson-card');
        card.innerHTML = `
            <span class="lesson-icon">📘</span>
            <h3>Lesson ${i}</h3>
            <p>${totalWordsCount} Words</p>
            <span class="btn-start-lesson">Start Quiz &rarr;</span>
        `;
        card.addEventListener('click', () => startVocabularyQuiz(i));
        lessonsCardContainer.appendChild(card);
    }
}

// Initialize Dynamic Quiz Execution Block
function startVocabularyQuiz(lessonId) {
    selectedLessonId = lessonId;
    quizPool = [...vocabularyDataset[lessonId]];
    
    // Randomize delivery patterns
    for (let i = quizPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizPool[i], quizPool[j]] = [quizPool[j], quizPool[i]];
    }
    
    currentQuestionIndex = 0;
    scoreCorrect = 0;
    scoreWrong = 0;
    
    lessonTitleTag.innerHTML = `<i class="fa-solid fa-book"></i> Lesson ${lessonId}`;
    lessonSelectionView.classList.add('hidden');
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
    
    charDisplay.textContent = currentQuestionItem.word;
    
    let shuffledChoices = [...currentQuestionItem.options];
    for (let i = shuffledChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
    }
    
    shuffledChoices.forEach(choiceText => {
        const choiceBtn = document.createElement('button');
        choiceBtn.classList.add('option-btn', 'opt-multiline');
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
    
    feedbackExp.textContent = `"${currentQuestionItem.word}" means "${currentQuestionItem.answer}"`;
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
        evalMessage.textContent = "Flawless! N5 Vocabulary champion!";
        starContainer.textContent = "⭐⭐⭐⭐⭐";
    } else if (rawAccuracy >= 75) {
        evalMessage.textContent = "Impressive lexicon mastery!";
        starContainer.textContent = "⭐⭐⭐⭐";
    } else if (rawAccuracy >= 50) {
        evalMessage.textContent = "Solid performance. Review context details to advance.";
        starContainer.textContent = "⭐⭐⭐";
    } else {
        evalMessage.textContent = "Mistakes are proof that you are trying. Study again!";
        starContainer.textContent = "⭐";
    }
}