const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];
for(let i = 0; i < students.length; i +=1) {
    const atual = students[i];
    if(atual.grade >= 60) {
        atual.approved = 'Aprovado!'
    } else {
        atual.approved = 'Reprovado!'
    }
}
//console.log(students);
/*----------------------------------------------------------*/
students.forEach((itemAtual) => {
    if(itemAtual.grade >= 60) {
        itemAtual.approved = 'Parabens!'
    } else {
        itemAtual.approved = 'Estude mais até aproxima!'
    }
})
console.log(students);
students.forEach((itemAtual) => itemAtual.grade -= 10);
console.log(students);