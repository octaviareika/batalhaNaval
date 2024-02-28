import { exibeTab } from './tabuleiro.js';

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

    
    exibeTab(tabuleiro, mascara);
   
    console.log("Digite uma linha");
    const prompt = require("prompt-sync")(); // lendo linha
    let linha = parseInt(prompt());
    console.log("Digite uma coluna");
    const prompt2 = require("prompt-sync")(); // lendo coluna
    let coluna = parseInt(prompt2());
   
}





menuInicial(); // Chama a função menuInicial
