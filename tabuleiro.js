// colocar as funções de tabuleiro aqui

function exibeTab(tabuleiro, mascara){
    for (let i = 0; i < mascara.length; i++) {
        console.log('| ' + mascara[i].join(' | ') + ' |'); // join = separa os elementos do array por um caracter
        console.log('-----------------------------------------'); // linha separadora
    }
}

module.exports = {exibeTab}; // exporta a função exibeTab