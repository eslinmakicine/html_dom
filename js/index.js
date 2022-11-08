
function adcCampo() {
    //armazena valor que está sendo passado no input com o id 'qtdFilme'
    var qtdFilmeInput = document.querySelector("#qtdFilme");
    var qtdFilme = qtdFilmeInput.value;

    //chama a função de contador
    contador(qtdFilme);

}

//Função para criar um contador para adc input na quantidade de vezes correta
function contador(qtdFilme) {
    var count = 1;
    console.log(qtdFilme);
    while (count <= qtdFilme) {
        console.log("entrou count" + count);

        var input = document.createElement("input"); //cria novo elemento do tipo input
        input.type = "text"; //informa o tipo do input
        var parent = document.getElementById("informaFilmes"); //busca o elemento que quer adc o input
        parent.appendChild(input); //anexa elemento novo ao arquivo html

        console.log("finalizou count" + count);

        count++;
    }
}