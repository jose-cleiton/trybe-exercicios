let valorLadoTriangulo=5;
let caracter="*";
let meioDoTriangulo =((valorLadoTriangulo/2)|0);
let caracterAImprimir =Array(valorLadoTriangulo+1).join(caracter);
let espacoEmBranco =Array(valorLadoTriangulo).join(" ");

 
let inputLine = '';
for(let i=1; i<=valorLadoTriangulo; i++){
    for (let l=1; l<=valorLadoTriangulo; l++){

    }




if(i==1) {
  console.log(Array(valorLadoTriangulo).join(" ") +caracter)

}else  {
  console.log(Array(valorLadoTriangulo-i+1).join(" ") +Array(i+1).join(caracter))
  
}


}




/*for (let lineIndex = 0; lineIndex <= valorLadoQuadrado; lineIndex += 1) {
  if(lineIndex ==1) {
    console.log(espacoEmBranco + caracter + espacoEmBranco)
  } else if (lineIndex == 2) {
    meioDoTriangulo -1;
    console.log(espacoEmBranco + caracter + espacoEmBranco)
  }
  //console.log(inputLine);

  inputLine = inputLine + symbol;
};

*/

/*


12345*  
1234*6*
123*5*6*
12*4*5*6*
*2*4*5*6 *
 
 
 
*/