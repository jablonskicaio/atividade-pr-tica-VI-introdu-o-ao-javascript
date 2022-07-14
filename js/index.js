

// EXERCICIO 1 ----- EXERCICIO1 ----- EXERCICIO 1 ----- EXERCICIO1 ----- EXERCICIO 1 ----- EXERCICIO1
/*
Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável. Imprima abaixo da frase o tipo de
dado armazenado na variável.
*/
document.write(`Exercicio 1 <br>`)
let ageInput = Number(prompt())

document.writeln(`Minha idade é ${ageInput} anos <br>`)
document.write(`O tipo de minha variável é `, typeof ageInput)

document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)


// EXERCICIO 2 ----- EXERCICIO 2 ----- EXERCICIO 2 ----- EXERCICIO 2 ----- EXERCICIO 2 ----- EXERCICIO 2
/*
Crie três variáveis JavaScript, duas usando const, uma usando let.
Na variável let coloque a soma das duas variáveis const. Apresente
valor da variável let no documento html junto da frase "A resultado
da soma de x e y é z", sendo x o valor armazenado na primeira const,
y o valor armazenado segunda const e z o valor armazenado na
variável criada usando let.
*/
document.write(`Exercicio 2 <br>`)

const x = 38;
const y = 40;
let result = x + y;

document.write(`O resultado da soma de ${x} e ${y} é ${result}`)

document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)

// EXERCICIO 3 ----- EXERCICIO 3 ----- EXERCICIO 3 ----- EXERCICIO 3 ----- EXERCICIO 3 ----- EXERCICIO 3
/*
Crie três variáveis, uma usando const, duas variáveis usando let. Na
variável const coloque o total de uma compra, por exemplo 149.90.
Na variável let coloque a quantidade de parcelas, por exemplo 2. Na
outra variável let coloque o valor da parcela. Apresente no
documento html as seguintes informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"
*/
document.write(`Exercicio 3 <br>`)
const valorTotal=1100;
let quantidadeParcelas=12;
let valorParcela

valorParcela=valorTotal/quantidadeParcelas

document.write(`O valor total da compra é ${valorTotal}, parcelado em ${quantidadeParcelas} de ${valorParcela}`)

document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)

// EXERCICIO 4 ----- EXERCICIO 4 ----- EXERCICIO 4 ----- EXERCICIO 4 ----- EXERCICIO 4 ----- EXERCICIO 4
/*
Crie duas variáveis usando let. Na primeira coloque um total de
minutos e defina um valor para ela (por exemplo, minutos = 120). Na
segunda coloque o total em segundos destes minutos armazenados

na primeira variável let. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!"
*/
document.write(`Exercicio 4 <br>`)

let minutos = 3007;
let segundos = minutos * 60;

document.write(`${minutos} minutos equivalem à ${segundos} segundos.`)

document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)

// EXERCICIO 5 ----- EXERCICIO 5 ----- EXERCICIO 5 ----- EXERCICIO 5 ----- EXERCICIO 5 ----- EXERCICIO 5
/*
Crie cinco variáveis usando const. Na primeira armazene o nome de
um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de
0 à 10). Calcule a média das notas e armazene na quinta variável let
criada. Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"
*/
document.write(`Exercicio 5 <br>`)

const nomeAluno = `Caio Jablonski`;
const notaAula1 = 6; 
const notaAula2 = 9;
const notaAula3 = 8;
let mediaNotas = (notaAula1+notaAula2+notaAula3)/3;

document.write(`O ${nomeAluno} nomeAluno ficou com média ${mediaNotas}`)

document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)

