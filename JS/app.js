function checkAnswer(correct) {
    const feedback = document.getElementById("feedback");

    if (correct) {
        feedback.innerText = "Correct!";
    } else {
        feedback.innerText = "Wrong!";
    }
}