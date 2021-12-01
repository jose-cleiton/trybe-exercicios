let size = 10;
let symbol = ' *';
let text = " ";
let espacoEmBranco=size;
let spacoEmBeancoDeDentro ='   '

for (let lineIndex = 1; lineIndex <= size; lineIndex += 1) {
    
    espacoEmBranco-=1;
    if(lineIndex>=1 && lineIndex<=2){
      
       console.log(text.repeat(espacoEmBranco) +  symbol.repeat(lineIndex));
    }
        
  
    if (lineIndex>=3 ){
       
        console.log(text.repeat(espacoEmBranco) + ' *' + spacoEmBeancoDeDentro+ "*");
        spacoEmBeancoDeDentro+="  ";

        if (lineIndex >=(size-1)) {
            console.log(text.repeat(espacoEmBranco-1) + symbol.repeat(size));
            break;
        }
    }
    
}



/*
console.log(symbol+dentroDaPiramide+symbol)
dentroDaPiramide+=' ';
console.log(symbol+dentroDaPiramide+symbol)
dentroDaPiramide+=' ';
console.log(symbol+dentroDaPiramide+symbol)

*/
/*

12345*
1234*6*
123*4*6*
12*4*6*8*
1*3*5*7*9*

*/