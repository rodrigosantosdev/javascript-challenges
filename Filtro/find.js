const alunos = [
  { id: 1, name: 'Joaozim', media: 7, age: 23 },
  { id: 2, name: 'Rodrigo', media: 10, age: 36 },
  { id: 3, name: 'Doidao', media: 25, age: 100 },
  { id: 4, name: 'TheWitch', media: 6, age: 25 },
  { id: 5, name: 'Audi', media: 45, age: 145 }
]

// Retorna o primeiro elemento do array, com idade maior que 30 anos.

function maisDe30(element, index, array) {
  return element.age >= 100
}

// passa pelo array aluno.find(NomeDaFunção)
console.log(alunos.find(maisDe30))