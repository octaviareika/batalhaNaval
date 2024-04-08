// colocar as funções de tabuleiro aqui

function exibeTab(tabuleiro, mascara){
    console.log('-----------------------------------------'); // linha separadora

    for (let i = 0; i < mascara.length; i++) {
        console.log('| ' + mascara[i].join(' | ') + ' |'); // join = separa os elementos do array por um caracter
        console.log('-----------------------------------------'); // linha separadora
        
    }
    //console.log(mensagem); // exibe a mensagem
}

module.exports = {exibeTab}; // exporta a função exibeTab