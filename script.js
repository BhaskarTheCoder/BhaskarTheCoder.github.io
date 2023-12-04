// Initialize vote counts
let trsVotes = 0;
let bjpVotes = 0;
let incVotes = 0;

function vote() {
    // Get selected party from the dropdown
    const partySelect = document.getElementById("partySelect");
    const selectedParty = partySelect.value;

    // Update vote count based on the selected party
    if (selectedParty === "trs") {
        trsVotes++;
    } else if (selectedParty === "bjp") {
        bjpVotes++;
    } else if (selectedParty === "inc") {
        incVotes++;
    }

    // Display real-time vote results
    displayVotes();
}

function displayVotes() {
    const voteResults = document.getElementById("voteResults");
    voteResults.innerHTML = `
        <p>Bharat Rashtra Samithi: ${trsVotes} votes</p>
        <p>Bharatiya Janata Party: ${bjpVotes} votes</p>
        <p>Indian National Congress: ${incVotes} votes</p>
    `;
}
