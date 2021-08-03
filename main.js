function botao(){
  //alert("obrigado por clicar"); //exibe um alert com a mensagem
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
  window.open("https://www.uol.com.br/");// redireciona para uma nova pagina, de forma "_blank"
  //window.location.href = "https://www.uol.com.br/"; // redireciona para uma nova pagina de forma "_self"
}

function trocar(elemento){
  //document.getElementsByClassName("mousemove").innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
  //document.getElementsByClassName("mousemove").innerHTML = "passe o mouse aqui";
  elemento.innerHTML = "passe o mouse aqui";
}

function load(){
  alert("pagina carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);
}




/*Comandos strings


let nome = "Jonatas";
let frase = "Japão é o melhor time do mundo";

//alert("meu primeiro js");
//alert(nome + " tem " + idade + " anos")
//console.log(nome);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil")); //troca termos em uma string
//console.log(frase.toLocaleUpperCase);//coloca a frase em maiuscula
console.log(frase.toLocaleLowerCase);// coloca a frase em minuscula
*/

/* Comandos números
let idade = 29;
let idade2 = 10;
let n1 = 5;
let n2 = 2;

//alert(idade + idade2);
//console.log(n1*n2);
*/


/*Comandos arrays(vetores)

let lista = ["maçã", "pera", "laranja"]; // array
let fruta = {nome: "maçã", cor: "vermelha"}; // dicionario
let frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]; // lista dicionário

console.log(lista); // lista completa
console.log(lista[1]); // condicional de impressão de apenas 1 item da lista
lista.push("uva"); // adiciona item no final da lista
lista.pop(); // retira ultimo item inserido no final da lista
console.log(lista.length); // faz a contagem de itens na lista
console.log(lista.reverse()) // inverte a ordem dos itens na lista.
console.log(lista.toString()); // converte o array em string
console.log(lista.join(" | ")) // adiciona incrementos a sua string no caso ( "|" )
console.log(fruta.nome); // determina o objeto do dicionario e sua posição.
console.log(frutas); // imprime a lista do dicionario
console.log(frutas[1].nome); // imprime o nome da fruta da posição da lista
*/

// Condicionais e date

/*let idade = 18;
let idade = prompt("qual sua idade?"); // comando prompt faz uma pergunta ao usuario da página.
if (idade >= 18) {
  alert("maior de idade");
} else{
  alert("menor de idade");
}
*/

/*
let count = 0; //inicia um contador do 0
while (count <= 5){ // quando chegar a contagem até 5 script para.
  console.log(count);
  count++; //adiciona o zero na contagem
}
*/

/*
let count
for (count=0; count <= 5; count++){
  console.log(count);
}
*/

/*
let d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMonth()+1);
console.log(d.getUTCFullYear());
*/

//Funções
/*
function soma(n1 , n2) {
  return n1+n2; //retorna a soma de 1 numeros
}
console.log(soma(5, 10)); 

function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome); //retorna a troca de nomes atribuidas a frase 
}

alert(setReplace("Vai palmeiras", "palmeiras", "Corinthians")); // manteve a Frase, porem trocou os nomes dos times.

*/

// funcão local
/*
function validaIdade(idade){
  let validar; //variavel de validacao da idade
  if (idade >= 18) {
    validar = true
  }else {
    validar = false
  }
  return validar; // retorne minha variavel de validação
}

let idade = prompt("Qual sua idade?"); // pergunta ao usuario
console.log(validaIdade(idade));// print do resultado da variavel validar
*/

// funcoes globais
/*
let validar = 0; //variavel global de validacao da idade
function validaIdade(idade){  
  if (idade >= 18) {
    validar = true
  }else {
    validar = false
  }
  return validar
}

let idade = prompt("Qual sua idade?"); // pergunta ao usuario
validaIdade(idade);// print do resultado da variavel validar
console.log(validar);
*/