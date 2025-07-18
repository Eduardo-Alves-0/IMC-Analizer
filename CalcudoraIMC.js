function inputUsuario() {
    let peso = parseFloat(prompt("Digite seu peso (kg):"));
    let altura = parseFloat(prompt("Digite sua altura (m):"));
    return { peso, altura };
}

function calculoImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function classificar(imc) {
    imc = parseFloat(imc); // Garantir que seja número para comparar
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Acima do peso";
    } else if (imc < 35) {
        return "Obesidade grau I";
    } else if (imc < 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}


let continuar = true;

while (continuar) {
    let usuario = inputUsuario();
    let imc = calculoImc(usuario.peso, usuario.altura);
    let classificacao = classificar(imc);

    console.log(`Seu IMC é: ${imc}`);
    console.log(`Classificação: ${classificacao}`);

    let resposta = prompt("Deseja calcular outro IMC? (s/n)");
    if (resposta.toLowerCase() !== 's') {
        continuar = false;
    }
}
