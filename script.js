document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('new-task');
    const addButton = document.getElementById('add-task');
    const list = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const text = input.value.trim();
        if (text !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = text;
            li.appendChild(span);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => {
                list.removeChild(li);
            });

            span.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.appendChild(removeBtn);
            list.appendChild(li);
            input.value = '';
        }
    });
});

function calcpct(n1, n2) {
    return (n2 / n1) * 100;
}

    let x = 40;
    let y = 10;
    let pct = calcpct(x, y);
    console.log(`${pct}% de ${x} é ${y}`);

function maiorDeIdade(idade) {
    if (idade >= 18) {  
        return true; // É maior de idade
    } else { 
        return false; // É menor de idade
    }
}

function validacao(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true; // Acesso permitido
    } else {
        return false; // Acesso negado
    }
}

let usuario = 'pedro';
let senha = '123';
if (validacao(usuario, senha)) {
    console.log('Acesso permitido'); // True
} else {
    console.log('Acesso negado'); // False
}

let idade = 10;
if (maiorDeIdade(idade)) {
    console.log('Você é maior de idade'); // True
} else {
    console.log('Você é menor de idade'); // False
}


function somar(n1, n2) {
 let resultado = n1 + n2;
    console.log(`A soma de ${n1} e ${n2} é: ${resultado}`);
    return resultado;
}

somar(5, 10);


/* Modulo 1 - Variáveis, Tipos de Dados e Operadores
let x = 2;
let y = 3;
let r = 13;
let z = x + y + r;
let nome = 'Renato';
let sobrenome = 'Moraes';
console.log(nome + ' ' + sobrenome);

let nomecompleto = nome+` `+sobrenome;
console.log(`O seu nome completo é: ${nomecompleto}`);
console.log(`A soma de ${x} e ${y} é ${z}`);
if (z >= 18) {
    console.log('Voce é maior de idade');
} // < Menor
// > Maior
// == Igual
// === Igual estritamente
// != Diferente
// !== Diferente estritamente
// >= Maior ou igual
// <= Menor ou igual
// && E
// || Ou
// ! Não
*/

/*
let x = 10;
let y = 5;
console.log(x > y);

let w = "10";
let z = 10;
console.log(w === z);

let a = 10;
let b = 5;
console.log(a != b); 


let precocarne = 40.3;

if (precocarne <= 45) 
    {
    console.log('O preço da carne está barato');
} else {
    console.log('O preço da carne está caro'); 
 }
*/