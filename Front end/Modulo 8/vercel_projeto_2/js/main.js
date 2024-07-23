const form = document.getElementById("form_cadastro")
let linhas = '';
const nomes = [];
const telefones = [];


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    adicionarLinha();
    atualizarTabela();
    atualizarTotal();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if(nomes.includes(inputNome.value)) {
        alert(`A pessoa: ${inputNome.value} já foi inserida`)
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
        console.log(linha);
        linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    console.log(corpoTabela)
    console.log(linhas)
    corpoTabela.innerHTML = linhas ;
}

function atualizarTotal() {
    const valorTotal = calcularTotal();

    document.getElementById('total').innerHTML = valorTotal;
}

function calcularTotal() {
    let somaCadastrado = 1;

    for (let i = 0; i < nomes.length; i++) {
        somaCadastrado += i;
    }

    return somaCadastrado;
}