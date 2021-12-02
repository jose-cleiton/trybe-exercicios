function personRegister(personagem,origem,nota) {
    let info = {
        personagem: personagem,
        origem: origem,
        nota: nota
      };

      return info
    
}

info1 = personRegister('Margarida','Pato Donald','Namorada de Pato Donald')
info2 = personRegister('Tio Patinhas','Four Color Comics #178','O último MacPatinhas')
dataPerson= {person:[info1,info2]};


/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
  };
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas'
  };
*/
  

  //console.log(dataPerson.person[0].personagem);
  let indice = 0;
  for (key of dataPerson.person) {
      console.log(key.personagem);

  }

/*
  console.log('Bem vindo, ' + info.personagem);
console.table(info);

console.log(info[1]);
/*
info.recorrente='Sim';
console.log(info);

for (let index in info) {
  //  console.log(index);
    console.log(info[index]);
}


/* Mais exemplos de como inserir uma nova propiedade no objeto.






  arrayInformacoes = 
  [
    {
      Data: "Mar 20, 2017 12:00:00 AM", 
      Atividade: " 23 GERAR", 
      Observação: "Processo cancelado por: Administrador - as", 
      Usuário: "afo"
     }
  ]


data2 = 
    {
      "desColigada": "Empresa fulano de tal",
      "codMatricula": "00555454",
      "dataImpressao": "23/05/2016"
      
    };
   

    data2.Deucerto =arrayInformacoes;


    console.log(data2);
    */
   