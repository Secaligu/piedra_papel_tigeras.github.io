let playerscore =0;
let computerscore =0;

function play(choices){
    const choices = ['papel', 'piedra', 'tijeras'];
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    const resultDiv = document.getElementById('result')

    if (choice === computerChoice){
        resultDiv.textContent = 'empate! ambos eligieron:', choice;

    } else if(
        (choice === 'piedra' && computerChoice === 'tigeras') ||
        (choice === 'tijeras' && computerChoice === 'papel') ||
        (choice === 'papel' && computerChoice === 'piedra') 
    ){
        playerscore++;
        resultDiv.textContent = 'Ganaste'
    } else {
      computerscore++;
      resultDiv.textContent = 'perdiste D:'
    }
    document.getElementById('player-score').textContent = playerscore;
    document.getElementById('computer-score').textContent = computerscore;
}