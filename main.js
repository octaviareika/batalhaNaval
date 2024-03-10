const { exibeTab } = require('./tabuleiro.js');

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
                iniciaTab(); // Chama a função jogo
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

function iniciaTab(){

    let estadoDeJogo = 1; // 1 - jogo em andamento, 0 - jogo finalizado
    
    let tabuleiro = new Array(10);
    for (let i = 0; i < 10; i++){
        tabuleiro[i] = new Array(10);
        tabuleiro[i].fill('A');
    }

   

    // mascara tem q ser igual o tabuleiro 
    let mascara = new Array(10);
    for (let i =0; i < 10; i++){
        mascara[i] = new Array(10);
        mascara[i].fill('*');
    }

    posicionaBarco(tabuleiro); // Chama a função posicionaBarco
    
   
    while (estadoDeJogo  == 1){
        
        
        exibeTab(tabuleiro, mascara); // Chama a função exibeTab

        //console.clear(); // limpa tela


        console.log("Digite uma linha");
        const prompt = require("prompt-sync")(); // lendo linha
        let linha = parseInt(prompt());
        console.log("Digite uma coluna");
        const prompt2 = require("prompt-sync")(); // lendo coluna
        let coluna = parseInt(prompt2());
        

        if (isNaN(coluna) || isNaN(linha)){
            console.log("Digite um número válido!!\n");
            continue;
        }

        if (linha <= 0 || linha > 10 || coluna <= 0 || coluna > 10){
            console.log("Digite um número entre 1 e 10");
            continue;
        }

        coluna = coluna - 1;
        linha = linha - 1;
        mascara[linha][coluna] = tabuleiro[linha][coluna];

    }
    
}

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





menuInicial(); // Chama a função menuInicial
