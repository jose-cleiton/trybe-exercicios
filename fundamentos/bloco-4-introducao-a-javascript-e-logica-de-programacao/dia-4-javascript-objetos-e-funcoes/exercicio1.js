let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem vindo, ' + info.personagem);


info.recorrente='Sim';
console.log(info);

for (let index in info) {
    console.log(index);
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