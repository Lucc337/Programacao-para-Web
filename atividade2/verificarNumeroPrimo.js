
function verificarNumeroPrimo(n) {
    if (n <= 1) return false; // 0 e 1 não são primos
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Se for divisível por algum número, não é primo
        }
    }
    return true; // Se não encontrar divisores, o número é primo
}

console.log(verificarNumeroPrimo(0)); // false
console.log(verificarNumeroPrimo(1)); // false
console.log(verificarNumeroPrimo(2)); // true
console.log(verificarNumeroPrimo(3)); // true
console.log(verificarNumeroPrimo(7)); // true
console.log(verificarNumeroPrimo(83)); // true
console.log(verificarNumeroPrimo(100)); // false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729)); // true
console.log(verificarNumeroPrimo(14348907)); // false

// Função para transpor a matriz
function transporMatriz(A) {
    
    console.log("Matriz Original:");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]);
    }

    
    let transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    
    console.log("\nMatriz Transposta:");
    for (let i = 0; i < transposta.length; i++) {
        console.log(transposta[i]);
    }
}

// Exemplo de uso 
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);

