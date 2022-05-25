/*Exemplo gerais de jquery */
const titulo = $('h1');
console.log(titulo)


/* textContent e InnerHTML  << funçoes para inserção */
titulo.text('relação de Candidatos')

/*script para carregar a lista de candidatos da api*/ 


let urlCandidatos ='http://localhost:3000/candidatos';
const botao = $('#carregar');
const lista = $('#lista');

botao.on('click', function(){
  $.ajax({
    url:urlCandidatos,
    dataType:'json',
    method: 'GET', /*GET SERVE PARA LER DADOS E POST PARA ENVIAR*/
    success: function(resposta){
      lista.html(""); // deixando a lista vazia inicalmente
      $.each(resposta,function(indice, conteudo){
        console.log(indice)
        console.log(conteudo)

        lista.append(
          `<li class="list-group-item">
            ${conteudo.nome}
            </li>`
         
        );  
      });
    }
  });
});

