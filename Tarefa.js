<!DOCTYPE html>
<html lang="br-pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Lista de Tarefas</title>
  </head>
  <body>
    <div id="geral">
      <h1>Lista de Tarefas</h1>
      <input type="text" placeholder="Digite sua tarefa" id="input-tarefa" />
      <button id="botao">Adicionar</button>
      <div id="tarefas"></div>
    </div>

    <script>
      const botaoAdd = document.getElementById('botao');
      const input = document.getElementById('input-tarefa');
      const tarefasDiv = document.getElementById('tarefas');

      botaoAdd.addEventListener('click', function () {
        if (input.value.trim() !== '') {
          const tarefa = document.createElement('p');
          tarefa.textContent = '- ' + input.value.trim();
          tarefa.style.cursor = 'pointer'; 
          tarefasDiv.appendChild(tarefa);
          input.value = '';

          let marcado = false;
          tarefa.addEventListener('click', function () {
            if (!marcado) {
              tarefa.style.textDecoration = 'line-through';
              marcado = true;
            } else {
              tarefa.style.textDecoration = '';
              marcado = false;
            }
          });

          tarefa.addEventListener('dblclick', function () {
            tarefasDiv.removeChild(tarefa);
          });
        }
      });
    </script>
  </body>
</html>
