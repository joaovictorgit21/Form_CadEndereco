'use strict'; // Strict mode
// https://viacep.com.br/

//Function to clear form
// Arrow Function

const clearForm = (endereco) => {
    document.querySelector('input#rua').value = '';
    document.querySelector('input#bairro').value  = '';
    document.querySelector('input#cidade').value  = '';
    document.querySelector('input#estado').value  = '';

}

// Verificar se CEP é valido
const eNumber = (number) => /^[0-9]+$/.test(number);
const cepValido = (cep) => cep.length == 8 && eNumber(cep);

// Function responsible for filling out the form
const fillForm = (address) => {
    document.querySelector('input#rua').value = address.logradouro;
    document.querySelector('input#bairro').value  = address.bairro;
    document.querySelector('input#cidade').value  = address.localidade;
    document.querySelector('input#estado').value  = address.uf;
}

const searchCep = async() => {
    clearForm();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados = await fetch(url); // fetch = porta entre minha aplicaçao com a API
        const addresss = await dados.json();

        if(addresss.hasOwnProperty('erro')){
            alert('CEP não encontrado!')
        } else {
            fillForm(addresss);
        }
    } else {
        alert('CEP incorreto')
    }
}

// Add event DOM input CEP

document.querySelector('input#cep').addEventListener('focusout', searchCep);