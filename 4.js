const numeros = [1, 2, 3, 4, 5]

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log("\n")

for(let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] *2
    console.log(numeros[i])
}