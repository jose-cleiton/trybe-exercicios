/* Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }.
Fórmulas: 
perimetro = (2*base) + (2*altura)
area = base * altura
Exercício 2 - Crie uma função que, dado um array de números inteiros,
 retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 }



*/

let integerArray =[2,3,4,5,6,7,8,9,10];

function evenAndNumbres(wholeNumbers) {
    
    let numbersIntegers = {
        even :{quantity:0,
               numbers:[]   
                },
        odd :{quantity:0,
            numbers:[]   
             }
    }
   

    for (let element in wholeNumbers) {
       
        if (element%2 === 0) {
            numbersIntegers.even.quantity+=1;
            numbersIntegers.even.numbers.push(element)    
        }
        else {
            numbersIntegers.odd.quantity+=1;
            numbersIntegers.odd.numbers.push(element)
        }

    }
    console.log(numbersIntegers);
  console.table(numbersIntegers);
}        



evenAndNumbres(integerArray)
   // console.log(element, wholeNumbers);

