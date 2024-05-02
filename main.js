const form = document.getElementById('form-campo');
let formValido = false;
const containerMensagemError =  document.querySelector('.error-message');
const containerMensagemSucesso =  document.querySelector('.sucess-message');

function validarForm(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemSucesso = `Formulário válido! Campo B é maior que o número A.`;
    const mensagemError = `Formulário inválido! Campo B deve ser maior que o número A.`;
    formValido = validarForm(numeroA.value, numeroB.value);

    if (formValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'
        containerMensagemError.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';
    }else {
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';
    }
})