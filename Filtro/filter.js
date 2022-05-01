const alunos = [
  { id: 1, name: 'Joaozim', media: 7, age: 23 },
  { id: 2, name: 'Rodrigo', media: 10, age: 36 },
  { id: 3, name: 'Doidao', media: 25, age: 100 },
  { id: 4, name: 'TheWitch', media: 6, age: 25 },
  { id: 5, name: 'Audi', media: 45, age: 145 }
]

// filtar todos os nomes, com a media maior ou igual a 7 (APROVADOS)

function aprovados(element, index, array) {
  return element.media >= 25
}

console.log(alunos.filter(aprovados))