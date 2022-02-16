//string = texto, sempre entre ASPAS  '' ou, ""
//number ou interger ou float = número

//** Variaveis **
let nome = "Sapup3";
let idade = 36;

let num1 = 10;
let num2 = 5;

//Operação Adição
let total1 = num1 + num2;

//Operação Subtração
let total2 = num1 - num2;

//Operação Multiplicação
let total3 = num1 * num2;

//Operação Divisão
let total4 = num1 / num2;

//Resultado no console
console.log();


//** Condicional IF ELSE **
let  total = 32;

console.log("O total foi: " + total);

if(total > 50){
    console.log("Total foi MAIOR que 50");
}else{
    console.log("Total foi MENOR que 50");
}



//**  Array **
let ingredientes = [
    'xícaras (chá) de açúcar',
    '3 xícaras (chá) de farinha de trigo',
    '4 colheres (sopa) de margarina',
    '3 ovos',
    '1 e 1/2 xícara (chá) de leite',
    '1 colher (sopa) bem cheia de fermento em pó'
];

//console.log(ingredientes); // exibe todos os itens do array
console.log(ingredientes[2]); //exibe pelo indice



//** Laços de repetição, for, while, do-while (para exibir o array na tela)  **
for(let i=0; i < ingredientes.length; i++){
   // console.log(ingredientes[i]);
}

//** DOM document object model **/
//document.getElementById('titulo').innerHTML = "Titulo alterado 2.0";
//document.getElementsByClassName('subtitulo')[0].innerHTML = 'Alguma coisa...';
//document.querySelector('#titulo');

//** 

let ul = document.querySelector('ul');

for(let i=0; i < ingredientes.length; i++){
    let liHtml = '<li>' + ingredientes[i] + '</li>';
    
    //forma 1
    ul.innerHTML += liHtml;
 }
