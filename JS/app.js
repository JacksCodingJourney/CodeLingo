const questions = {
    cpp: [
        { q: "What is the correct syntax to declare an integer?", options: ["int x = 5;", "x int = 5;", "integer x = 5;", "var x = 5;"], answer: 0 },
        { q: "Which symbol ends a statement in C++?", options: [";", ":", ".", ","], answer: 0 },
        { q: "How do you print to console in C++?", options: ["cout << \"Hello\";", "print(\"Hello\");", "console.log(\"Hello\");", "System.out.println(\"Hello\");"], answer: 0 },
        { q: "What is the correct way to start the main function?", options: ["int main()", "void main", "main() int", "function main()"], answer: 0 },
        { q: "Which header is needed for cout?", options: ["#include <iostream>", "#include <stdio>", "#include <print>", "#include <o>"], answer: 0 },
        { q: "How do you declare a constant in C++?", options: ["const int x = 5;", "constant int x = 5;", "final int x = 5;", "static int x = 5;"], answer: 0 },
        { q: "What does '++' do in C++?", options: ["Increments by 1", "Adds two numbers", "Concatenates strings", "Declares a pointer"], answer: 0 },
        { q: "Which is a valid C++ comment?", options: ["// comment", "/* comment", "# comment", "-- comment"], answer: 0 },
        { q: "How do you declare a pointer?", options: ["int* p;", "pointer int p;", "int p*;", "&int p;"], answer: 0 },
        { q: "What keyword is used for inheritance in C++?", options: ["class Child : public Parent", "class Child extends Parent", "class Child inherits Parent", "class Child >> Parent"], answer: 0 },
    ],
    python: [
        { q: "How do you print in Python?", options: ["print(\"Hello\")", "console.log(\"Hello\")", "echo \"Hello\"", "System.out.print(\"Hello\")"], answer: 0 },
        { q: "How do you declare a variable in Python?", options: ["x = 5", "int x = 5", "var x = 5", "let x = 5"], answer: 0 },
        { q: "What is the correct way to define a function?", options: ["def greet():", "function greet():", "void greet()", "func greet():"], answer: 0 },
        { q: "How do you start a for loop in Python?", options: ["for i in range(10):", "for (i = 0; i < 10; i++)", "for i = 0 to 10:", "loop i in range(10):"], answer: 0 },
        { q: "Which is used to create a list in Python?", options: ["x = [1, 2, 3]", "x = {1, 2, 3}", "x = (1, 2, 3)", "x = <1, 2, 3>"], answer: 0 },
        { q: "How do you check a condition in Python?", options: ["if x == 5:", "if (x == 5)", "if x = 5 then", "when x == 5:"], answer: 0 },
        { q: "Which keyword is used for inheritance?", options: ["class Dog(Animal):", "class Dog extends Animal:", "class Dog : Animal", "class Dog inherits Animal:"], answer: 0 },
        { q: "How do you import a module?", options: ["import math", "include math", "#include math", "using math"], answer: 0 },
        { q: "What does len() return?", options: ["Length of an object", "Last element", "Largest number", "Line count"], answer: 0 },
        { q: "How do you add a comment in Python?", options: ["# comment", "// comment", "/* comment */", "-- comment"], answer: 0 },
    ],
    java: [
        { q: "How do you print in Java?", options: ["System.out.println(\"Hi\");", "print(\"Hi\");", "cout << \"Hi\";", "console.log(\"Hi\");"], answer: 0 },
        { q: "How do you declare an integer?", options: ["int x = 5;", "x = 5", "var x = 5", "integer x = 5;"], answer: 0 },
        { q: "What keyword starts a class?", options: ["class", "Class", "struct", "object"], answer: 0 },
        { q: "How do you define a method?", options: ["public void greet() {}", "function greet() {}", "def greet():", "void greet =>"], answer: 0 },
        { q: "What is the entry point of a Java program?", options: ["public static void main(String[] args)", "void main()", "int main()", "static main()"], answer: 0 },
        { q: "How do you create an array?", options: ["int[] arr = new int[5];", "int arr[5];", "array int arr = 5;", "var arr = int[5];"], answer: 0 },
        { q: "Which keyword is used for inheritance?", options: ["extends", "inherits", "implements", "derives"], answer: 0 },
        { q: "How do you add a single-line comment?", options: ["// comment", "# comment", "/* comment */", "-- comment"], answer: 0 },
        { q: "What is the correct boolean value in Java?", options: ["true", "True", "TRUE", "1"], answer: 0 },
        { q: "Which keyword creates an object?", options: ["new", "create", "make", "object"], answer: 0 },
    ],
    javascript: [
        { q: "How do you declare a variable in modern JS?", options: ["let x = 5;", "int x = 5;", "var x: 5;", "variable x = 5;"], answer: 0 },
        { q: "How do you print to the console?", options: ["console.log(\"Hi\");", "print(\"Hi\");", "System.out.print(\"Hi\");", "echo \"Hi\";"], answer: 0 },
        { q: "How do you define a function?", options: ["function greet() {}", "def greet():", "void greet() {}", "func greet() {}"], answer: 0 },
        { q: "Which is the strict equality operator?", options: ["===", "==", "=", "equals"], answer: 0 },
        { q: "How do you create an arrow function?", options: ["const fn = () => {}", "const fn = function => {}", "fn = () -> {}", "arrow fn = () {}"], answer: 0 },
        { q: "How do you add a comment?", options: ["// comment", "# comment", "/* comment */", "-- comment"], answer: 0 },
        { q: "Which creates an array?", options: ["let arr = [];", "let arr = {};", "let arr = ();", "array arr = [];"], answer: 0 },
        { q: "What does typeof return for a number?", options: ["\"number\"", "\"int\"", "\"integer\"", "\"num\""], answer: 0 },
        { q: "How do you select an element by ID?", options: ["document.getElementById(\"id\")", "document.getElement(\"id\")", "document.query(\"#id\")", "document.findById(\"id\")"], answer: 0 },
        { q: "Which keyword prevents reassignment?", options: ["const", "final", "let", "static"], answer: 0 },
    ]
};

const langNames = { cpp: "C++", python: "Python", java: "Java", javascript: "JavaScript" };

let currentLang = "cpp";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

const originalCardHTML = `
    <h1>CodeLingo</h1>
    <div class="lang-tabs" id="lang-tabs"></div>
    <div class="score-board">
        <span>Score: <strong id="score">0</strong></span>
        <span>Question: <strong id="q-counter">1</strong> / <strong id="q-total">10</strong></span>
    </div>
    <div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width:0%"></div></div>
    <p class="question" id="question-text"></p>
    <div class="options" id="options"></div>
    <p id="feedback"></p>
    <button class="next-btn" id="next-btn" onclick="nextQuestion()">Next Question →</button>
`;

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildLangTabs() {
    const tabs = document.getElementById("lang-tabs");
    tabs.innerHTML = "";
    Object.keys(langNames).forEach(lang => {
        const btn = document.createElement("button");
        btn.className = "lang-tab" + (lang === currentLang ? " active" : "");
        btn.textContent = langNames[lang];
        btn.onclick = () => switchLang(lang);
        tabs.appendChild(btn);
    });
}

function switchLang(lang) {
    currentLang = lang;
    startQuiz();
    buildLangTabs();
}

function startQuiz() {
    currentQuestions = shuffle(questions[currentLang]).slice(0, 10).map(q => {
        const indexed = q.options.map((opt, i) => ({ opt, correct: i === q.answer }));
        const shuffled = shuffle(indexed);
        return {
            q: q.q,
            options: shuffled.map(x => x.opt),
            answer: shuffled.findIndex(x => x.correct)
        };
    });
    currentIndex = 0;
    score = 0;
    answered = false;
    document.getElementById("score").textContent = 0;
    document.getElementById("q-total").textContent = currentQuestions.length;
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];
    document.getElementById("question-text").textContent = q.q;
    document.getElementById("q-counter").textContent = currentIndex + 1;
    document.getElementById("progress-fill").style.width = (currentIndex / currentQuestions.length * 100) + "%";

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
    feedback.className = "";

    document.getElementById("next-btn").style.display = "none";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(i);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = currentQuestions[currentIndex];
    const buttons = document.getElementById("options").querySelectorAll("button");
    const feedback = document.getElementById("feedback");

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.answer) {
        score++;
        document.getElementById("score").textContent = score;
        feedback.textContent = "✓ Correct!";
        feedback.className = "correct";
        buttons[selectedIndex].classList.add("correct");
    } else {
        feedback.textContent = "✗ Wrong!";
        feedback.className = "wrong";
        buttons[selectedIndex].classList.add("wrong");
        buttons[q.answer].classList.add("reveal-correct");
    }

    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";
    nextBtn.textContent = currentIndex + 1 < currentQuestions.length ? "Next Question →" : "See Results";
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) {
        showResults();
    } else {
        loadQuestion();
    }
}

function showResults() {
    const card = document.getElementById("quiz-card");
    const pct = Math.round(score / currentQuestions.length * 100);
    let msg = pct === 100 ? "Perfect score! 🎉" : pct >= 70 ? "Great job! 👍" : pct >= 50 ? "Not bad! Keep practicing." : "Keep studying! You'll get there.";
    card.innerHTML = `
        <div class="results-card">
            <h1>CodeLingo</h1>
            <h2>Quiz Complete!</h2>
            <div class="final-score">${score} <span>/ ${currentQuestions.length}</span></div>
            <p>${msg}</p>
            <p style="color:#888; font-size:14px;">${langNames[currentLang]} — ${pct}% correct</p>
            <button class="restart-btn" onclick="restartQuiz()">Play Again</button>
            <button style="background:#555; margin-top:10px;" onclick="restartAndSwitch()">Switch Language</button>
        </div>
    `;
}

function restartQuiz() {
    document.getElementById("quiz-card").innerHTML = originalCardHTML;
    buildLangTabs();
    startQuiz();
}

function restartAndSwitch() {
    document.getElementById("quiz-card").innerHTML = originalCardHTML;
    buildLangTabs();
    loadQuestion();
}

// Init
buildLangTabs();
startQuiz();