const nextBtn = document.getElementById('next-btn');
const absentBtn = document.getElementById('absent-btn');
const currentTokenDisplay = document.getElementById('current-token');
const totalAppearedDisplay = document.getElementById('total-appeared');
const summarySection = document.getElementById('summary');

let currentToken = 1;
let totalAppeared = 0;
const maxToken = 30;
let absentTokens = [];
let appearedTokens = new Set();

function updateTokenDisplay() {
    currentTokenDisplay.textContent = currentToken;
}

function finishTokens() {
    totalAppearedDisplay.textContent = totalAppeared;
    summarySection.style.display = 'block';
    nextBtn.disabled = true;
    absentBtn.disabled = true;
}

nextBtn.addEventListener('click', function () {
    if (!absentTokens.includes(currentToken)) {
        appearedTokens.add(currentToken);
        totalAppeared++;
    }

    if (currentToken < maxToken) {
        currentToken++;
    } else if (absentTokens.length > 0) {
        currentToken = absentTokens.shift();
    } else {
        finishTokens();
        return;
    }

    updateTokenDisplay();
});

absentBtn.addEventListener('click', function () {
    absentTokens.push(currentToken);

    if (currentToken < maxToken) {
        currentToken++;
    } else if (absentTokens.length > 0) {
        currentToken = absentTokens.shift();
    } else {
        finishTokens();
        return;
    }

    updateTokenDisplay();
});
