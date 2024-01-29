alert( "Hello Word!")

let numberOne= prompt( "Digite o primeiro número")
let numberTwuo= prompt ("Digite o segundo número")

let result = Number(numberOne) + Number(numberTwuo)
alert (`A soma dos números digitados é: ${result}`)


let firstNumber= prompt( "Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let div = (firstNumber / secondNumber).toFixed(2)

alert (`A subtração dos número é: ${sub}`)
alert (` A multiplicação dos números é: ${mult}`)
alert (` A divisão dos números é: ${div}`)

let myVar =prompt (`Digite um valor aleatorio: nome, numero...`)

if(!isNaN (myVar) ){
  alert(`A variavel escolhida é um número`)
}
else{
  alert(`A variavel escolhida não é um número`)
}


let myString =prompt (`Digite um nome, numero,verdadeiro ou falso `)

if(!isNaN( myString)){
  alert(`A variavel escolhida não é uma string`)
}
else{
  alert(`A variavel escolhida é uma string`)
}

let myValue =prompt (`Digite um nome, numero,true ou false `)

if(myValue == "true"|| myValue == "false"){
  alert(`A variavel escolhida é um valor booleano`)
}
else{
  alert(`A variavel escolhida não é um valor booleano`)
}


let chosen = prompt( "Digite um número")
chosen= Number(chosen)

if( (chosen % 2 ) == 0){
  alert(" O número escolhido é par")
}
else{
  alert(" O número escolhido não é par")
}

let secondChosen= prompt("Digite outro número")
secondChosen = Number(secondChosen)

if( (secondChosen % 2)!= 0){
alert( " O número escolhido é impar")
}
else{
  alert( " O número escolhido não é impar  ")
}
