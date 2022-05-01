const alunos = [
  { id: 1, name: 'Joaozim', media: 7, age: 23 },
  { id: 2, name: 'Rodrigo', media: 10, age: 36 },
  { id: 3, name: 'Doidao', media: 25, age: 100 },
  { id: 4, name: 'TheWitch', media: 6, age: 25 },
  { id: 5, name: 'Audi', media: 45, age: 145 }
]

// encontrar o index do primeiro alino menor de idade
function menorIdade(element) {
  return element.age < 10
}

console.log(alunos.findIndex(menorIdade))