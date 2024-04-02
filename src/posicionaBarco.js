
function posicionaBarco(tabuleiro){
    
    for (let i = 0; i < 6; i++){
        let linha = Math.floor(Math.random() * 10);
        let coluna = Math.floor(Math.random() * 10);

        if (tabuleiro[linha][coluna] == 'B'){
            i--; // evita repetição de barcos no msm lugar
            continue;
        }
        tabuleiro[linha][coluna] = 'B'; // colocando os barcos no tabuleiro
    }

    
}

module.exports = {posicionaBarco}; // exporta a função posicionaBarco