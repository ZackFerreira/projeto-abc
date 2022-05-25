//Endereço da API json-server
let url = "http://localhost:3000/vagas";

//Elemento a ser preenchido
const selectVagas = document.querySelector("#vaga");

//Ajax (tecnica de acesso a dados de API)
//1) acessamos a url da api em que estão os dados 
fetch(url)
//2) E então (then) colete a resposta
//do servidor no formato json
.then( resposta => resposta.json() )

//3) Capture os dados da resposta e faça o que quiser com ela
.then( dados => {

  selectVagas.innerHTML = "<option></option>"
 
    for(let vaga of dados){
      let opcao = document.createElement('option');
      opcao.textContent = vaga.titulo;
      opcao.value = vaga.id;
      selectVagas.appendChild(opcao);
    }

  });
  
  
  