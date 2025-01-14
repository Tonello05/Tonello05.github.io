const players = [
    { name: "Player 1", image: "ruggio", stats: "Partite: 1\n\nGoals: 0" },
    { name: "Player 2", image: "zaghe", stats: "Partite: 4\n\nGoals: 8\n\nPremio fairplay" },
    { name: "Player 3", image: "jordan", stats: "Partite: 4\n\nGoals: 15" },
    { name: "Player 4", image: "jack", stats: "Partite: 0\n\nGoals: 0" },
    { name: "Player 5", image: "paul", stats: "Partite: 2\n\nGoals: 1" },
    { name: "Player 6", image: "vigna", stats: "Partite: 1\n\nGoals: 5" },
    { name: "Player 7", image: "massimo", stats: "Partite: 2\n\nGoals: 0\n\nespulsioni: 1" },
    { name: "Player 8", image: "maugeri", stats: "Partite: 0\n\nGoals: 0" },
    { name: "Player 9", image: "daniele", stats: "Partite: 0\n\nGoals: 0" },
    { name: "Player 10", image: "logatto", stats: "Partite: 3\n\nGoals: 3" },
    { name: "Player 11", image: "damiano", stats: " Partite: 4\n\nGoals: 6\n\nautogol: 1" },
    { name: "Player 14", image: "fernando", stats: "Partite: 1\n\nGoals: 0" },
    { name: "Player 15", image: "bruscia", stats: "Partite: 0\n\nGoals: 0" },
    { name: "achille", image: "achille", stats: "Partite: 0\n\nGoals: 0" },
    { name: "Borghi", image: "Borghi", stats: "Partite: 1\n\nGoals: 6" },
    { name: "Player 16", image: "lore_morelli", stats: "Partite: 4\n\nGoals: 10" },
    { name: "Player 17", image: "toia", stats: "Partite: 2\n\nGoals: 4" },
    { name: "Player 18", image: "scara", stats: "Partite: 0\n\nGoals: 0" },
    { name: "Player 19", image: "kappa", stats: "Partite: 3\n\noals: 3" },
    { name: "Player 20", image: "chri", stats: "Partite: 1\n\nGoals: 7" },
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
