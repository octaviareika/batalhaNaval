

function verificaPonto(tabuleiro, linha, coluna, pontos){
    if (tabuleiro[linha][coluna] == 'B'){
        pontos = pontos + 10;
        
    }
    
    
    return pontos;
}

module.exports = {verificaPonto}; // exporta a função verificaPonto