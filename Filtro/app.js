const carros = [
  { id: 1, name: 'Fusca', marca: 'vols', price: 10.00 },
  { id: 2, name: 'Gol', marca: 'vols', price: 36.00 },
  { id: 3, name: 'Creta', marca: 'hyuudai', price: 100.00 },
  { id: 4, name: '308', marca: 'pegeout', price: 225.00 },
  { id: 5, name: 'RS8', marca: 'audi', price: 145.00 }
]

const inputSearch = document.querySelector('#inputTxt')
console.log(inputSearch)

inputSearch.addEventListener('input', event => {
  console.log(event.target.value.trim())
})