let $ = require('jquery');

const nomes = ['tati', 'chris', 'urso', 'roger'];
nomes.forEach(nome => {
    $('body').append(`<h1>${nome}</h1>`)
})