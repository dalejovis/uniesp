const notas = [6.5, 7, 7];

function media(notas) {
    let media = (notas[0] + notas[1] + notas[2]) / 3;
    return media;
}

if (media(notas) >= 7) {
    aprovacao = "aprovado";
} else {
    aprovacao = "reprovado";
}

console.log("A primeira nota do aluno é: " + notas[0] + "\nA segunda nota do aluno é: " + notas[1] + "\nA terceira nota do aluno é: " + notas[2] + "\nA média do aluno é: " + media(notas) + "\nO aluno está " + aprovacao + "!");