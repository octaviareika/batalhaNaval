// colocar as funções de tabuleiro aqui

export default function exibeTab(tabuleiro, mascara){
    for (let i = 0; i < tabuleiro.length; i++) {
        console.log('| ' + tabuleiro[i].join(' | ') + ' |'); // join = separa os elementos do array por um caracter
        console.log('-----------------------------------------'); // linha separadora
    }
}