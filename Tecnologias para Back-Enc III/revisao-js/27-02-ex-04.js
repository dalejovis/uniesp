const notas = [10, 7, 6];

function media(notas) {
    let media = (notas[0] + notas[1] + notas[2]) / 3;
    return media;
}

console.log("A primeira nota do aluno é: " + notas[0] + "\nA segunda nota do aluno é: " + notas[1] + "\nA terceira nota do aluno é: " + notas[2] + "\nA média do aluno é: " + media(notas));