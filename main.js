function menuInicial(){

    let opcao = 0;

    while (opcao < 1 || opcao > 2){
        console.log("Bem vindo(a) ao jogo!!")
        console.log("1 - Iniciar jogo");    
        console.log("2 - Sair");

        const prompt = require("prompt-sync")(); // instancar o prompt-sync
        opcao = parseInt(prompt());
        
        switch (opcao){
            case 1:
                console.log("Iniciar jogo");
                jogo(); // Chama a função jogo
                break;
            case 2:

                console.log("Sair");
                break;

            default:
                console.log("Opção inválida");
                break;
        }
    }

}

function jogo(){
    let tabuleiro = new Array(10);
    for (let i = 0; i < 10; i++){
        tabuleiro[i] = new Array(10);
        tabuleiro[i].fill('A');
    }

    for (let i = 0; i < tabuleiro.length; i++) {
        console.log('| ' + tabuleiro[i].join(' | ') + ' |'); // join = separa os elementos do array por um caracter
        console.log('-----------------------------------------'); // linha separadora
    }
   
    

   // console.log(tabuleiro);
}

menuInicial(); // Chama a função menuInicial
