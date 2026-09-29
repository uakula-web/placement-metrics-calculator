document.getElementById('calc-btn').addEventListener('click', function() {
    // 1. Fetch values from user input fields safely
    const currentSolved = parseInt(document.getElementById('current-solved').value) || 0;
    const dailyTarget = parseInt(document.getElementById('daily-target').value) || 0;
    const daysRemaining = parseInt(document.getElementById('days-remaining').value) || 0;

    // 2. Execute metric mathematics calculations
    const projectedNewSolves = dailyTarget * daysRemaining;
    const finalTotal = currentSolved + projectedNewSolves;

    // 3. Update the DOM interface to display output data
    const resultBox = document.getElementById('result-box');
    const totalOutput = document.getElementById('total-output');
    const statusBadge = document.getElementById('status-badge');

    totalOutput.textContent = `Projected Solves: ${finalTotal} Problems`;
    resultBox.style.display = 'block';

    // 4. Calculate automated logic badges for recruiters to scan
    if (finalTotal >= 250) {
        statusBadge.textContent = "🔥 Elite Bracket Verified";
        statusBadge.style.backgroundColor = "#dcfce7";
        statusBadge.style.color = "#15803d";
    } else {
        statusBadge.textContent = "⚡ Placement Standard";
        statusBadge.style.backgroundColor = "#fef9c3";
        statusBadge.style.color = "#a16207";
    }
});
