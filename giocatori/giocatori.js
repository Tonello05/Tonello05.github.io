const players = [
    { name: "Player 1", image: "ruggio", stats: "Goals: 10\nAssists: 5" },
    { name: "Player 2", image: "zaghe", stats: "Goals: 8\nAssists: 3" },
    { name: "Player 3", image: "jordan", stats: "Goals: 6\nAssists: 7" },
    { name: "Player 4", image: "jack", stats: "Goals: 12\nAssists: 2" },
    { name: "Player 5", image: "paul", stats: "Goals: 5\nAssists: 4" },
    { name: "Player 6", image: "vigna", stats: "Goals: 15\nAssists: 1" },
    { name: "Player 7", image: "massimo", stats: "Goals: 9\nAssists: 6" },
    { name: "Player 8", image: "maugeri", stats: "Goals: 7\nAssists: 8" },
    { name: "Player 9", image: "daniele", stats: "Goals: 4\nAssists: 9" },
    { name: "Player 10", image: "logatto", stats: "Goals: 11\nAssists: 3" },
    { name: "Player 11", image: "damiano", stats: "Goals: 13\nAssists: 0" },
    { name: "Player 14", image: "fernando", stats: "Goals: 5\nAssists: 5" },
    { name: "Player 15", image: "bruscia", stats: "Goals: 8\nAssists: 7" },
    { name: "achille", image: "achille", stats: "Goals: 10\nAssists: 2" },
    { name: "Leonardo Rota", image: "rota", stats: "Goals: 3\nAssists: 11" },
    { name: "Player 16", image: "lore_morelli", stats: "Goals: 4\nAssists: 8" },
    { name: "Player 17", image: "toia", stats: "Goals: 6\nAssists: 9" },
    { name: "Player 18", image: "scara", stats: "Goals: 7\nAssists: 4" },
    { name: "Player 19", image: "kappa", stats: "Goals: 5\nAssists: 5" },
    { name: "Player 20", image: "chri", stats: "Goals: 10\nAssists: 3" },
];

function generatePlayerCards() {
    const teams = document.querySelectorAll('.team .players');
    
    players.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="../img_giocherelloni_cards/${player.image}.png" alt="${player.name}" />
                </div>
                <div class="card-back">
                    <pre>${player.stats}</pre>
                </div>
            </div>
        `;
        

        const teamIndex = Math.floor(index / 5); 
        if (teamIndex < teams.length) {
            teams[teamIndex].appendChild(card); 
        }
    });
}

generatePlayerCards();
