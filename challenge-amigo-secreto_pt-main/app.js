//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value; //Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
    if(amigo === ''){ //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
        alert('Por favor, insira um nome.'); //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    } else {
        amigos.push(amigo); //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
        exibirAmigos(); //Exibir a lista de amigos
        //console.log(amigos);
        limparCampo(); //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    }
}

function limparCampo(){
    amigo = document.querySelector('input'); //VARIÁVEL AMIGO JÁ DECLARADA NO ADICIONARAMIGO() PEGANDO SOMENTE O CAMPO SEM O VALOR 
         amigo.value = ''; //LIMPANDO O CAMPO DE INPUT COM O VALOR VAZIO 
 }


function exibirAmigos(){
    let lista = document.querySelector('ul'); //Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
    lista.innerHTML = ""; //Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
    for(let i = 0; i < amigos.length; i++){ //Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
        let amigo = amigos[i]; //Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){ //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.

        alert('Por favor, adicione um amigo.'); //Se a lista estiver vazia, exiba um alerta com a mensagem de erro: "Por favor, adicione um amigo."
    } else {
        let indice = Math.floor(Math.random() * amigos.length); //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

        let amigoSorteado = amigos[indice]; //Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.

        document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`; //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
    }
}