const readline = require ('readline');
/*---isso faz operação de entrada e saída de dados---*/

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/*---isso faz operação de entrada e saída de dados---*/

rl.question("Digite sua idade: ",(resposta) =>{


let idade = Number.parseInt(resposta);

if (idade < 16){
    console.log("Não vota");
} else if ((idade >= 16 && idade < 18) || (idade > 65)){
    console.log("Voto opcional");
} else {
    console.log("Voto obrigatório");
}

rl.close();

});

/*---isso faz operação de entrada e saída de dados---*/