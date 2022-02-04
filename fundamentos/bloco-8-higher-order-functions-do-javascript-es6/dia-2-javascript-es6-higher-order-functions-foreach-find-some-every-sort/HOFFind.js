const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;

/**
 * Um número é divisível por 5 quando o resto é igua a 0 ( numero % 5)
 * 1 perguntar
 * no caso de sim colocar no Novo array o 1 número
 * no caso de não (Para)
 * 
 */
/*Agora vamos olhar para a segunda solução. Tudo o que você precisa fazer é chamar a função forEach no array e passar para ela a função que você criou. E mais nada! Esse é o poder da função forEach . :usando_óculos_escuros:
Ainda não está convencido? Então vamos a mais um exemplo. Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.
Primeiro, usando for e if :*/
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let numeroDivPor5;
    for(let i = 0; i < numbers.length; i +=1){
        if(numbers[i] % 5 === 0) {
            numeroDivPor5 = numbers[i];
            break;
        }
    }
    console.log(numeroDivPor5);
    /*Agora a mesma coisa usando o array.find*/
    numeroDivPor5 = numbers.find((itemAtual) => itemAtual%5 === 0);
    console.log(numeroDivPor5);
    numeroDivPor5 = numbers.find((itemAtual) => itemAtual > 30);
    console.log(numeroDivPor5);









