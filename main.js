const form = document.getElementById('form_atividade');
let linhas = '';
const aprovado = '<img src="images/aprovado.png">'
const reprovado = '<img src="images/reprovado.png" alt="" >'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado!</span>'
const spanReprovado = '<span class="resultado reprovado">Repovado!</span>'
const notaMinina = parseInt(prompt("Digite a nota mínima"));

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha(); 
    atualizarTabela();
    atualizarMedia();
   
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinina ? aprovado : reprovado }</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas ;
}

function atualizarMedia() {
    const mediaFinal = calcularMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinina ? spanAprovado : spanReprovado;
}

function calcularMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
       somaDasNotas += notas[i] 
    }

    return media = somaDasNotas / notas.length;
}

