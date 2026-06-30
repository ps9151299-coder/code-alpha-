let flashcards = [];
let currentIndex = 0;
let showAnswer = false;

async function loadCards() {
    try {
        const res = await fetch("/api/flashcards");
        flashcards = await res.json();

        if (currentIndex >= flashcards.length) {
            currentIndex = 0;
        }

        showCard();
    } catch (err) {
        console.error(err);
    }
}

function updateStats() {

    document.getElementById("totalCards").innerText =
        flashcards.length;

    document.getElementById("currentCard").innerText =
        flashcards.length ? currentIndex + 1 : 0;

    const progress =
        flashcards.length > 0
            ? ((currentIndex + 1) / flashcards.length) * 100
            : 0;

    document.getElementById("progressBar").style.width =
        progress + "%";
}

function showCard() {

    if (flashcards.length === 0) {

        document.getElementById("question").innerText =
            "No Flashcards Yet";

        document.getElementById("answer").innerText = "";

        document.getElementById("answer").style.display =
            "none";

        updateStats();
        return;
    }

    const card = flashcards[currentIndex];

    document.getElementById("question").innerText =
        card.question;

    document.getElementById("answer").innerText =
        card.answer;

    document.getElementById("answer").style.display =
        showAnswer ? "block" : "none";

    updateStats();
}

document.getElementById("showBtn")
.addEventListener("click", () => {

    showAnswer = !showAnswer;

    document.getElementById("answer").style.display =
        showAnswer ? "block" : "none";
});

document.getElementById("nextBtn")
.addEventListener("click", () => {

    if (!flashcards.length) return;

    currentIndex =
        (currentIndex + 1) % flashcards.length;

    showAnswer = false;
    showCard();
});

document.getElementById("prevBtn")
.addEventListener("click", () => {

    if (!flashcards.length) return;

    currentIndex =
        (currentIndex - 1 + flashcards.length)
        % flashcards.length;

    showAnswer = false;
    showCard();
});

document.getElementById("addBtn")
.addEventListener("click", async () => {

    const question =
        document.getElementById("newQuestion").value.trim();

    const answer =
        document.getElementById("newAnswer").value.trim();

    if (!question || !answer) {
        alert("Please enter both question and answer");
        return;
    }

    await fetch("/api/flashcards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question,
            answer
        })
    });

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";

    loadCards();
});

loadCards();