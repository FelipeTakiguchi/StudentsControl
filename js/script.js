function select() {
    let file = document.getElementById('flImage');
    file.click();
}

function atualiza() {
    let photo = document.getElementById('imgFoto');
    let file = document.getElementById('flImage');
    // Sem essa verificação, ele irá dar erro quando o usuário clicar em cancelar
    // pois enviará uma "imagem" vazia
    if (file.files.length == 0) {
    return;
    }
    // Inicializando a função que pega o caminho da imagem
    let reader = new FileReader();
    // Está pegando o caminho da imagem
    reader.readAsDataURL(file.files[0]);
    // Coloca o caminho da imagem no Source da tag IMG
    reader.onload = () => {
        photo.src = reader.result
    }
};

function cadAluno(){
    let aluno = document.getElementById('newAluno');
    let sala = document.getElementById('newSala');
    let fundo = document.querySelector('.content');
 
    if(aluno.classList.contains("hidden")){
        aluno.classList.remove("hidden");
        aluno.classList.add("show");
        fundo.classList.add("blur");
    }
    if(sala.classList.contains("show")){
        sala.classList.remove("show");
        sala.classList.add("hidden");
    }
}

function cadSala(){
    let aluno = document.getElementById('newAluno');
    let sala = document.getElementById('newSala');
    let fundo = document.querySelector('.content');
 
    if(aluno.classList.contains("show")){
        aluno.classList.remove("show");
        aluno.classList.add("hidden");
    }
    if(sala.classList.contains("hidden")){
        sala.classList.remove("hidden");
        sala.classList.add("show");
        fundo.classList.add("blur");
    }
}
function voltaTela(){
    let aluno = document.getElementById('newAluno');
    let sala = document.getElementById('newSala');
    let fundo = document.querySelector('.content');
    
    if(aluno.classList.contains("show")){
        aluno.classList.remove("show");
        aluno.classList.add("hidden");
        fundo.classList.remove("blur");
    }
    if(sala.classList.contains("show")){
        sala.classList.remove("show");
        sala.classList.add("hidden");
        fundo.classList.remove("blur");
    }
}