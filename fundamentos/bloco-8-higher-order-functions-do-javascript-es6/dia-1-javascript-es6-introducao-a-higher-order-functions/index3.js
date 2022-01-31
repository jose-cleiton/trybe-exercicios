const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// 3 - Crie uma HOF que receberá três parâmetros. *** 
//O primeiro será um array de respostas corretas (Gabarito), ***
//o segundo será um array de respostas a serem verificadas (respostas da pessoa
// estudante) ***
// e o terceiro é uma função que checa se as respostas estão corretas e faz 
// a contagem da pontuação final recebida pela pessoa estudante. 
// Ao final a HOF deve retornar o total da contagem de respostas certas.

const funcCallBeck = (certas , respEstudantes) => {
    if (certas === respEstudantes) {
         return 1
    } else  if(respEstudantes === 'N.A') {
        return 0
    }else {
        return - 0.5
    }      
}

const funHOF = (arrRespCorretas, arrRespVerificadas, funcCallBeck) => {
   let total=0
   for (let i in arrRespCorretas){
     const verificar = funcCallBeck(arrRespCorretas[i], arrRespVerificadas[i])
     total += verificar
   } 

   return `O resultado é: ${total}, pontos `

}
let a = funHOF(RIGHT_ANSWERS,STUDENT_ANSWERS, funcCallBeck)

console.log(a);





     


