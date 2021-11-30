let valorLadoQuadrado=3;
caracter="# "
let caracterAImprimir =Array(valorLadoQuadrado+1).join(caracter);
let espacoEmBranco =Array(valorLadoQuadrado-1).join("  ");
for (let i=1;i<=valorLadoQuadrado-1;i++) {
      if (i==1) {
        console.log(caracterAImprimir);
    }else if (i>1){
    console.log(caracter + espacoEmBranco +caracter);
    } 
   }
console.log(caracterAImprimir);

//let meioDoTriangulo =((((valorLadoTriangulo/2)|0)+1));