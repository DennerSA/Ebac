const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validarNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;
    formValido = validarNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMensagemSucesso =  document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
    }else{
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block'
    }

})

nomeBeneficiario.addEventListener('keyup', function(e) {
    formValido = validarNome(e.target.value)
    if (!formValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    }else{
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
});


/* Funções aprendidas em aulas
let idade = prompt('Bem vindo ao sistema eleitoral! Digite sua idade ara seguir com o cadastramento')

if (idade >= 16) {
    alert('Certo! Vamos prosseguir com o cadastramento.')
} else {
    alert('Para prosseguir, o eleitor deve ter no minino 16 anos')
}

let idade = prompt('Bem vindo ao sistema eleitoral! Digite sua idade ara seguir com o cadastramento')
const resultado = idade >= 16 ? 'Certo! Vamos prosseguir com o cadastramento.' : 'Para prosseguir, o eleitor deve ter no minino 16 anos'
alert(resultado)


function descobrirIdade(anoNascimento) {
    return 2024 - anoNascimento
}

function somaNumeros(numeroA, numeroB, numeroc) {
    return numeroA + numeroB + numeroc
}

function somaNumeros(numeroA, numeroB, numeroc) {
    let resultado = numeroA + numeroB + numeroc
    return console.log('O resultado da soma dos numeros foi: ', resultado)
}

let nome = "Denner"
function saaudacao() {
    console.log(`Olá, ${nome}!`)
}


function appresentandoAlguem() {
    let nome = "Denner"
    function saudacao(){
        console.log(`Olá, ${nome}`)
    }
    function despedida() {
        console.log(`Até mais, ${nome}`)
    }
    return {
        saudacao: saudacao,
        despedida: despedida
    }
}


nomeBenefeiciario.value.split(' ')
document.getElementById('btn-depositar').disabled = true
*/