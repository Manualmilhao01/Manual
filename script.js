function adicionarTarefa() {
    var input = document.getElementById('novaTarefa');
    var tarefaTexto = input.value;
    if (tarefaTexto === '') return;

    var ul = document.getElementById('listaTarefas')
    var li = document.createElement('li')

    li.innerHTML = 
    `${tarefaTexto}
    <button onclick="marcarConcluida(this)">Concluída</button>
    <button onclick="removerTarefa(this)">Remover</button>`;
    
    ul.appendChild(li);
    input.value = ''
}

function marcarConcluida(button) {
    var li = button.parentElement;
    li.classList.toggle('concluida')
}
function removerTarefa(button) {
    var li = button.parentElement;
    li.remove();
}