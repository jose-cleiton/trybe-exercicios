
let size = 7;
let symbol = ' *';
let text = " ";
let espacoEmBranco=size;

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    
   
    if(lineIndex>=1){
       espacoEmBranco-=1;
       console.log(text.repeat(espacoEmBranco) + symbol.repeat(lineIndex));
    }
}






/*

12345*
1234*6*
123*4*6*
12*4*6*8*
1*3*5*7*9*

*/