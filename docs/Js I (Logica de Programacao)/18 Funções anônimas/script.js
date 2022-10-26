function somar(a,b){
    return a+b
}

let operacao = somar
console.log(operacao(4,5))

operacao = function (a,b){
    return a-b
}

console.log(operacao(4,5))