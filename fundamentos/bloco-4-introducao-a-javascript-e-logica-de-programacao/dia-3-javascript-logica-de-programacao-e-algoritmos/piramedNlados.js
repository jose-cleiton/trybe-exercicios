
let size = 10;
let symbol = ' ^';

let meioDaPiramid = (size +1)/2
let text = " ";
let espacoEmBranco=size;

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    if (lineIndex==1) {
         console.log(text.repeat(espacoEmBranco) + symbol)

    }
   
    if(lineIndex>=2){
       espacoEmBranco-=1;
       console.log(text.repeat(espacoEmBranco) + symbol.repeat(lineIndex))

    }



};






/*

12345*
1234*6*
123*4*6*
12*4*6*8*
1*3*5*7*9*

*/