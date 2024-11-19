// Obter os elementos dos inputs
const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("CPF");
const telInput = document.getElementById("tel");
const emailInput = document.getElementById("email");
const endInput = document.getElementById("end");

// Função para exibir o alerta com os dados
function exibirAlerta() {
    let nome = nomeInput.value;
    let cpf = cpfInput.value;
    let end = endInput.value;
    let email = emailInput.value;
    let tel = telInput.value;

    // Mensagem de confirmação
    let mensagem = "Olá " + nome + "!\n" +
                   "Seu CPF é: " + cpf + ".\n" +
                   "Seu e-mail é: " + email + ".\n" +
                   "Seu endereço é: " + end + ".\n" +
                   "Seu telefone é: " + tel + ".\n\n" +
                   "Você confirma essas informações?";

    // Exibir mensagem de confirmação
    if (confirm(mensagem)) {
        alert("Informações confirmadas!");
    } else {
        alert("Informações não confirmadas. Por favor, revise-as.");
    }
}

// Adicionar evento de "keydown" para todos os inputs
[nomeInput, cpfInput, endInput, emailInput, telInput].forEach(input => {
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) { // Verifica se a tecla Enter foi pressionada
            exibirAlerta();
        }
    });
});