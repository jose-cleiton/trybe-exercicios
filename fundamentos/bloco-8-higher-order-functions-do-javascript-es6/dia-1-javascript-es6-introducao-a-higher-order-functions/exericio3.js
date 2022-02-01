/**
 * 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas 
 * corretas (Gabarito), o segundo será um array de respostas a serem verificadas 
 * (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão 
 * corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF 
 * deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, 
e quando não houver resposta ("N.A") não altera-se a contagem.
 */
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const HOFTotoRespostasCertas = (arrRespCorretas,arrRespASerVerificada,callbeck) => {
    let total =0;
    for(let i in arrRespCorretas){
        const atual = arrRespCorretas[i]
        const verificar = callbeck(arrRespCorretas[i], arrRespASerVerificada[i])
        total += verificar
    }
    return `O resultado é : ${total}, pontos`
}

const callbeckCheck = (arrRespCorretas, arrRespASerVerificada ) => {
   if(arrRespCorretas === arrRespASerVerificada ) {
        return 1
   }else if(arrRespCorretas === "N.A" ){
       return 0
   }else {
       return -0.5
   }
}

let result = HOFTotoRespostasCertas(RIGHT_ANSWERS, STUDENT_ANSWERS, callbeckCheck) 
console.log(result);