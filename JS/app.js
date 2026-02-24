// ========================
// CodeLingo - Next Level
// ========================

const questions = {
    cpp: [
      { q: "What is the correct syntax to declare an integer?", options: ["int x = 5;", "x int = 5;", "integer x = 5;", "var x = 5;"], answer: 0, explanation: "C++ uses typed variables: int x = 5;" },
      { q: "Which symbol ends a statement in C++?", options: [";", ":", ".", ","], answer: 0, explanation: "Most C++ statements end with a semicolon (;)." },
      { q: "How do you print to console in C++?", options: ["cout << \"Hello\";", "print(\"Hello\");", "console.log(\"Hello\");", "System.out.println(\"Hello\");"], answer: 0, explanation: "C++ uses cout (from <iostream>) to print." },
      { q: "What is the correct way to start the main function?", options: ["int main()", "void main", "main() int", "function main()"], answer: 0, explanation: "The standard entry point is int main()." },
      { q: "Which header is needed for cout?", 
        options: [
          "#include &lt;iostream&gt;", 
          "#include &lt;stdio&gt;", 
          "#include &lt;print&gt;", 
          "#include &lt;o&gt;"
        ], 
        answer: 0, 
        explanation: "cout is defined in iostream."  },
      { q: "How do you declare a constant in C++?", options: ["const int x = 5;", "constant int x = 5;", "final int x = 5;", "static int x = 5;"], answer: 0, explanation: "Use const to make a value read-only." },
      { q: "What does '++' do in C++?", options: ["Increments by 1", "Adds two numbers", "Concatenates strings", "Declares a pointer"], answer: 0, explanation: "++ increases a variable by 1." },
      { q: "Which is a valid C++ comment?", options: ["// comment", "/* comment */", "# comment", "-- comment"], answer: 0, explanation: "C++ supports // and /* */ comments." },
      { q: "How do you declare a pointer?", options: ["int* p;", "pointer int p;", "int p*;", "&int p;"], answer: 0, explanation: "Pointers use * with the type: int* p;" },
      { q: "What keyword is used for inheritance in C++?", options: ["class Child : public Parent", "class Child extends Parent", "class Child inherits Parent", "class Child >> Parent"], answer: 0, explanation: "C++ inheritance uses ':' like class Child : public Parent." }
    ],
    python: [
      { q: "How do you print in Python?", options: ["print(\"Hello\")", "console.log(\"Hello\")", "echo \"Hello\"", "System.out.print(\"Hello\")"], answer: 0, explanation: "Python prints using print()." },
      { q: "How do you declare a variable in Python?", options: ["x = 5", "int x = 5", "var x = 5", "let x = 5"], answer: 0, explanation: "Python uses assignment: x = 5." },
      { q: "What is the correct way to define a function?", options: ["def greet():", "function greet():", "void greet()", "func greet():"], answer: 0, explanation: "Functions start with def and end with a colon." },
      { q: "How do you start a for loop in Python?", options: ["for i in range(10):", "for (i = 0; i < 10; i++)", "for i = 0 to 10:", "loop i in range(10):"], answer: 0, explanation: "Common loop: for i in range(10):" },
      { q: "Which is used to create a list in Python?", options: ["x = [1, 2, 3]", "x = {1, 2, 3}", "x = (1, 2, 3)", "x = <1, 2, 3>"], answer: 0, explanation: "Lists use square brackets [ ]." },
      { q: "How do you check a condition in Python?", options: ["if x == 5:", "if (x == 5)", "if x = 5 then", "when x == 5:"], answer: 0, explanation: "Python uses if and a colon." },
      { q: "Which keyword is used for inheritance?", options: ["class Dog(Animal):", "class Dog extends Animal:", "class Dog : Animal", "class Dog inherits Animal:"], answer: 0, explanation: "Inheritance uses parentheses: class Dog(Animal):" },
      { q: "How do you import a module?", options: ["import math", "include math", "#include math", "using math"], answer: 0, explanation: "Import modules using import." },
      { q: "What does len() return?", options: ["Length of an object", "Last element", "Largest number", "Line count"], answer: 0, explanation: "len(x) returns the number of items in x." },
      { q: "How do you add a comment in Python?", options: ["# comment", "// comment", "/* comment */", "-- comment"], answer: 0, explanation: "Python uses # for comments." }
    ],
    java: [
      { q: "How do you print in Java?", options: ["System.out.println(\"Hi\");", "print(\"Hi\");", "cout << \"Hi\";", "console.log(\"Hi\");"], answer: 0, explanation: "Java prints with System.out.println()." },
      { q: "How do you declare an integer?", options: ["int x = 5;", "x = 5", "var x = 5", "integer x = 5;"], answer: 0, explanation: "Java declares ints with: int x = 5;" },
      { q: "What keyword starts a class?", options: ["class", "Class", "struct", "object"], answer: 0, explanation: "Java uses the keyword class." },
      { q: "How do you define a method?", options: ["public void greet() {}", "function greet() {}", "def greet():", "void greet =>"], answer: 0, explanation: "Methods include return type + name + () + {}." },
      { q: "What is the entry point of a Java program?", options: ["public static void main(String[] args)", "void main()", "int main()", "static main()"], answer: 0, explanation: "Java starts in public static void main(String[] args)." },
      { q: "How do you create an array?", options: ["int[] arr = new int[5];", "int arr[5];", "array int arr = 5;", "var arr = int[5];"], answer: 0, explanation: "Java arrays use new: int[] arr = new int[5];" },
      { q: "Which keyword is used for inheritance?", options: ["extends", "inherits", "implements", "derives"], answer: 0, explanation: "Java uses extends for inheritance." },
      { q: "How do you add a single-line comment?", options: ["// comment", "# comment", "/* comment */", "-- comment"], answer: 0, explanation: "Java uses // for single-line comments." },
      { q: "What is the correct boolean value in Java?", options: ["true", "True", "TRUE", "1"], answer: 0, explanation: "Booleans are lowercase: true/false." },
      { q: "Which keyword creates an object?", options: ["new", "create", "make", "object"], answer: 0, explanation: "Objects are created using new." }
    ],
    javascript: [
      { q: "How do you declare a variable in modern JS?", options: ["let x = 5;", "int x = 5;", "var x: 5;", "variable x = 5;"], answer: 0, explanation: "Modern JS uses let/const, not int." },
      { q: "How do you print to the console?", options: ["console.log(\"Hi\");", "print(\"Hi\");", "System.out.print(\"Hi\");", "echo \"Hi\";"], answer: 0, explanation: "Use console.log() in JavaScript." },
      { q: "How do you define a function?", options: ["function greet() {}", "def greet():", "void greet() {}", "func greet() {}"], answer: 0, explanation: "JS uses function name() {}." },
      { q: "Which is the strict equality operator?", options: ["===", "==", "=", "equals"], answer: 0, explanation: "=== compares without type coercion." },
      { q: "How do you create an arrow function?", options: ["const fn = () => {}", "const fn = function => {}", "fn = () -> {}", "arrow fn = () {}"], answer: 0, explanation: "Arrow functions use => like: () => {}" },
      { q: "How do you add a comment?", options: ["// comment", "# comment", "/* comment */", "-- comment"], answer: 0, explanation: "JS supports // and /* */ comments." },
      { q: "Which creates an array?", options: ["let arr = [];", "let arr = {};", "let arr = ();", "array arr = [];"], answer: 0, explanation: "Arrays use square brackets: []" },
      { q: "What does typeof return for a number?", options: ["\"number\"", "\"int\"", "\"integer\"", "\"num\""], answer: 0, explanation: "typeof 5 returns \"number\"." },
      { q: "How do you select an element by ID?", options: ["document.getElementById(\"id\")", "document.getElement(\"id\")", "document.query(\"#id\")", "document.findById(\"id\")"], answer: 0, explanation: "Use document.getElementById(\"id\")." },
      { q: "Which keyword prevents reassignment?", options: ["const", "final", "let", "static"], answer: 0, explanation: "const prevents reassignment." }
    ]
  };
  
  const langNames = { cpp: "C++", python: "Python", java: "Java", javascript: "JavaScript" };
  
  let currentLang = "cpp";
  let currentQuestions = [];
  let currentIndex = 0;
  
  let score = 0;
  let xp = 0;
  let streak = 0;
  let answered = false;
  
  let qStartTime = 0;
  let speedTimer = null;
  
  const quizCard = document.getElementById("quiz-card");
  const originalCardHTML = quizCard.innerHTML;
  
  function $(id){ return document.getElementById(id); }
  
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  function buildLangTabs() {
    const tabs = $("lang-tabs");
    tabs.innerHTML = "";
  
    Object.keys(langNames).forEach((lang) => {
      const btn = document.createElement("button");
      btn.className = "lang-tab" + (lang === currentLang ? " active" : "");
      btn.type = "button";
      btn.textContent = langNames[lang];
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(lang === currentLang));
      btn.onclick = () => switchLang(lang);
      tabs.appendChild(btn);
    });
  }
  
  function switchLang(lang) {
    currentLang = lang;
    restartQuiz();
  }
  
  function startQuiz() {
    currentQuestions = shuffle(questions[currentLang]).slice(0, 10).map((q) => {
      const indexed = q.options.map((opt, i) => ({ opt, correct: i === q.answer }));
      const shuffled = shuffle(indexed);
  
      return {
        q: q.q,
        options: shuffled.map((x) => x.opt),
        answer: shuffled.findIndex((x) => x.correct),
        explanation: q.explanation || ""
      };
    });
  
    currentIndex = 0;
    score = 0;
    xp = 0;
    streak = 0;
    answered = false;
  
    $("score").textContent = "0";
    $("xp").textContent = "0";
    $("streak").textContent = "0";
  
    const best = Number(localStorage.getItem("bestScore_" + currentLang) || 0);
    $("best-score").textContent = String(best);
  
    $("q-total").textContent = String(currentQuestions.length);
  
    $("next-btn").onclick = nextQuestion;
    $("skip-btn").onclick = skipQuestion;
    $("next-btn").disabled = true;
  
    loadQuestion();
  }
  
  function setProgress() {
    const pct = ((currentIndex + 1) / currentQuestions.length) * 100;
    $("progress-fill").style.width = pct + "%";
  }
  
  function startSpeedClock() {
    qStartTime = performance.now();
    $("bonus-badge").style.display = "none";
  
    if (speedTimer) clearInterval(speedTimer);
    speedTimer = setInterval(() => {
      const s = (performance.now() - qStartTime) / 1000;
      $("speed").textContent = s.toFixed(1) + "s";
    }, 100);
  }
  
  function stopSpeedClock() {
    if (speedTimer) clearInterval(speedTimer);
    speedTimer = null;
  }
  
  function loadQuestion() {
    answered = false;
    $("next-btn").disabled = true;
  
    const q = currentQuestions[currentIndex];
  
    $("question-text").textContent = q.q;
    $("q-counter").textContent = String(currentIndex + 1);
  
    setProgress();
  
    const feedback = $("feedback");
    feedback.innerHTML = "";
    feedback.className = "feedback";
  
    const optionsDiv = $("options");
    optionsDiv.innerHTML = "";
  
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.innerHTML = `<span>${opt}</span><span class="kbd">${i + 1}</span>`;
      btn.onclick = () => checkAnswer(i);
      optionsDiv.appendChild(btn);
    });
  
    startSpeedClock();
  }
  
  function awardXP(isCorrect, seconds) {
    if (isCorrect) xp += 10;
    if (isCorrect && streak > 0 && streak % 5 === 0) xp += 20;
  
    if (isCorrect && seconds <= 3.0) {
      xp += 5;
      $("bonus-badge").style.display = "inline-block";
    }
    $("xp").textContent = String(xp);
  }
  
  function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
  
    stopSpeedClock();
    const elapsed = (performance.now() - qStartTime) / 1000;
  
    const q = currentQuestions[currentIndex];
    const buttons = $("options").querySelectorAll("button");
    const feedback = $("feedback");
  
    buttons.forEach((btn) => (btn.disabled = true));
  
    const isCorrect = selectedIndex === q.answer;
  
    if (isCorrect) {
      score++;
      streak++;
  
      $("score").textContent = String(score);
      $("streak").textContent = String(streak);
  
      awardXP(true, elapsed);
  
      feedback.innerHTML = `✓ Correct! <small>${q.explanation}</small>`;
      feedback.classList.add("ok");
  
      buttons[selectedIndex].classList.add("correct");
    } else {
      streak = 0;
      $("streak").textContent = "0";
  
      awardXP(false, elapsed);
  
      feedback.innerHTML = `✗ Wrong. <small>${q.explanation}</small>`;
      feedback.classList.add("no");
  
      buttons[selectedIndex].classList.add("wrong");
      buttons[q.answer].classList.add("correct", "reveal");
    }
  
    $("next-btn").disabled = false;
    $("next-btn").textContent =
      currentIndex + 1 < currentQuestions.length ? "Next →" : "See Results";
  }
  
  function skipQuestion() {
    if (answered) return;
    streak = 0;
    $("streak").textContent = "0";
    nextQuestion();
  }
  
  function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) showResults();
    else loadQuestion();
  }
  
  function showResults() {
    stopSpeedClock();
  
    const pct = Math.round((score / currentQuestions.length) * 100);
    const prevBest = Number(localStorage.getItem("bestScore_" + currentLang) || 0);
    if (score > prevBest) localStorage.setItem("bestScore_" + currentLang, String(score));
  
    const msg =
      pct === 100 ? "Perfect score! You’re cracked. 🎉" :
      pct >= 70 ? "Strong run. Keep climbing. ✅" :
      pct >= 50 ? "Not bad — consistency wins. 👍" :
      "Lock in and run it back. You got it. 💪";
  
    quizCard.innerHTML = `
      <div class="results-card">
        <h1 class="logo">CodeLingo</h1>
        <h2>Quiz Complete</h2>
  
        <div class="final-score">${score} <span>/ ${currentQuestions.length}</span></div>
  
        <div class="result-row">
          <span class="chip">${langNames[currentLang]}</span>
          <span class="chip">${pct}% correct</span>
          <span class="chip">⭐ XP: ${xp}</span>
        </div>
  
        <p class="muted" style="margin: 6px 0 14px;">${msg}</p>
  
        <div class="actions" style="margin-top:10px;">
          <button class="btn primary" id="play-again">Play Again</button>
          <button class="btn secondary" id="switch-lang">Switch Language</button>
        </div>
      </div>
    `;
  
    if (pct === 100) shootConfetti();
  
    document.getElementById("play-again").onclick = restartQuiz;
    document.getElementById("switch-lang").onclick = () => {
      quizCard.innerHTML = originalCardHTML;
      buildLangTabs();
      startQuiz();
    };
  }
  
  function restartQuiz() {
    quizCard.innerHTML = originalCardHTML;
    buildLangTabs();
    startQuiz();
  }
  
  document.addEventListener("keydown", (e) => {
    const key = e.key;
  
    if (key >= "1" && key <= "4") {
      const idx = Number(key) - 1;
      const btns = $("options")?.querySelectorAll("button");
      if (!btns || idx >= btns.length) return;
      btns[idx].click();
    }
  
    if (key === "Enter") {
      const nextBtn = $("next-btn");
      if (nextBtn && !nextBtn.disabled) nextBtn.click();
    }
  });
  
  // Confetti (no libraries)
  const confettiCanvas = document.getElementById("confetti");
  const ctx = confettiCanvas.getContext("2d");
  
  function resizeConfetti() {
    confettiCanvas.width = window.innerWidth * devicePixelRatio;
    confettiCanvas.height = window.innerHeight * devicePixelRatio;
  }
  window.addEventListener("resize", resizeConfetti);
  resizeConfetti();
  
  function shootConfetti() {
    const pieces = [];
    const W = confettiCanvas.width;
    const H = confettiCanvas.height;
  
    const count = 140;
    for (let i = 0; i < count; i++) {
      pieces.push({
        x: Math.random() * W,
        y: -Math.random() * H * 0.2,
        vx: (Math.random() - 0.5) * 3 * devicePixelRatio,
        vy: (Math.random() * 3 + 2) * devicePixelRatio,
        size: (Math.random() * 6 + 6) * devicePixelRatio,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.2,
        life: 0,
        maxLife: 180 + Math.random() * 60
      });
    }
  
    let frame = 0;
  
    function tick() {
      frame++;
      ctx.clearRect(0, 0, W, H);
  
      for (const p of pieces) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
  
        p.vy += 0.02 * devicePixelRatio;
  
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
  
        const alpha = 1 - (p.life / p.maxLife);
        if (alpha <= 0) continue;
  
        ctx.save();
        ctx.globalAlpha = alpha;
  
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
  
        const hue = (frame * 2 + p.x / devicePixelRatio) % 360;
        ctx.fillStyle = `hsl(${hue}, 85%, 60%)`;
  
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
  
      if (frame < 240) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, W, H);
    }
  
    tick();
  }
  
  // Boot
  buildLangTabs();
  startQuiz();